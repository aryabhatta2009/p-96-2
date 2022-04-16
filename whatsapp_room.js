
const firebaseConfig = {
      apiKey: "AIzaSyAnpKHPrExE8PCqHDjU1d90wGaiVGKtdGw",
      authDomain: "whatsapp-p-93.firebaseapp.com",
      databaseURL: "https://whatsapp-p-93-default-rtdb.firebaseio.com",
      projectId: "whatsapp-p-93",
      storageBucket: "whatsapp-p-93.appspot.com",
      messagingSenderId: "971436400587",
      appId: "1:971436400587:web:044317f47d75cd6f9d204e"
    };
    const app = initializeApp(firebaseConfig);
    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"add_room"
    });
    localStorage.setItem("room_name",room_name);
    window.location="whatsapp_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"; 
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="whatsapp_page.html";
}

function logout(){
localStorage.removeItem("user_name"); 
localStorage.removeItem("room_name"); 
window.location="index.html";
} 

