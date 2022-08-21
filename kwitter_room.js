var firebaseConfig = {
    apiKey: "AIzaSyAiA7_L-7eD8fOIc3uHx0zCH4Ts6V25P68",
    authDomain: "p-95-73114.firebaseapp.com",
    databaseURL: "https://p-95-73114-default-rtdb.firebaseio.com",
    projectId: "p-95-73114",
    storageBucket: "p-95-73114.appspot.com",
    messagingSenderId: "730495495462",
    appId: "1:730495495462:web:4b2473ae9638ba72b565e7",
    measurementId: "G-NKWRJ9FWLK"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
room_name=localStorage.getItem("room");
document.getElementById("welcomeUser").innerHTML="welcome " + username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      row="<div id="+Room_names+" class='room_name' onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;

      //End code
      });});}
getData();

function addRoom() {
  room_name=document.getElementById("room").value;
  localStorage.setItem("room",room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  window.location="kwitter_page.html"

}

function redirect(name) {
localStorage.setItem("room",name);
window.location="kwitter_page.html";
}

function logout() {
  localStorage.removeItem("room");
  localStorage.removeItem("username");
  window.location="index.html";
}
