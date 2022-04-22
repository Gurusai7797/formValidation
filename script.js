const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// function to show error outline & message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error'; // calss manipukation
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// function to show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// function for fields validation

function checkRequried(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// function to validate email ID

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if (input.value.trim() === '') {
    showError(input, 'Email is required');
  } else if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1); // return input.id[0].toUpperCase()+input.id.slice(1);?
}

//check input lenght

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less then ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// funtion to match password

function checkPass(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'password not matched');
  }
}

// Event liserners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequried([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPass(password, password2);

  // console.log(username.value);
  // if (username.value === "") {
  //   showError(username, "Username Is Required");
  //   // console.log("username required");
  //   // alert("username required");
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === "") {
  //   showError(email, "Email Is Required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Please Enter A Valid Email ID");
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value === "") {
  //   showError(password, "Password Is Required");
  // } else {
  //   showSuccess(password);
  // }
  // if (password2.value === "") {
  //   showError(password2, "Please Confirm The Password");
  // } else {
  //   showSuccess(password2);
  // }
});
