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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=PART,PAY,PBT,PCS,PIVX,PIZZA,PLBT,PLR,POE,POLY,POSW,POWR,PPC,PPT,PPY,PRC,PRES,PRG,PRL,PRO,PURA,PUT',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#PART-rate').text(data.rates.PART);
                    $('#PAY-rate').text(data.rates.PAY);
                    $('#PBT-rate').text(data.rates.PBT);
                    $('#PCS-rate').text(data.rates.PCS);
                    $('#PIVX-rate').text(data.rates.PIVX);
                    $('#PIZZA-rate').text(data.rates.PIZZA);
                    $('#PLBT-rate').text(data.rates.PLBT);
                    $('#PLR-rate').text(data.rates.PLR);
                    $('#POE-rate').text(data.rates.POE);
                    $('#POLY-rate').text(data.rates.POLY);
                    $('#POSW-rate').text(data.rates.POSW);
                    $('#POWR-rate').text(data.rates.POWR);
                    $('#PPC-rate').text(data.rates.PPC);
                    $('#PPT-rate').text(data.rates.PPT);
                    $('#PPY-rate').text(data.rates.PPY);
                    $('#PRC-rate').text(data.rates.PRC);
                    $('#PRES-rate').text(data.rates.PRES);
                    $('#PRG-rate').text(data.rates.PRG);
                    $('#PRL-rate').text(data.rates.PRL);
                    $('#PRO-rate').text(data.rates.PRO);
                    $('#PURA-rate').text(data.rates.PURA);
                    $('#PUT-rate').text(data.rates.PUT);
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