document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("IUSVwxdals_-cYv7o");
});
function sendEmail(event) {
  event.preventDefault();
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const sendButton = document.querySelector("button");
  const successMessage = document.getElementById("success-message");
  const emailParams = {
    from_name: `${fName} ${lName}`,
    from_email: email,
    phone: phone,
    message: message,
  };
  emailjs.send("service_4o85ll8", "template_oq02nog", emailParams).then(
    function (response) {
      successMessage.textContent = "The message has been successfully sent!";
      sendButton.disabled = !0;
      sendButton.style.backgroundColor = "#d3d3d3";
    },
    function (error) {
      alert("Failed to send email: " + error.text);
    }
  );
}
