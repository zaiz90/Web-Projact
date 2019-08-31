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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=ABC,ACP,ACT,ACT*,ADA,ADCN,ADL,ADX,ADZ,AE,AGI,AIB,AIDOC,AION,AIR,ALT,AMB,AMM,ANT,APC,APPC,ARC,ARCT,ARDR,ARK,ARN,ASAFE2,AST,ATB,ATM,AURS,AVT',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#ABC-rate').text(data.rates.ABC);
                    $('#ACP-rate').text(data.rates.ACP);
                    $('#ACT-rate').text(data.rates.ACT);
                    $('#ADA-rate').text(data.rates.ADA);
                    $('#ADCN-rate').text(data.rates.ADCN);
                    $('#ADL-rate').text(data.rates.ADL);
                    $('#ADX-rate').text(data.rates.ADX);
                    $('#ADZ-rate').text(data.rates.ADZ);
                    $('#AE-rate').text(data.rates.AE);
                    $('#AGI-rate').text(data.rates.AGI);
                    $('#AIB-rate').text(data.rates.AIB);
                    $('#AIDOC-rate').text(data.rates.AIDOC);
                    $('#AION-rate').text(data.rates.AION);
                    $('#AIR-rate').text(data.rates.AIR);
                    $('#ALT-rate').text(data.rates.ALT);
                    $('#AMB-rate').text(data.rates.AMB);
                    $('#AMM-rate').text(data.rates.AMM);
                    $('#ANT-rate').text(data.rates.ANT);
                    $('#APC-rate').text(data.rates.APC);
                    $('#APPC-rate').text(data.rates.APPC);
                    $('#ARC-rate').text(data.rates.ARC);
                    $('#ARCT-rate').text(data.rates.ARCT);
                    $('#ARDR-rate').text(data.rates.ARDR);
                    $('#ARK-rate').text(data.rates.ARK);
                    $('#ARN-rate').text(data.rates.ARN);
                    $('#ASAFE2-rate').text(data.rates.ASAFE2);
                    $('#AST-rate').text(data.rates.AST);
                    $('#ATB-rate').text(data.rates.ATB);
                    $('#ATM-rate').text(data.rates.ATM);
                    $('#AURS-rate').text(data.rates.AURS);
                    $('#AVT-rate').text(data.rates.AVT);
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