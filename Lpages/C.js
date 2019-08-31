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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=CALC,CAS,CAT,CCRB,CDT,CESC,CHAT,CJ,CL,CLD,CLOAK,CND,CNX,CPC,CRAVE,CRC,CRE,CRW,CTO,CTR',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#CALC-rate').text(data.rates.CALC);
                    $('#CAS-rate').text(data.rates.CAS);
                    $('#CAT-rate').text(data.rates.CAT);
                    $('#CCRB-rate').text(data.rates.CCRB);
                    $('#CDT-rate').text(data.rates.CDT);
                    $('#CESC-rate').text(data.rates.CESC);
                    $('#CHAT-rate').text(data.rates.CHAT);
                    $('#CJ-rate').text(data.rates.CJ);
                    $('#CL-rate').text(data.rates.CL);
                    $('#CLD-rate').text(data.rates.CLD);
                    $('#CLOAK-rate').text(data.rates.CLOAK);
                    $('#CND-rate').text(data.rates.CND);
                    $('#CNX-rate').text(data.rates.CNX);
                    $('#CPC-rate').text(data.rates.CPC);
                    $('#CRAVE-rate').text(data.rates.CRAVE);
                    $('#CRC-rate').text(data.rates.CRC);
                    $('#CRE-rate').text(data.rates.CRE);
                    $('#CRW-rate').text(data.rates.CRW);
                    $('#CTO-rate').text(data.rates.CTO);
                    $('#CTR-rate').text(data.rates.CTR);
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