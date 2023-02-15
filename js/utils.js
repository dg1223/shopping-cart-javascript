/**
 * The getElementValue function returns the value of an element.
 * 
 *
 * @param elementID Identify the element to be modified
 * @param fieldType Determine which type of input field to update;
 *                  accepted types: text or input 
  
 *
 * @return The integer value of the element
 *
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

/**
 * The updateInputFieldNumber function updates the value of an input field
 *
 *
 * @param isIncrease Determine whether the number is increased or decreased
 * @param elementID Identify the element that needs to be updated
 * @param fieldType Determine which type of input field to update;
 *                  accepted types: text or input
 *
 * @return Total price
 *
 */
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

/**
 * The updateTextFieldNumber function updates the text field with the new number.
 *
 *
 * @param isIncrease Determine whether the number is increased or decreased
 * @param elementID Identify which element to update
 * @param fieldType Determine which type of input field to update;
 *                  accepted types: text or input
 * @param basePrice The price of the phone
 * @param inputFieldNumber Number of phones to buy
 *
 * @return Total price
 *
 */
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

  return newNumber;
}

/**
 * The updateTotal function updates the subtotal, tax, and total fields
 * based on the values in the phone and case fields.
 *
 *
 * @param subtotalElementID Get the value of the subtotal field
 * @param taxElementID Get the value of the tax field
 * @param totalElementID Get the value from the total field
 * @param phoneElementID Get the value of the phone field
 * @param caseElementID Get the value of the case field
 * @param fieldType Determine which type of input field to update;
 *                  accepted types: text or input
 *
 * @return nothing; sets the fields' values
 *
 */
function updateTotal(
  subtotalElementID,
  taxElementID,
  totalElementID,
  phoneElementID,
  caseElementID,
  fieldType
) {
  const subtotalField = document.getElementById(subtotalElementID);
  const taxField = document.getElementById(taxElementID);
  const totalField = document.getElementById(totalElementID);

  const phoneTotal = getElementValue(phoneElementID, "text");
  const caseTotal = getElementValue(caseElementID, "text");

  // Calculate subtotal
  const newSubTotal = phoneTotal + caseTotal;
  subtotalField.innerText = newSubTotal;

  // Calculate tax
  const newTax = newSubTotal * 0.13;
  taxField.innerText = newTax.toFixed(2);

  // Calculate total
  const newTotal = newSubTotal + newTax;
  totalField.innerText = newTotal;
}
