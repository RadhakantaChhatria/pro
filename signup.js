
    
 document.querySelector("form").addEventListener("submit",signup)
 signupDetail =  JSON.parse(localStorage.getItem("SignupD")) || [];

function signup(event){
    event.preventDefault();
    
    var name = document.querySelector("#name").value;
    var cont = document.querySelector("#cont").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    
    function detail(name,cont,email,pass){
        this.name = name
        this.Contact = cont
        this.email = email
        this.pass = pass
    };

    var signupobj = new detail(name,cont,email,pass);
    signupDetail.push(signupobj)

    localStorage.setItem("SignupD",JSON.stringify(signupDetail))
    alert("Signup Success");
    window.location.href = "login.html";
}

