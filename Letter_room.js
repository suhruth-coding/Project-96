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
    document.getElementById("user_name").innerHTML = "Welecome:" + user_name;

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update(
            { purpose : "Add Room" });
            localStorage.setItem("room_name",room_name);
            window.location = "Letter_page.html"
    }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
            row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)'>#"+ Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
      });});}
      getData();

      function redirecttoRoomName(name){
            localStorage.setItem("room_name",name);
            window.location = "Letter_page.html";
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "Letter.html";
      }