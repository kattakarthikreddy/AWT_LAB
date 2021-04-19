// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk176sNUyJKXKqiM0XFWoxby1vwTZSves",
    authDomain: "crudoperations-46e67.firebaseapp.com",
    projectId: "crudoperations-46e67",
    storageBucket: "crudoperations-46e67.appspot.com",
    messagingSenderId: "234214012895",
    appId: "1:234214012895:web:ced98e9661ebad8ec9b66a",
    measurementId: "G-8SY7VJ4FB6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  var db = firebase.database().ref().child("student")
  function insertStudent(){
      console.log("create student")
      var username = document.getElementById("username").value
      var rollnum = document.getElementById("rollnum").value
      db.child(username).set({
          username:username,
          rollnum:rollnum
      })
      console.log("user created")
  }
  //Delete operation
  function deleteStudent(){
      console.log("delete student data")
      var name1 = window.prompt("Enter name of student to be deleted");
      db.child(name1).remove();
      console.log(name1+" deleted")
  }
   //update student details
   function updateStudent(){
    console.log("update student details")
    var username=window.prompt("Enter student name")
    var rollnum=window.prompt("Enter student rollnumber")
    db.child(username).update({rollnum:rollnum});
    console.log("student details updated successfully");
 }
  //display student detils
  function displayStudent(){
      console.log("display student data")
      table=document.createElement("TABLE")
      row=table.insertRow(-1);
      var username=row.insertCell(-1);
      var rollnum=row.insertCell(-1);
      username.innerHTML="<center>NAME</center>"
      rollnum.innerHTML="<center>ROLL_NO</center>"
      table.border="2";
        db.on('child_added',function(snap){
          row=table.insertRow(-1);
          var username=row.insertCell(-1);
          var rollnum=row.insertCell(-1);
            console.log(snap.val().username)
            username.innerHTML=`<center>${snap.val().username}</center>`
            rollnum.innerHTML=`<center>${snap.val().rollnum}</center>`
            console.log(snap.val().rollnum)
        })
  }

 