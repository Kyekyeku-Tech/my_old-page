var prices = {
    "0": 0,
    "1": 6,
    "2": 11,
    "3": 17,
    "4": 23,
    "5": 28,
    "6": 32,
    "7": 37,
    "8": 40,
    "10": 49,
    "12": 60,
    "15": 75,
    "20": 95,
    "50": 230,
    "100": 340,
    "200": 620
  };
  
  function updateAmount() {
    var bundleSelect = document.getElementById("bundle");
    var amountInput = document.getElementById("amount");
    var selectedValue = bundleSelect.value;
  
    if (selectedValue in prices) {
      amountInput.value = "GHS " + prices[selectedValue].toFixed(2);
    }
  }
  
  function generatePaymentLink() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    if (!phoneNumber.match(/^0\d{9}$/)) {
      alert("Please enter a valid 10-digit phone number starting with 0.");
      return false;
    }
    // Add this function to your JavaScript code
  function limitPhoneNumberLength(event) {
  const maxLength = 10;
  const phoneNumberInput = event.target;
  
  if (phoneNumberInput.value.length >= maxLength && event.key !== 'Backspace' && event.key !== 'Delete') {
      event.preventDefault();
  }
  }
  
  // Attach event listener to the phone number input field
  document.getElementById("phoneNumber").addEventListener("keypress", limitPhoneNumberLength);
  
  
    var selectedBundle = document.getElementById("bundle").value;
    var amount = parseFloat(prices[selectedBundle]);
  
    if (amount <= 0) {
      alert("Please select a valid bundle.");
      return false;
    }
  
    // Redirect to the specified URL
    window.location.href = "https://telegra.ph/file/342a4ce6c24cb5e5033ff.jpg";
  }
