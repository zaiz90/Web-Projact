
$(document).ready(function () {

    const emailtxt = document.getElementById('emailTxt');
    const passtxt = document.getElementById('passTxt');
    const login = document.getElementById('logIn');
    const signup = document.getElementById('singUp');
    const logout = document.getElementById('logOut');
    $('#msgDiv').hide()

    login.addEventListener('click',e=>{
        const email = emailtxt.value;
        const pass = passtxt.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => {
            $('#msg').text(e.message);
            $('#msg').css("color","red");
            $('#msg').show()
            $('#mainPgBtn').hide()
            $('#msgDiv').show()
        });
    })

    signup.addEventListener('click',e=>{
        const email = emailtxt.value;
        const pass = passtxt.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e => {
            $('#msg').text(e.message);
            $('#msg').css("color","red");
            $('#msg').show()
            $('#mainPgBtn').hide()
            $('#msgDiv').show()
        });
    })

    logout.addEventListener('click',e=>{
        firebase.auth().signOut();
    })

    firebase.auth().onAuthStateChanged(firebaseUser=>{
        if(firebaseUser)
        {
            console.log(firebaseUser);
            $('#logOut').show()
            $('#msg').css("color","blue");
            $('#msg').text('Welcome, you are signed in with: '+ firebaseUser.email);
            $('#msg').show()
            $('#mainPgBtn').show()
            $('#msgDiv').show()
        }
        else{
            console.log('not logged in');
           $('#logOut').hide()
           $('#msgDiv').hide()
        }
    })

    $('#mainPgBtn').click(function (params) {
        location.href="MainPage.html";
    })

})

