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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=EC,EDG,EDO,EDR,EKO,ELA,ELF,EMC,EMGO,ENG,ENJ,EOS,ERT,ETC,ETH,ETN,ETP,ETT,EVR,EVX',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#EC-rate').text(data.rates.EC);
                    $('#EDG-rate').text(data.rates.EDG);
                    $('#EDO-rate').text(data.rates.EDO);
                    $('#EDR-rate').text(data.rates.EDR);
                    $('#EKO-rate').text(data.rates.EKO);
                    $('#ELA-rate').text(data.rates.ELA);
                    $('#ELF-rate').text(data.rates.ELF);
                    $('#EMC-rate').text(data.rates.EMC);
                    $('#EMGO-rate').text(data.rates.EMGO);
                    $('#ENG-rate').text(data.rates.ENG);
                    $('#ENJ-rate').text(data.rates.ENJ);
                    $('#EOS-rate').text(data.rates.EOS);
                    $('#ERT-rate').text(data.rates.ERT);
                    $('#ETC-rate').text(data.rates.ETC);
                    $('#ETH-rate').text(data.rates.ETH);
                    $('#ETN-rate').text(data.rates.ETN);
                    $('#ETP-rate').text(data.rates.ETP);
                    $('#ETT-rate').text(data.rates.ETT);
                    $('#EVR-rate').text(data.rates.EVR);
                    $('#EVX-rate').text(data.rates.EVX);
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