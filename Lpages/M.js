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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=MAID,MANA,MCAP,MCO,MDA,MDS,MIOTA,MKR,MLN,MNX,MOD,MOIN,MONA,MTL,MTX,',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#MAID-rate').text(data.rates.MAID);
                    $('#MANA-rate').text(data.rates.MANA);
                    $('#MCAP-rate').text(data.rates.MCAP);
                    $('#MCO-rate').text(data.rates.MCO);
                    $('#MDA-rate').text(data.rates.MDA);
                    $('#MDS-rate').text(data.rates.MDS);
                    $('#MIOTA-rate').text(data.rates.MIOTA);
                    $('#MKR-rate').text(data.rates.MKR);
                    $('#MLN-rate').text(data.rates.MLN);
                    $('#MNX-rate').text(data.rates.MNX);
                    $('#MOD-rate').text(data.rates.MOD);
                    $('#MOIN-rate').text(data.rates.MOIN);
                    $('#MONA-rate').text(data.rates.MONA);
                    $('#MTL-rate').text(data.rates.MTL);
                    $('#MTX-rate').text(data.rates.MTX);
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