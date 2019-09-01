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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=TAAS,TESLA,THC,THETA,THS,TIO,TKN,TKY,TNB,TNT,TOA,TRC,TRIG,TRST,TRUMP,TRX',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#TAAS-rate').text(data.rates.TAAS);
                    $('#TESLA-rate').text(data.rates.TESLA);
                    $('#THC-rate').text(data.rates.THC);
                    $('#THETA-rate').text(data.rates.THETA);
                    $('#THS-rate').text(data.rates.THS);
                    $('#TIO-rate').text(data.rates.TIO);
                    $('#TKN-rate').text(data.rates.TKN);
                    $('#TKY-rate').text(data.rates.TKY);
                    $('#TNB-rate').text(data.rates.TNB);
                    $('#TNT-rate').text(data.rates.TNT);
                    $('#TOA-rate').text(data.rates.TOA);
                    $('#TRC-rate').text(data.rates.TRC);
                    $('#TRIG-rate').text(data.rates.TRIG);
                    $('#TRST-rate').text(data.rates.TRST);
                    $('#TRUMP-rate').text(data.rates.TRUMP);
                    $('#TRX-rate').text(data.rates.TRX);
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