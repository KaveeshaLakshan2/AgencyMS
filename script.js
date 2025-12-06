

    function sendMail(event) {
    event.preventDefault(); // Stop form from refreshing

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_jfo2gz8", "template_ur1lna5", parms)
        .then(function() {
            alert("Message Sent Successfully!");
        })
        .catch(function(error) {
            alert("Error sending message: " + JSON.stringify(error));
        });
}