// Function to add donation entry to the history
function addDonationToHistory(amount, causeTitle) {
  const historyContent = document.getElementById("history-content");

  // Get current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString(); 

  // Create a new div for the donation entry
  const newHistoryEntry = document.createElement("div");
  newHistoryEntry.classList.add("border", "border-gray-300", "p-4", "rounded-lg", "shadow-md");

  // Set the inner content for the donation entry
  newHistoryEntry.innerHTML = `
      <p><strong>${amount} Taka is Donated for ${causeTitle}</strong></p>
      <p><strong>Date:</strong> ${formattedDate}</p>
  `;

  // Append the new entry to the history container
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
  const donation = document.getElementById("donate-amount-1").value;
  const parsedonation = parseFloat(donation);

  if (!isNaN(parsedonation) && parsedonation > 0) {
      // Update individual balance
      const addBalance = document.getElementById("balance-1").innerText;
      const newBalance = parseFloat(addBalance) + parsedonation + ' BDT';
      document.getElementById("balance-card2").innerHTML = newBalance;

      // Update main balance
      const updateMainBalance = document.getElementById("main-balance").innerText;
      const newMainBalance = parseFloat(updateMainBalance) - parsedonation + ' BDT';
      document.getElementById("main-balance").innerHTML = newMainBalance;

      // Clear the donation input
      document.getElementById("donate-amount-1").value = "";

      // Show the modal after donation is successful
      document.getElementById("my_modal_5").showModal();

      // Add to donation history
      addDonationToHistory(parsedonation, "Flood Relief in Feni, Bangladesh");
  } else {
      alert("Please enter a valid donation amount");
  }
});

// Event listener for the third donation card
document.getElementById("donate-now-2").addEventListener("click", function() {
  const donation = document.getElementById("donate-amount-2").value;
  const parsedonation = parseFloat(donation);

  if (!isNaN(parsedonation) && parsedonation > 0) {
      // Update individual balance
      const addBalance = document.getElementById("balance-2").innerText;
      const newBalance = parseFloat(addBalance) + parsedonation + ' BDT';
      document.getElementById("balance-").innerHTML = newBalance;

      // Update main balance
      const updateMainBalance = document.getElementById("main-balance").innerText;
      const newMainBalance = parseFloat(updateMainBalance) - parsedonation + ' BDT';
      document.getElementById("main-balance").innerHTML = newMainBalance;

      // Clear the donation input
      document.getElementById("donate-amount-2").value = "";

      // Show the modal after donation is successful
      document.getElementById("my_modal_5").showModal();

      // Add to donation history
      addDonationToHistory(parsedonation, "Aid for Injured in the Quota Movement");
  } else {
      alert("Please enter a valid donation amount");
  }
});

// History Tab functionality
const historyTab = document.getElementById("history");
const donateTab = document.getElementById("donateTab");

historyTab.addEventListener("click", function() {
  historyTab.classList.add('bg-green-400', 'text-white');
  donateTab.classList.remove('bg-green-400', 'text-white');

  // Hide donation cards
  document.getElementById("balance-1").classList.add('hidden');
  document.getElementById("balance-2").classList.add('hidden');
  document.getElementById("balance-3").classList.add('hidden');

  // Show the donation history
  document.getElementById("history-list").classList.remove('hidden');
});

// Optional: Logic to switch back to the donation tab
donateTab.addEventListener("click", function() {
  donateTab.classList.add('bg-green-400', 'text-white');
  historyTab.classList.remove('bg-green-400', 'text-white');

  // Show donation cards
  document.getElementById("balance-1").classList.remove('hidden');
  document.getElementById("balance-2").classList.remove('hidden');
  document.getElementById("balance-3").classList.remove('hidden');

  // Hide the donation history
  document.getElementById("history-list").classList.add('hidden');
});
