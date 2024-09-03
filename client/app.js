const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:3000/messages", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", // This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ message }),
  });
}

messageForm.addEventListener("submit", handleSubmitMessageForm);