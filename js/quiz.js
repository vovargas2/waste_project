const form = document.querySelector("#myForm");

let userAnswers = {};

const correctAnswers = {
  out: "zero",
  throw: "zero",
  spoil: "zero"

};

// DO NOT CHANGE anything below this !!!
form.onsubmit = checkAnswers;

function checkAnswers() {
  // process every element in the form with this for-loop
  for (let i = 0; i < form.elements.length; i++) {
    // skip an element if it has no name
    if (form.elements[i].name == "") {
      // keep looping
      continue;
    } else if (form.elements[i].nodeName == 'INPUT') {
      /* this switch-statement checks for each type of INPUT element - there are
         even more INPUT elements - add others if needed
	 */
      switch (form.elements[i].type) {
        case 'text':
        case 'email':
        case 'tel':
        case 'url':
        case 'hidden':
        case 'password':
          /* if any of the above cases is true for this one form element, add
	     the name:value pair to userAnswers using the function below this one
	     */
          addPairToAssocArray(form.elements[i].name, form.elements[i].value);
          break;
          // continue with more INPUT form elements
        case 'radio':
          /* if the element is INPUT radio, then see if it has the "checked" attribute.
	     If so, add it to userAnswers
	     */
          if (form.elements[i].checked) {
            addPairToAssocArray(form.elements[i].name, form.elements[i].value);
          }
          break;
        case 'checkbox':
          /* different from radio b/c checkbox can have more than one answer, so we need
	     an array for this - uses a different function
	     */
          if (form.elements[i].checked) {
            addMultipleToAssocArray(form.elements[i].name, form.elements[i].value);
          }
          break;
        case 'file':
        case 'button':
        case 'reset':
        case 'submit':
          // if the element is any of those, just ignore it
          break;
      } // end switch
    } else if (form.elements[i].nodeName == 'TEXTAREA') {
      // add it to userAnswers using same function as for single INPUT elements
      addPairToAssocArray(form.elements[i].name, form.elements[i].value);
    } else if (form.elements[i].nodeName == 'SELECT') {
      /* this switch-statement checks if SELECT menu allows multiple or not. If multiple,
         loop through all of them (with j in new for-loop)
	 */
      switch (form.elements[i].type) {
        case 'select-one':
          addPairToAssocArray(form.elements[i].name, form.elements[i].value);
          break;
        case 'select-multiple':
          for (let j = 0; j < form.elements[i].options.length; j++) {
            if (form.elements[i].options[j].selected) {
              // use same function used for checkboxes
              addMultipleToAssocArray(form.elements[i].name, form.elements[i].options[j].value);
            }
          }
          break;
      } // end switch
    } else if (form.elements[i].nodeName == 'BUTTON') {
      // ignore it and keep looping
      continue;
    } else {
      alert("Error! " + form.elements[i].nodeName);
    }
  } // end of for-loop

  writeMessage();
  return false;
}


function writeMessage() {
  // start the message string
  let msg = "<ol>";

  // compare answers in the two associative arrays
  for (let key in userAnswers) {
    for (let key2 in correctAnswers) {
      // when you reach the matching key ...
      if (key === key2) {
        // check if correct answer is an array
        if (Array.isArray(correctAnswers[key2])) {
          // if it is, pass its key to the function for handling
          let result = testMultipleItemAnswer(key2);
          msg += result;
          // if this is not an array - check whether two simple values match
        } else if (userAnswers[key] == correctAnswers[key2]) {
          msg += "<li>" + "This is a good sustainable practice. No points added.</li>";
        } else {
          msg += "<li>" + "One point added." + "</li>";
        }
      }
    }
  }
  // close the list element in the message string
  msg += "</ol>";

  // writes message and tags into the DIV with id="showAnswers"
  document.querySelector("#showAnswers").innerHTML = msg;
}



// writes one new key-value pair into the Object named userAnswers
function addPairToAssocArray(n, v) {
  userAnswers[n] = v;
}

// writes multiple values into an array value in the Object named userAnswers
function addMultipleToAssocArray(n, v) {
  let found = false;
  // loop through all keys and check if n already exists
  for (let key in userAnswers) {
    if (key === n) {
      found = true;
    }
  }
  // if n does not exist, create it as an array
  if (!found) {
    userAnswers[n] = [];
  }
  // now add the value to the array
  userAnswers[n].push(v);
}
