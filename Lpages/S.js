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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=SALT,SAN,SBC,SC,SENT,SHIFT,SIB,SMART,SMLY,SNC,SNGLS,SNM,SNT,SPK,SRN,STEEM,STK,STORJ,STRAT,STU,STX,SUB,SUR,SWFTC,SYS',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#SALT-rate').text(data.rates.SALT);
                    $('#SAN-rate').text(data.rates.SAN);
                    $('#SBC-rate').text(data.rates.SBC);
                    $('#SC-rate').text(data.rates.SC);
                    $('#SENT-rate').text(data.rates.SENT);
                    $('#SHIFT-rate').text(data.rates.SHIFT);
                    $('#SIB-rate').text(data.rates.SIB);
                    $('#SMART-rate').text(data.rates.SMART);
                    $('#SMLY-rate').text(data.rates.SMLY);
                    $('#SNC-rate').text(data.rates.SNC);
                    $('#SNGLS-rate').text(data.rates.SNGLS);
                    $('#SNM-rate').text(data.rates.SNM);
                    $('#SNT-rate').text(data.rates.SNT);
                    $('#SPK-rate').text(data.rates.SPK);
                    $('#SRN-rate').text(data.rates.SRN);
                    $('#STEEM-rate').text(data.rates.STEEM);
                    $('#STK-rate').text(data.rates.STK);
                    $('#STORJ-rate').text(data.rates.STORJ);
                    $('#STRAT-rate').text(data.rates.STRAT);
                    $('#STUBQ-rate').text(data.rates.STU);
                    $('#STX-rate').text(data.rates.STX);
                    $('#SUB-rate').text(data.rates.SUB);
                    $('#SUR-rate').text(data.rates.SUR);
                    $('#SWFTC-rate').text(data.rates.SWFTC);
                    $('#SYS-rate').text(data.rates.SYS);
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