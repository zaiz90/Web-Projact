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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=OAX,OBITS,OC,OCN,ODN,OK,OMG,OMNI,ORE,ORME,OST,OTN,OTX,OXY',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#OAX-rate').text(data.rates.OAX);
                    $('#OBITS-rate').text(data.rates.OBITS);
                    $('#OC-rate').text(data.rates.OC);
                    $('#OCN-rate').text(data.rates.OCN);
                    $('#ODN-rate').text(data.rates.ODN);
                    $('#OK-rate').text(data.rates.OK);
                    $('#OMG-rate').text(data.rates.OMG);
                    $('#OMNI-rate').text(data.rates.OMNI);
                    $('#ORE-rate').text(data.rates.ORE);
                    $('#ORME-rate').text(data.rates.ORME);
                    $('#OST-rate').text(data.rates.OST);
                    $('#OTN-rate').text(data.rates.OTN);
                    $('#OTX-rate').text(data.rates.OTX);
                    $('#OXY-rate').text(data.rates.OXY);
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