/*
1. Add event listener to the case plus button
2. Get value from the case number input field
3. Convert the number to an integer
4. Calculate the new case number
5. Set the value to the case number field
*/

const iphone11SiliconeBlackCasePrice = 59;

// Plus button: iPhone case
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateInputFieldNumber(
    true,
    "case-number-field",
    "input"
  );

  updateTextFieldNumber(
    true,
    "case-price",
    "text",
    iphone11SiliconeBlackCasePrice,
    newCaseNumber
  );

  updateSubtotal("subtotal", "tax", "total", "phone-price", "case-price");
});

// Minus button: iPhone case
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateInputFieldNumber(
      false,
      "case-number-field",
      "input"
    );

    updateTextFieldNumber(
      false,
      "case-price",
      "text",
      iphone11SiliconeBlackCasePrice,
      newCaseNumber
    );

    updateSubtotal("subtotal", "tax", "total", "phone-price", "case-price");
  });
