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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=BAR,BASH,BAT,BAY,BBP,BCD,BCH,BCN,BCPT,BEE,BIO,BLC,BLOCK,BLU,BLZ,BMC,BNB,BNT,BOST,BQ,BQX,BRD,BRIT,BT1,BT2,BTC,BTCA,BTCS,BTCZ,BTG,BTLC,BTM,BTQ,BTS,BTX,BURST',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#BAR-rate').text(data.rates.BAR);
                    $('#BASH-rate').text(data.rates.BASH);
                    $('#BAT-rate').text(data.rates.BAT);
                    $('#BAY-rate').text(data.rates.BAY);
                    $('#BBP-rate').text(data.rates.BBP);
                    $('#BCD-rate').text(data.rates.BCD);
                    $('#BCH-rate').text(data.rates.BCH);
                    $('#BCN-rate').text(data.rates.BCN);
                    $('#BCPT-rate').text(data.rates.BCPT);
                    $('#BEE-rate').text(data.rates.BEE);
                    $('#BIO-rate').text(data.rates.BIO);
                    $('#BLC-rate').text(data.rates.BLC);
                    $('#BLOCK-rate').text(data.rates.BLOCK);
                    $('#BLU-rate').text(data.rates.BLU);
                    $('#BLZ-rate').text(data.rates.BLZ);
                    $('#BMC-rate').text(data.rates.BMC);
                    $('#BNB-rate').text(data.rates.BNB);
                    $('#BNT-rate').text(data.rates.BNT);
                    $('#BOST-rate').text(data.rates.BOST);
                    $('#BQ-rate').text(data.rates.BQ);
                    $('#BQX-rate').text(data.rates.BQX);
                    $('#BRD-rate').text(data.rates.BRD);
                    $('#BRIT-rate').text(data.rates.BRIT);
                    $('#BT1-rate').text(data.rates.BT1);
                    $('#BT2-rate').text(data.rates.BT2);
                    $('#BTC-rate').text(data.rates.BTC);
                    $('#BTCA-rate').text(data.rates.BTCA);
                    $('#BTCS-rate').text(data.rates.BTCS);
                    $('#BTCZ-rate').text(data.rates.BTCZ);
                    $('#BTG-rate').text(data.rates.BTG);
                    $('#BTLC-rate').text(data.rates.BTLC);
                    $('#BTM-rate').text(data.rates.BTM);
                    $('#BTQ-rate').text(data.rates.BTQ);
                    $('#BTS-rate').text(data.rates.BTS);
                    $('#BTX-rate').text(data.rates.BTX);
                    $('#BURST-rate').text(data.rates.BURST);
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