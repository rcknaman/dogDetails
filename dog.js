var a = "";

$.get('https://dog.ceo/api/breeds/list/all', function(data) {
    let obj = Object.keys(data.message);
    for (let i = 0; i < obj.length; i++) {
        $('#dog-breed').append('<option value="' + obj[i] + '">' + obj[i] + '</option>');
    }
    $('#dog-breed').on('change', function() {
        var s;
        let dogbred = $('#dog-breed').val();
        console.log(data.message[dogbred].length);
        if (data.message[dogbred].length != 0) {
            $('#header').append('<div id="sub-breed-cont"><p>sub-breed</p><select id="sub-breed"></select></div>');
            for (let i = 0; i < data.message[dogbred].length; i++) {
                $("#sub-breed").append('<option value="' + data.message[$('#dog-breed').val()][i] + '">' + data.message[$('#dog-breed').val()][i] + '</option>');
            }
            s = "https://dog.ceo/api/breed/" + $('#dog-breed').val() + "/" + $("#sub-breed").val() + "/" + "images/random/20";
        } else {
            s = "https://dog.ceo/api/breed/" + $('#dog-breed').val() + "/" + "images/random/30";
        }
        console.log(s);
        a = s;
    })
    $('button').on('click', function() {
        console.log(a);
        $('img').remove();
        $.get(a, function(data) {

            for (let i = 0; i < 20; i++) {
                console.log(data.message[i]);
                $('#content').append("<img src='" + data.message[i] + "'>")
            }
        })
    })
})