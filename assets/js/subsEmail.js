function subsEmail() {

    var name = document.getElementById("subName").value;
    var email = document.getElementById("subEmail").value;
    var text = document.getElementById("subTextarea").value;
    // Returns successful data submission message when the entered information is stored in database.
    var dataString = 'name=' + name + '&email=' + email + '&text=' + text;
    $.ajax({
        type: "POST",
        url: "subsMail.php",
        data: dataString,
        cache: false,
        success: function(html) {

            // $("#message").html(html);

            // $("#message").fadeTo(2000, 500).slideUp(500, function() {
            //     $("#message").slideUp(500);
            // });

        }
    });
    return true;
}