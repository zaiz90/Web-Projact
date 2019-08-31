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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=DAS,DASH,DAT,DATA,DBC,DBET,DCN,DCR,DCT,DEEP,DENT,DGB,DGD,DIM,DIME,DMD,DNT,DOGE,DRGN,DRZ,DSH,DTACZ',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#DAS-rate').text(data.rates.DAS);
                    $('#DASH-rate').text(data.rates.DASH);
                    $('#DAT-rate').text(data.rates.DAT);
                    $('#DATA-rate').text(data.rates.DATA);
                    $('#DBC-rate').text(data.rates.DBC);
                    $('#DBET-rate').text(data.rates.DBET);
                    $('#DCN-rate').text(data.rates.DCN);
                    $('#DCR-rate').text(data.rates.DCR);
                    $('#DCT-rate').text(data.rates.DCT);
                    $('#DEEP-rate').text(data.rates.DEEP);
                    $('#DENT-rate').text(data.rates.DENT);
                    $('#DGB-rate').text(data.rates.DGB);
                    $('#DGD-rate').text(data.rates.DGD);
                    $('#DIM-rate').text(data.rates.DIM);
                    $('#DIME-rate').text(data.rates.DIME);
                    $('#DMD-rate').text(data.rates.DMD);
                    $('#DNT-rate').text(data.rates.DNT);
                    $('#DOGE-rate').text(data.rates.DOGE);
                    $('#DRGN-rate').text(data.rates.DRGN);
                    $('#DRZ-rate').text(data.rates.DRZ);
                    $('#DSH-rate').text(data.rates.DSH);
                    $('#DTA-rate').text(data.rates.DTA);
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