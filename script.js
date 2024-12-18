$(document).ready(function () {
  $('#registrationForm').on('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      // Collect form data
      let name = $('#name').val();
      let email = $('#email').val();
      let password = $('#password').val();
      let phone = $('#phone').val();

      // Validate phone number (basic validation for 10 digits)
      let phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phone)) {
          $('#result').html('<span style="color: red;">Please enter a valid 10-digit phone number.</span>');
          return;
      }

      // Display the submitted data
      let output = `
          <h3>Registration Successful!</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Password:</strong> ${password}</p>
          <p><strong>Phone:</strong> ${phone}</p>
      `;

      $('#result').html(output);

      // Clear the form fields
      $('#registrationForm')[0].reset();
  });
});
