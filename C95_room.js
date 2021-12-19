var user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML= "WELCOME  " + user_name
    
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyC_xCKpOmiRl0AO0S92pspojSPZE4l5IOE",
  authDomain: "kwitter-f096c.firebaseapp.com",
  databaseURL: "https://kwitter-f096c-default-rtdb.firebaseio.com/",
  projectId: "kwitter-f096c",
  storageBucket: "kwitter-f096c.appspot.com",
  messagingSenderId: "325886081588",
  appId: "1:325886081588:web:cc5b5c709ecd92ce4ba861"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    
    localStoage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      docuemt.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}