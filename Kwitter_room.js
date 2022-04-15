user_name=localStorage.getItem("username")
document.getElementById("welcome").innerHTML="Welcome " + user_name
const firebaseConfig = {
    apiKey: "AIzaSyDtg2gGPTy0peB4WqJNUen9D33rSLYwQ_U",
    authDomain: "let-s-chat-ce075.firebaseapp.com",
    databaseURL: "https://let-s-chat-ce075-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-ce075",
    storageBucket: "let-s-chat-ce075.appspot.com",
    messagingSenderId: "711133176746",
    appId: "1:711133176746:web:f9b9dff5df0760283001d3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom(){
    room_name=document.getElementById("roomname").value;  
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room"
    })
    localStorage.setItem("room_name",room_name)
    window.location="Kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row ="<div class=room_name id="+Room_names+"onclick=redirectToRoomName(this.id)>"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
//End code
});});}
getData();
function redirectToRoomName(name){
    console.log(name)
    localStorage.setItem("Room_names",name)
    window.location="kwitter_page.html"
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}