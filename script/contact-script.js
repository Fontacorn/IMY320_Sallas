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

//Declaring variables:
let fname2, email2, message2, button2;
let validName2 = false, validEmail2 = false, validMessage2 = false;

//Checks if all elements are valid before submitting:
button2 = document.getElementById("submitBtn2");
button2.onclick = function () {
    if (validName2 == true && validEmail2 == true && validMessage2 == true) {
        fname2 = document.getElementById("name2");
        fname2.value = "";
        fname2.parentNode.classList.remove('active');
        email2 = document.getElementById("email2");
        email2.value = "";
        email2.parentNode.classList.remove('active');
        message2 = document.getElementById("message2");
        message2.value = "";
        message2.parentNode.classList.remove('active');
        openPopup();
    } else {
        document.getElementById("submitMessage").innerHTML = "Make sure all form fields are filled";
        return false;
    }       
}

//Validates that the nameField is longer than 2 characters:
document.getElementById("name2").onblur = function () {
    fname2 = document.getElementById("name2").value;
    if (fname2.length > 3) {
        validName2 = true;
    } else {
        validName2 = false;
    }
}

//Validates that the emailField contains a '@' and '.' symbol:
document.getElementById("email2").onblur = function () {
    email2 = document.getElementById("email2").value;
    if (email2.indexOf("@") == -1 || email2.indexOf(".") == -1) {
        validEmail2 = false;
    } else {
        validEmail2 = true;
    }
}

//Validates that the nameField is longer than 2 characters:
document.getElementById("message2").onblur = function () {
    message2 = document.getElementById("message2").value;
    if (message2.length > 0) {
        validMessage2 = true;
    } else {
        validMessage2 = false;
    }
}