const FloatLabel = (() => {
  
    // add active class and placeholder 
    const handleFocus = (e) => {
      const target = e.target;
      target.parentNode.classList.add('active');
      target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };
    
    // remove active class and placeholder
    const handleBlur = (e) => {
      const target = e.target;
      if(!target.value) {
        target.parentNode.classList.remove('active');
      }
      target.removeAttribute('placeholder');    
    };  
    
    // register events
    const bindEvents = (element) => {
      const floatField = element.querySelector('input');
      floatField.addEventListener('focus', handleFocus);
      floatField.addEventListener('blur', handleBlur);    
    };
    
    // get DOM elements
    const init = () => {
      const floatContainers = document.querySelectorAll('.float-container');
      
      floatContainers.forEach((element) => {
        if (element.querySelector('input').value) {
            element.classList.add('active');
        }      
        
        bindEvents(element);
      });
    };
    
    return {
      init: init
    };
  })();
  
  FloatLabel.init();

  let popup = document.getElementById("popup");

  function openPopup() {
    popup.classList.add("open-popup");
  }

  function closePopup() {
    popup.classList.remove("open-popup");
  }

  //Declaring variables:
let fname, email, message, button;
let validName = false, validEmail = false, validMessage = false;

//Checks if all elements are valid before submitting:
button = document.getElementById("submitBtn");
button.onclick = function () {
    if (validName == true && validEmail == true && validMessage == true) {
        fname = document.getElementById("name");
        fname.value = "";
        fname.parentNode.classList.remove('active');
        email = document.getElementById("email");
        email.value = "";
        email.parentNode.classList.remove('active');
        message = document.getElementById("message");
        message.value = "";
        message.parentNode.classList.remove('active');
        openPopup();
    } else {
        document.getElementById("submitMessage").innerHTML = "Make sure all form fields are filled";
        return false;
    }       
}

//Validates that the nameField is longer than 2 characters:
document.getElementById("name").onblur = function () {
    fname = document.getElementById("name").value;
    if (fname.length > 3) {
        validName = true;
    } else {
        validName = false;
    }
}

//Validates that the emailField contains a '@' and '.' symbol:
document.getElementById("email").onblur = function () {
    email = document.getElementById("email").value;
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        validEmail = false;
    } else {
        validEmail = true;
    }
}

//Validates that the nameField is longer than 2 characters:
document.getElementById("message").onblur = function () {
    message = document.getElementById("message").value;
    if (message.length > 0) {
        validMessage = true;
    } else {
        validMessage = false;
    }
}