

$(document).ready(function () {
    var wzorzec = $("div#wzorzec");
    var upBorder = $("#upBorder");
    loadOneImage(wzorzec);
    loadAllImages(upBorder);
});
function getImages() {
    return ['1.png', '2.png', '3.png', '4.png', '5.png'];
}

function loadOneImage(element){
    var images = getImages();
    var los = Math.floor(Math.random()*images.length);
    console.log(los);
    var ob = "<img src='images/figury/"+images[los]
        +"' alt='obrazek'/>";

      element.html(ob);
}
function loadAllImages(element){
    var images = getImages();
    var html = "";
    images.forEach(function(item){
        html += "<span class='cell'><img src='images/figury/"
                +item+"' alt=''/></span>";
    });
    element.html(html);
}