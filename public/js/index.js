var socket = io();
socket.on("connect", function () {
  console.log("Connected to server");
  
  // socket.emit("createEmail", {
  //   to: "jen@example.com",
  //   text: "Hey. This is Andrew.",
  // });
  socket.emit(
    "createMessage",
    {
      from: "frank",
      text: "Yup",
    },
    function (data) {
      console.log("Got it", data);
    }
  );
});

// socket.on("newEmail", function (email) {
//   console.log("New email", email);
// });

socket.on("newMessage", function (message) {
  console.log("newMessage", message);
});

socket.on("disconnect", function () {
  console.log("Disconnected from server");
});

function handleSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("input").value;
  console.log(input)
  socket.emit("createMessage", {
    form: 'User',
    text: input
  }, function(){

  })
}
const form = document.getElementById("message-form");
form.addEventListener("submit", handleSubmit)
