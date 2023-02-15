/*
1. Add event listener to the case plus button
2. Get value from the case number input field
3. Convert the number to an integer
4. Calculate the new case number
5. Set the value to the case number field
*/

function getElementValue(elementID, fieldType) {
  const elementField = document.getElementById(elementID);

  let elementFieldString;

  if (fieldType === "text") {
    elementFieldString = elementField.innerText;
  } else if (fieldType === "input") {
    elementFieldString = elementField.value;
  } else {
    return "TypeError: Enter either 'text' or 'input' as arguments.";
  }

  // keeping it simple with int
  const elementFieldValue = parseInt(elementFieldString);

  return elementFieldValue;
}

function updateInputFieldNumber(isIncrease, elementID, fieldType) {
  const previousNumber = getElementValue(elementID, fieldType);
  const numberField = document.getElementById(elementID);

  // Do not let users generate negative numbers
  if (previousNumber === 0 && !isIncrease) {
    return previousNumber;
  }

  if (isIncrease) {
    newNumber = previousNumber + 1;
  } else {
    newNumber = previousNumber - 1;
  }
  numberField.value = newNumber;

  return newNumber;
}

function updateTextFieldNumber(
  isIncrease,
  elementID,
  fieldType,
  basePrice,
  inputFieldNumber
) {
  const numberField = document.getElementById(elementID);

  const newNumber = basePrice * inputFieldNumber;
  numberField.innerText = newNumber;
}

const iphone11SiliconeBlackCasePrice = 59;
const iphone11Black128gbPrice = 1219;

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
  });
