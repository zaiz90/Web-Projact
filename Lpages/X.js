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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=XAUR,XBP,XBY,XCP,XCXT,XDN,XEM,XGB,XHI,XID,XLM,XMR,XNC,XRB,XRP,XTO,XTZ,XUC,XVG,XZC',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#XAUR-rate').text(data.rates.XAUR);
                    $('#XBP-rate').text(data.rates.XBP);
                    $('#XBY-rate').text(data.rates.XBY);
                    $('#XCP-rate').text(data.rates.XCP);
                    $('#XCXT-rate').text(data.rates.XCXT);
                    $('#XDN-rate').text(data.rates.XDN);
                    $('#XEM-rate').text(data.rates.XEM);
                    $('#XGB-rate').text(data.rates.XGB);
                    $('#XHI-rate').text(data.rates.XHI);
                    $('#XID-rate').text(data.rates.XID);
                    $('#XLM-rate').text(data.rates.XLM);
                    $('#XMR-rate').text(data.rates.XMR);
                    $('#XNC-rate').text(data.rates.XNC);
                    $('#XRB-rate').text(data.rates.XRB);
                    $('#XRP-rate').text(data.rates.XRP);
                    $('#XTO-rate').text(data.rates.XTO);
                    $('#XTZ-rate').text(data.rates.XTZ);
                    $('#XUC-rate').text(data.rates.XUC);
                    $('#XVG-rate').text(data.rates.XVG);
                    $('#XZC-rate').text(data.rates.XZC);
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