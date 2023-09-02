//YOUR FIRE BASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyATP_yRufXy_0DfYjPW5GVAHeLtv8MAR5Y",
  authDomain: "kwitter-f2951.firebaseapp.com",
  databaseURL: "https://kwitter-f2951-default-rtdb.firebaseio.com",
  projectId: "kwitter-f2951",
  storageBucket: "kwitter-f2951.appspot.com",
  messagingSenderId: "944807724673",
  appId: "1:944807724673:web:f8aafe97c6fc78ed116f80"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);


	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
  { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//start code
        

      } });  }); }
getData();


function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
