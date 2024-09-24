document.getElementById("donate-now").addEventListener("click", function() {
    const donation = document.getElementById("donate-amount").value;
    const parsedonation = parseInt(donation);

    if (!isNaN(parsedonation) && parsedonation > 0) {
        // Update individual balance
        const addBalance = document.getElementById("balance").innerText;
        const newBalance = parseInt(addBalance) + parsedonation + ' BDT';
        document.getElementById("balance").innerHTML = newBalance;

        // Update main balance
        const updateMainBalance = document.getElementById("main-balance").innerText;
        const newMainBalance = parseInt(updateMainBalance) - parsedonation + ' BDT';
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
    const parsedonation = parseInt(donation);

    if (!isNaN(parsedonation) && parsedonation > 0) {
        // Update individual balance
        const addBalance = document.getElementById("balance").innerText;
        const newBalance = parseInt(addBalance) + parsedonation + ' BDT';
        document.getElementById("balance-1").innerHTML = newBalance;

        // Update main balance
        const updateMainBalance = document.getElementById("main-balance").innerText;
        const newMainBalance = parseInt(updateMainBalance) - parsedonation + ' BDT';
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
    const parsedonation = parseInt(donation);

    if (!isNaN(parsedonation) && parsedonation > 0) {
        // Update individual balance
        const addBalance = document.getElementById("balance").innerText;
        const newBalance = parseInt(addBalance) + parsedonation + ' BDT';
        document.getElementById("balance-2").innerHTML = newBalance;

        // Update main balance
        const updateMainBalance = document.getElementById("main-balance").innerText;
        const newMainBalance = parseInt(updateMainBalance) - parsedonation + ' BDT';
        document.getElementById("main-balance").innerHTML = newMainBalance;

        // Clear the donation input
        document.getElementById("donate-amount").value = "";

        // Show the modal after donation is successful
        document.getElementById("my_modal_5").showModal();
    } else {
        alert("Please enter a valid donation amount");
    }
});

