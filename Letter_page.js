// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA9lUoBzIvgBfGT28LRyOTU65ZBTMBykjA",
      authDomain: "letters-words.firebaseapp.com",
      databaseURL: "https://letters-words-default-rtdb.firebaseio.com",
      projectId: "letters-words",
      storageBucket: "letters-words.appspot.com",
      messagingSenderId: "244513099804",
      appId: "1:244513099804:web:f7c82888310dd3129a8fd9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";     
}