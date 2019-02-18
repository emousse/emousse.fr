$(function () {
    $arrayH1 = $('.card-body h1');
    $summary = $('<div id="list-exemple" class="list-group summary-sticky"></div>')
    
    $arrayH1.each(function (index, element) {
        console.log(index, element);
        $newA = $('<a class="list-group-item list-group-item-action"></a>')
        var idAttr = '#' + $(element).attr('id');
        var idText = $(element).text();
        $newA.attr('href', idAttr);
        $newA.text(idText);
        $summary.append($newA);
    });
    if($summary){
        $('.summary').append($summary);
    };
});