// $(function(){
//     $("body").prepend("modules/navbar.html"); 
// });

$(function () {
    $.get("modules/navbar.html", function (data) {
        $("body").prepend(data);
    });
});
