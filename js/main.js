// $(function(){
//     $("body").load("modules/navbar.html"); 
// });

$(function () {
    $.get("modules/navbar.html", function (data) {
        $("body").prepend(data);
    });
});
