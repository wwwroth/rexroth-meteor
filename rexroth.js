function shuffle(arr) {
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
}
function drawClientSpan(arr) {
    $('.clients').html("<img src='"+arr[0]+"' />");
}
function drawTechnologySpan(arr) {
    $('.technologies').html("<img src='"+arr[0]+"' />");
}
if (Meteor.isClient) {
    Template.home.rendered = function(technologyImages, clientLogos) {
        var technologyImages = shuffle([
            'aws-logo.png',
            'laravel-logo.png',
            'meteor-logo.png',
            'mysql-logo.png',
            'php-logo.png',
        ]);
        var clientLogos = ([
            'directnorth-logo.png',
                'kunversion-logo.png',
                'railsdog-logo.png'
        ]);
        drawClientSpan(shuffle(clientLogos));
        drawTechnologySpan(shuffle(technologyImages));
        setInterval(function(){
            drawClientSpan(shuffle(clientLogos));
            drawTechnologySpan(shuffle(technologyImages));
        },2000);
    }
}