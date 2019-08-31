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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=ICN,ICOS,ICX,IGNIS,ILC,INK,INS,INSN,INT,IOP,IOST,ITC',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#ICN-rate').text(data.rates.ICN);
                    $('#ICOS-rate').text(data.rates.ICOS);
                    $('#ICX-rate').text(data.rates.ICX);
                    $('#IGNIS-rate').text(data.rates.IGNIS);
                    $('#ILC-rate').text(data.rates.ILC);
                    $('#INK-rate').text(data.rates.INK);
                    $('#INS-rate').text(data.rates.INS);
                    $('#INSN-rate').text(data.rates.INSN);
                    $('#INT-rate').text(data.rates.INT);
                    $('#IOP-rate').text(data.rates.IOP);
                    $('#IOST-rate').text(data.rates.IOST);
                    $('#ITC-rate').text(data.rates.ITC);
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