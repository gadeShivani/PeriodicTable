$(document).ready(function () {
   var myItems;

    $.getJSON('https://github.com/Bowserinator/Periodic-Table-JSON/blob/master/PeriodicTableJSON.json', function(data) {
        myItems = data.items;
        console.log(myItems);
        alert(myItems.Elements.name[1]);
    });
var $ic = $('#infoContainer');
$ic.hide();
$('.box').click(function () {
    var newLink = $(this).find('a').attr('href'); 
    var left  = ($(window).width()/2)-(600/2),
        top   = ($(window).height()/2)-(400/2),
        popup = window.open (newLink, "Element", "width=600, height=400, top="+top+", left="+left);
    return false;
});
});

