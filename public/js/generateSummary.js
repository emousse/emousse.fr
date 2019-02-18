window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
$(function () {
    $arrayH1 = $('.card-body h1');
    $summary = $('<ul id="list-exemple" class="nav justify-content-center"></ul>')
    
    $arrayH1.each(function (index, element) {
        console.log(index, element);
        $newLi = $('<li class="nav-item"></li>')
        $newA = $('<a class="nav-link"></a>')
        var idAttr = '#' + $(element).attr('id');
        var idText = $(element).text();
        $newA.attr('href', idAttr);
        $newA.text(idText);
        $newLi.append($newA)
        $summary.append($newLi);
    });
    if($summary){
        $('.fixed-bottom').prepend($summary);
    };
});