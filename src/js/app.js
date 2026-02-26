const Web3 = require('web3');
const contract = require('@truffle/contract');

const votingArtifacts = require('../../build/contracts/Voting.json');
var VotingContract = contract(votingArtifacts);

window.App = {

  account: null,
  instance: null,

  eventStart: async function() {

    await window.ethereum.request({ method: 'eth_requestAccounts' });

    VotingContract.setProvider(window.ethereum);

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    App.account = accounts[0];

    $("#accountAddress").html("Your Account: " + App.account);

    App.instance = await VotingContract.deployed();

    // Load candidates
    const countCandidates = await App.instance.getCountCandidates();

    for (let i = 0; i < countCandidates; i++) {
      const data = await App.instance.getCandidate(i + 1);

      const id = data[0];
      const name = data[1];
      const party = data[2];
      const voteCount = data[3];

      const viewCandidates = `
        <tr>
          <td>
            <input class="form-check-input" type="radio" name="candidate" value="${id}" id=${id}>
            ${name}
          </td>
          <td>${party}</td>
          <td>${voteCount}</td>
        </tr>`;

      $("#boxCandidate").append(viewCandidates);
    }

    // Disable vote button if already voted
    const voted = await App.instance.checkVote({ from: App.account });
    if (!voted) {
      $("#voteButton").attr("disabled", false);
    } else {
      $("#voteButton").attr("disabled", true);
    }

    // Load dates
    try {
      const result = await App.instance.getDates();
      const startDate = new Date(result[0] * 1000);
      const endDate = new Date(result[1] * 1000);
      $("#dates").text(startDate.toDateString() + " - " + endDate.toDateString());
    } catch (err) {
      console.error(err);
    }

    // ADMIN BUTTONS

    $('#addCandidate').click(async function (e) {
      e.preventDefault();

      try {
        const nameCandidate = $('#name').val();
        const partyCandidate = $('#party').val();

        await App.instance.addCandidate(nameCandidate, partyCandidate, {
          from: App.account
        });

        showPopup("Candidate added successfully!");
        window.location.reload();

      } catch (error) {
        console.error(error);
        showPopup("Transaction failed or rejected.");
      }
    });

    $('#addDate').click(async function (e) {
      e.preventDefault();

      try {
        const startDate = Date.parse(document.getElementById("startDate").value) / 1000;
        const endDate = Date.parse(document.getElementById("endDate").value) / 1000;

        await App.instance.setDates(startDate, endDate, {
          from: App.account
        });

        showPopup("Voting dates set successfully!");
        window.location.reload();

      } catch (error) {
        console.error(error);
        showPopup("Failed to set voting dates.");
      }
    });

  },

  vote: async function() {

    const candidateID = $("input[name='candidate']:checked").val();

    if (!candidateID) {
      showPopup("Please select a candidate before voting.");
      return;
    }

    try {

      const hasVoted = await App.instance.checkVote({ from: App.account });

      if (hasVoted) {
        showPopup("This wallet has already been used to vote.");
        $("#voteButton").attr("disabled", true);
        return;
      }

      // 🔥 START TIMER
      const startTime = performance.now();

      await App.instance.vote(parseInt(candidateID), {
        from: App.account
      });

      // 🔥 END TIMER
      const endTime = performance.now();
      const confirmationTime = ((endTime - startTime) / 1000).toFixed(3);

      console.log("Vote Confirmation Time (seconds):", confirmationTime);

      $("#voteButton").attr("disabled", true);
      showPopup("Vote cast successfully!");

      setTimeout(function(){
        window.location.reload();
      }, 1500);

    } catch (error) {

      console.error(error);

      if (error.message.includes("already voted")) {
        showPopup("This wallet has already been used to vote.");
      } 
      else if (error.message.includes("Voting is not active")) {
        showPopup("Voting period is not active.");
      } 
      else {
        showPopup("Transaction failed or rejected.");
      }
    }
  }
};


// 🔥 POPUP SYSTEM

function showPopup(message) {
  document.getElementById("popupMessage").innerText = message;
  document.getElementById("customPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("customPopup").style.display = "none";
}


// 🔹 Web3 Initialization

window.addEventListener("load", function() {

  if (typeof web3 !== "undefined") {
    window.eth = new Web3(window.ethereum);
  } else {
    window.eth = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
  }

  window.App.eventStart();
});