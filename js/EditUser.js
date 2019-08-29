$(document).ready(function () {


    firebase.auth().onAuthStateChanged(function (user) {
        userPhoto = user.photoURL;
        console.log("user Photo: " + userPhoto);
        email = user.email;
        console.log("the second one: " + email);
        $('#navBar2').prepend('<img id="userIcon" src=' + userPhoto + ' />');
        $('#navBar2').prepend('<div id="emailC">' + email + '</div>');
        $('#satatsDiv').prepend('<img id="largeUserIcon" src=' + userPhoto + ' />');
    });

    $('#fileupload').change(function (e) {
        var storageRef = firebase.storage().ref();
        var name = storageRef.child("images/" + new Date().getTime() + ".jpg");
        name.put(e.target.files[0]).then(function (snapshot) {
            name.getDownloadURL().then(function (url) {
                var user = firebase.auth().currentUser;
                user.updateProfile({
                    photoURL: url
                }).then(function () {
                    var test = user.photoURL;
                    console.log("im here " + test);
                }).catch(function (e) {
                    console.log(e.message);
                });
            }).catch(function (err) { console.log(err); });
        }).catch(function (err) { console.log(err); });
    });

    $('#logOutBtn').click(function () {
        firebase.auth().signOut().then(function () {
            location.reload();
            location.href = 'HomePage.html'
        }, function (error) {
            console.log(error.message);
        });
    })

    $('#testBtn').click(function () {
        location.reload()
    });


})