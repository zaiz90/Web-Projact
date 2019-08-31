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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=NAS,NAV,NBT,NDC,NEBL,NEO,NEU,NEWB,NGC,NKC,NLC2,NMC,NMR,NULS,NVC,NXT',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#NAS-rate').text(data.rates.NAS);
                    $('#NAV-rate').text(data.rates.NAV);
                    $('#NBT-rate').text(data.rates.NBT);
                    $('#NDC-rate').text(data.rates.NDC);
                    $('#NEBL-rate').text(data.rates.NEBL);
                    $('#NEO-rate').text(data.rates.NEO);
                    $('#NEU-rate').text(data.rates.NEU);
                    $('#NEWB-rate').text(data.rates.NEWB);
                    $('#NGC-rate').text(data.rates.NGC);
                    $('#NKC-rate').text(data.rates.NKC);
                    $('#NLC2-rate').text(data.rates.NLC2);
                    $('#NMC-rate').text(data.rates.NMC);
                    $('#NMR-rate').text(data.rates.NMR);
                    $('#NULS-rate').text(data.rates.NULS);
                    $('#NVC-rate').text(data.rates.NVC);
                    $('#NXT-rate').text(data.rates.NXT);
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