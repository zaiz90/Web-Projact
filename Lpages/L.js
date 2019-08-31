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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=LA,LEND,LEO,LINDA,LINK,LOC,LOG,LRC,LSK,LTC,LUN,LUX,',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#LA-rate').text(data.rates.LA);
                    $('#LEND-rate').text(data.rates.LEND);
                    $('#LEO-rate').text(data.rates.LEO);
                    $('#LINDA-rate').text(data.rates.LINDA);
                    $('#LINK-rate').text(data.rates.LINK);
                    $('#LOC-rate').text(data.rates.LOC);
                    $('#LOG-rate').text(data.rates.LOG);
                    $('#LRC-rate').text(data.rates.LRC);
                    $('#LSK-rate').text(data.rates.LSK);
                    $('#LTC-rate').text(data.rates.LTC);
                    $('#LUN-rate').text(data.rates.LUN);
                    $('#LUX-rate').text(data.rates.LUX);
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