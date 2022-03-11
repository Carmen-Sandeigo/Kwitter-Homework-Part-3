// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3GsQwpgeY8Q_MDOoEC0RgAYsYcCOdnYQ",
    authDomain: "kwitter-homework-app.firebaseapp.com",
    projectId: "kwitter-homework-app",
    storageBucket: "kwitter-homework-app.appspot.com",
    messagingSenderId: "292998055412",
    appId: "1:292998055412:web:b794a43c24651b6feca5a1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //Start Code
  
  

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";


  function addroom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
         purpose: "Adding Room Name"
   });

   localStorage.setItem("Roomname",room_name);

   window.location = "kwitter_page.html";



  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location ="kwitter_room.html"
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
//End code
});});}
getData ();