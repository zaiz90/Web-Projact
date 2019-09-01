$(document).ready(function () {
    var curr = document.getElementById('currOpt');


    firebase.auth().onAuthStateChanged(function (user) {
        userPhoto = user.photoURL;
        console.log("user Photo: " + userPhoto);
        email = user.email;
        console.log("the second one: " + email);
        $('#navBar2').prepend('<img id="userIcon" src=' + userPhoto + ' />');
        $('#navBar2').prepend('<div id="emailC">' + email + '</div>');
        $('#satatsDiv').prepend('<img id="largeUserIcon" src=' + userPhoto + ' />');
    });

    $('#tableDiv').hide();

    $('#logOutBtn').click(function () {
        firebase.auth().signOut().then(function () {
            location.reload();
            location.href = '../HomePage.html'
        }, function (error) {
            console.log(error.message);
        });
    })

    $('#selectCurr').click(function () {

        $.ajax({
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=VEE,VEN,VERI,VIA,VIB,VIBE,VOISE,VOX,VRS,VTC,VUC',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#VEE-rate').text(data.rates.VEE);
                    $('#VEN-rate').text(data.rates.VEN);
                    $('#VERI-rate').text(data.rates.VERI);
                    $('#VIA-rate').text(data.rates.VIA);
                    $('#VIB-rate').text(data.rates.VIB);
                    $('#VIBE-rate').text(data.rates.VIBE);
                    $('#VOISE-rate').text(data.rates.VOISE);
                    $('#VOX-rate').text(data.rates.VOX);
                    $('#VRS-rate').text(data.rates.VRS);
                    $('#VTC-rate').text(data.rates.VTC);
                    $('#VUC-rate').text(data.rates.VUC);
                    $('#tableDiv').show();

                }
                else {
                    console.log(data.error.info);
                }
                $('#msg').text();

            },
            error: e => {
                console.log('error' + e.message);
                $('#msg').text(e.message);
                $('#msg').show();
            }
        });


    })

})