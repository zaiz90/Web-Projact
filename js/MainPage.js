
$(document).ready(function () {

    var curr = document.getElementById('currOpt');
    var notOnListCurr = document.getElementById('notOnListTxt');
    var email;
    var userPic = "Icons/2.jpg";

    firebase.auth().onAuthStateChanged(function (user) {
        userPhoto = user.photoURL;
        console.log("user Photo: " + userPhoto);
        email = user.email;
        console.log("the second one: " + email);
        $('#navBar2').prepend('<img id="userIcon" src=' + userPhoto + ' />');
        $('#navBar2').prepend('<div id="emailC">' + email + '</div>');
    });

    $('#rateTable').hide();
    //$('userIcon').attr('src','Icons/2.jpg');


    $('#selectCurr').click(function () {

        $.ajax({
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=BTC,BCH,ADA,EOS,ETH,MIOTA,LTC,NEO,XRP,XLM',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#ADArate').text(data.rates.ADA);
                    $('#BCHrate').text(data.rates.BCH);
                    $('#BTCrate').text(data.rates.BTC);
                    $('#EOSrate').text(data.rates.EOS);
                    $('#ETHrate').text(data.rates.ETH);
                    $('#LTCrate').text(data.rates.LTC);
                    $('#MIOTArate').text(data.rates.MIOTA);
                    $('#NEOrate').text(data.rates.NEO);
                    $('#XLMrate').text(data.rates.XLM);
                    $('#XRPrate').text(data.rates.XRP);
                    $('#rateTable').show();

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

    $('#notOnListBtn').click(function () {
        if (notOnListCurr.value == '') {
            console.log('empty');
        }
        else {
            $.ajax({
                url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=' + notOnListCurr.value,
                type: 'GET',
                success: function (data) {
                    console.log(data);
                    if (data.success == true) {
                        $('#secondaryName').text(notOnListCurr.value);
                        $('#secondaryRate').text(data.rates);
                        console.log(data.rates);

                    }
                    else {
                        console.log("fail");
                    }

                },
                error: e => {
                    console.log('error' + e.message);
                }
            });
        }
        console.log(notOnListCurr.value);
    })

    $('#logOutBtn').click(function () {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            location.reload();
            location.href = 'HomePage.html'
        }, function (error) {
            console.log(error.message);
        });
    })

})

