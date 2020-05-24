function validateForm(){
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;

    if (username == "") {
        alert("Name must be filled out");
        return false;
      }
    
      if (password == ""){
          alert("Password must be filled out");
          return false;
      }

    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

    window.open("index.html"); 
}