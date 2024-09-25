function addDonationToHistory(amount, causeTitle) {
  const historyContent = document.getElementById("history-content");

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString(); 

  const newHistoryEntry = document.createElement("div");
  newHistoryEntry.classList.add("border", "border-gray-300", "p-4", "rounded-lg", "shadow-md");

  newHistoryEntry.innerHTML = `
      <p><strong>${amount} Taka is Donated for ${causeTitle}</strong></p>
      <p><strong>Date:</strong> ${formattedDate}</p>
  `;

  historyContent.appendChild(newHistoryEntry);
}

// Event listener for the first donation card
document.getElementById("donate-now").addEventListener("click", function() {
  const donation = document.getElementById("donate-amount").value;
  const parsedonation = parseFloat(donation);

  if (!isNaN(parsedonation) && parsedonation > 0) {
      // Update individual balance
      const addBalance = document.getElementById("balance").innerText;
      const newBalance = parseFloat(addBalance) + parsedonation + ' BDT';
      document.getElementById("balance").innerHTML = newBalance;

      // Update main balance
      const updateMainBalance = document.getElementById("main-balance").innerText;
      const newMainBalance = parseFloat(updateMainBalance) - parsedonation + ' BDT';
      document.getElementById("main-balance").innerHTML = newMainBalance;

      // Clear the donation input
      document.getElementById("donate-amount").value = "";

      // Show the modal after donation is successful
      document.getElementById("my_modal_5").showModal();

      // Add to donation history
      addDonationToHistory(parsedonation, "Flood at Noakhali, Bangladesh");
  } else {
      alert("Please enter a valid donation amount");
  }
});

// Event listener for the second donation card
document.getElementById("donate-now-1").addEventListener("click", function() {
  const donation_Card_2 = document.getElementById("donate-amount-1").value;
  const parsedonation_Card_2 = parseFloat(donation_Card_2);

  if (!isNaN(parsedonation_Card_2) && parsedonation_Card_2 > 0) {
      // Update individual balance
      const addBalance_Card_2 = document.getElementById("balance-card2").innerText;  // Corrected
      const newBalance_Card_2 = parseFloat(addBalance_Card_2) + parsedonation_Card_2 + ' BDT';
      document.getElementById("balance-card2").innerHTML = newBalance_Card_2;  // Corrected

      // Update main balance
      const updateMainBalance_Card_2 = document.getElementById("main-balance").innerText;
      const newMainBalance_Card_2 = parseFloat(updateMainBalance_Card_2) - parsedonation_Card_2 + ' BDT';
      document.getElementById("main-balance").innerHTML = newMainBalance_Card_2;

      // Clear the donation input
      document.getElementById("donate-amount-1").value = "";

      // Show the modal after donation is successful
      document.getElementById("my_modal_5").showModal();

      // Add to donation history
      addDonationToHistory(parsedonation_Card_2, "Flood Relief in Feni, Bangladesh");
  } else {
      alert("Please enter a valid donation amount");
  }
});

// Event listener for the third donation card
document.getElementById("donate-now-2").addEventListener("click", function() {
  const donation_Card_3 = document.getElementById("donate-amount-2").value;
  const parsedonation_Card_3 = parseFloat(donation_Card_3);

  if (!isNaN(parsedonation_Card_3) && parsedonation_Card_3 > 0) {
      // Update individual balance
      const addBalance_Card_3 = document.getElementById("balance-card3").innerText;  // Corrected
      const newBalance_Card_3 = parseFloat(addBalance_Card_3) + parsedonation_Card_3 + ' BDT';
      document.getElementById("balance-card3").innerHTML = newBalance_Card_3;  // Corrected

      // Update main balance
      const updateMainBalance_Card_3 = document.getElementById("main-balance").innerText;
      const newMainBalance_Card_3 = parseFloat(updateMainBalance_Card_3) - parsedonation_Card_3 + ' BDT';
      document.getElementById("main-balance").innerHTML = newMainBalance_Card_3;

      // Clear the donation input
      document.getElementById("donate-amount-2").value = "";

      // Show the modal after donation is successful
      document.getElementById("my_modal_5").showModal();

      // Add to donation history
      addDonationToHistory(parsedonation_Card_3, "Aid for Injured in the Quota Movement");
  } else {
      alert("Please enter a valid donation amount");
  }
});


const historyTab = document.getElementById("history-tab");
const donateTab = document.getElementById("donate-tab");

historyTab.addEventListener("click", function() {
  historyTab.classList.add('bg-green-400', 'text-white');
  donateTab.classList.remove('bg-green-400', 'text-white');

  document.getElementById("balance-1").classList.add('hidden','lg:hidden');
  document.getElementById("balance-2").classList.add('hidden','lg:hidden');
  document.getElementById("balance-3").classList.add('hidden','lg:hidden');

  document.getElementById("history-list").classList.remove('hidden','lg:hidden');
});

donateTab.addEventListener("click", function() {
  donateTab.classList.add('bg-green-400', 'text-white');
  historyTab.classList.remove('bg-green-400', 'text-white');

  document.getElementById("balance-1").classList.remove('hidden', 'lg:hidden');
  document.getElementById("balance-2").classList.remove('hidden', 'lg:hidden');
  document.getElementById("balance-3").classList.remove('hidden', 'lg:hidden');

 
  document.getElementById("history-list").classList.add('hidden', 'lg:hidden');
});
