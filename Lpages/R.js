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
            url: 'http://api.coinlayer.com/api/live?access_key=2c0b3b1184d5bf7caa13f5204cfec840&target=' + curr.value + '&symbols=R,RBIES,RCN,RDD,RDN,REBL,REE,REP,REQ,REV,RGC,RHOC,RIYA,RKC,RLC,RPX,RUFF',
            type: 'GET',
            success: function (data) {
                if (data.success == true) {
                    console.log("success");
                    console.log(data);
                    $('#R-rate').text(data.rates.R);
                    $('#RBIES-rate').text(data.rates.RBIES);
                    $('#RCN-rate').text(data.rates.RCN);
                    $('#RDD-rate').text(data.rates.RDD);
                    $('#RDN-rate').text(data.rates.RDN);
                    $('#REBL-rate').text(data.rates.REBL);
                    $('#REE-rate').text(data.rates.REE);
                    $('#REP-rate').text(data.rates.REP);
                    $('#REQ-rate').text(data.rates.REQ);
                    $('#REV-rate').text(data.rates.REV);
                    $('#RGC-rate').text(data.rates.RGC);
                    $('#RHOC-rate').text(data.rates.RHOC);
                    $('#RIYA-rate').text(data.rates.RIYA);
                    $('#RKC-rate').text(data.rates.RKC);
                    $('#RLC-rate').text(data.rates.RLC);
                    $('#RPX-rate').text(data.rates.RPX);
                    $('#RUFF-rate').text(data.rates.RUFF);
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