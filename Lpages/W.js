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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=WABI,WAVES,WAX,WC,WGR,WINGS,WLK,WOP,WPR,WRC,WTC',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#WABI-rate').text(data.rates.WABI);
                    $('#WAVES-rate').text(data.rates.WAVES);
                    $('#WAX-rate').text(data.rates.WAX);
                    $('#WC-rate').text(data.rates.WC);
                    $('#WGR-rate').text(data.rates.WGR);
                    $('#WINGS-rate').text(data.rates.WINGS);
                    $('#WLK-rate').text(data.rates.WLK);
                    $('#WOP-rate').text(data.rates.WOP);
                    $('#WPR-rate').text(data.rates.WPR);
                    $('#WRC-rate').text(data.rates.WRC);
                    $('#WTC-rate').text(data.rates.WTC);
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