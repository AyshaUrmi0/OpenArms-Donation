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
    } else {
      alert("Please enter a valid donation amount");
    }
  });
  
  document.getElementById("donate-now-1").addEventListener("click", function() {
    const donation = document.getElementById("donate-amount-1").value;
    const parsedonation = parseFloat(donation);
  
    if (!isNaN(parsedonation) && parsedonation > 0) {
      // Update individual balance
      const addBalance = document.getElementById("balance").innerText;
      const newBalance = parseFloat(addBalance) + parsedonation + ' BDT';
      document.getElementById("balance-1").innerHTML = newBalance;
  
      // Update main balance
      const updateMainBalance = document.getElementById("main-balance").innerText;
      const newMainBalance = parseFloat(updateMainBalance) - parsedonation + ' BDT';
      document.getElementById("main-balance").innerHTML = newMainBalance;
  
      // Clear the donation input
      document.getElementById("donate-amount").value = "";
  
      // Show the modal after donation is successful
      document.getElementById("my_modal_5").showModal();
    } else {
      alert("Please enter a valid donation amount");
    }
  });
  
  document.getElementById("donate-now-2").addEventListener("click", function() {
    const donation = document.getElementById("donate-amount-2").value;
    const parsedonation = parseFloat(donation);
  
    if (!isNaN(parsedonation) && parsedonation > 0) {
      
      const addBalance = document.getElementById("balance").innerText;
      const newBalance = parseFloat(addBalance) + parsedonation + ' BDT';
      document.getElementById("balance-2").innerHTML = newBalance;
  
      const updateMainBalance = document.getElementById("main-balance").innerText;
      const newMainBalance = parseFloat(updateMainBalance) - parsedonation + ' BDT';
      document.getElementById("main-balance").innerHTML = newMainBalance;
  
 
      document.getElementById("donate-amount").value = "";
  
    
      document.getElementById("my_modal_5").showModal();
    } else {
      alert("Please enter a valid donation amount");
    }

  });


  //History Tab

  const historyTab=document.getElementById("history");
  const donateTab=document.getElementById("donateTab");

  historyTab.addEventListener("click", function() 
  {
    historyTab.classList.add('bg-green-400', 'text-white');

    donateTab.classList.remove('bg-green-400', 'text-white');
    document.getElementById("balance-1").classList.add('hidden');
    document.getElementById("balance-2").classList.add('hidden');
    document.getElementById("balance-3").classList.add('hidden');


  });