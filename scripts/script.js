document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("IUSVwxdals_-cYv7o");
});

function sendEmail(event) {
  event.preventDefault();

  // Get values from the form inputs
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Get the send button and success message elements
  const sendButton = document.querySelector("button");
  const successMessage = document.getElementById("success-message");

  // Create the email parameters to be sent
  const emailParams = {
    from_name: `${fName} ${lName}`, // First and last name
    from_email: email, // Sender's email
    phone: phone, // Sender's phone number (optional)
    message: message, // Sender's message
  };

  // Send the email via emailjs
  emailjs.send("service_4o85ll8", "template_oq02nog", emailParams).then(
    function (response) {
      successMessage.textContent = "The message has been successfully sent!";
      sendButton.disabled = true;
      sendButton.style.backgroundColor = "#d3d3d3";
    },
    function (error) {
      alert("Failed to send email: " + error.text);
    }
  );
}
