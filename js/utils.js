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
  // Set it to zero every time it goes to -ve values
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
