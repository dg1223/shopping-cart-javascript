const iphone11Black128gbPrice = 1219;

// Plus button: iPhone
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newCaseNumber = updateInputFieldNumber(
      true,
      "phone-number-field",
      "input"
    );

    updateTextFieldNumber(
      true,
      "phone-price",
      "text",
      iphone11Black128gbPrice,
      newCaseNumber
    );

    updateSubtotal("subtotal", "tax", "total", "phone-price", "case-price");
  });

// Minus button: iPhone
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateInputFieldNumber(
      false,
      "phone-number-field",
      "input"
    );

    updateTextFieldNumber(
      false,
      "phone-price",
      "text",
      iphone11Black128gbPrice,
      newCaseNumber
    );

    updateSubtotal("subtotal", "tax", "total", "phone-price", "case-price");
  });
