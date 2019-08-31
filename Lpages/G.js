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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=GAME,GAS,GBYTE,GMX,GNO,GNT,GNX,GRC,GRS,GRWI,GTC,GTO,GUP,GVT,GXS',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#GAME-rate').text(data.rates.GAME);
                    $('#GAS-rate').text(data.rates.GAS);
                    $('#GBYTE-rate').text(data.rates.GBYTE);
                    $('#GMX-rate').text(data.rates.GMX);
                    $('#GNO-rate').text(data.rates.GNO);
                    $('#GNT-rate').text(data.rates.GNT);
                    $('#GNX-rate').text(data.rates.GNX);
                    $('#GRC-rate').text(data.rates.GRC);
                    $('#GRS-rate').text(data.rates.GRS);
                    $('#GRWI-rate').text(data.rates.GRWI);
                    $('#GTC-rate').text(data.rates.GTC);
                    $('#GTO-rate').text(data.rates.GTO);
                    $('#GUP-rate').text(data.rates.GUP);
                    $('#GVT-rate').text(data.rates.GVT);
                    $('#GXS-rate').text(data.rates.GXS);
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