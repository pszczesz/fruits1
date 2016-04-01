

$(document).ready(function () {
    $("input#start").click(function(){
        loadOneImage($("div#scene"));
        loadOnlyOneImage(wzorzec);
         moveElementInScene();
    });
    var wzorzec = $("div#wzorzec");
    var upBorder = $("#upBorder");
    
    
    loadAllImages(upBorder);
   
    $("input#stop").click(function (){
        moveElementStop();
    });
});
function getImages() {
    return ['1.png', '2.png', '3.png', '4.png', '5.png'];
}

function loadOneImage(element) {
    var images = getImages();
    var los = Math.floor(Math.random() * images.length);
    console.log(los);
    var ob = "<img src='images/figury/" + images[los]
            + "' alt='obrazek'/>";

    element.html(ob+element.html());
}
function loadOnlyOneImage(element){
    var images = getImages();
    var los = Math.floor(Math.random() * images.length);
    console.log(los);
    var ob = "<img src='images/figury/" + images[los]
            + "' alt='obrazek'/>";

    element.html(ob);
}
function loadAllImages(element) {
    var images = getImages();
    var html = "";
    images.forEach(function (item) {
        html += "<span class='cell'><img src='images/figury/"
                + item + "' alt=''/></span>";
    });
    element.html(html);
}
function moveElementInScene() {
    var element = $("div#scene img");
    // alert(element.prop("src"));
    // element.prop("position","absolute");
    element.css({position: "absolute", left: "100px","margin-top":"45px"});
    element.load(function () {
        element.stop();
      //  console.log("ll = " + element.width());
        var max = $("div#scene").width() - 2 * element.width();
       // console.log(max);
        element.animate({left: max}, 5000);
    });

}
function moveElementStop(){
   var element = $("div#scene img");
   element.stop();
}