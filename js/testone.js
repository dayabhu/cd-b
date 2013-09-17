$( document ).ready(function() {

    

    $("#sliderOne").slider({
        orientation: "horizontals",
        range: "min",
        min: 0,
        max: 10,
        value: 5,
        slide: function(event, ui) {
            $("#informative").val(ui.value);
        }
    });
    // $("#amount").val($("#slider-vertical").slider("value"));


$("#sliderTwo").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 1,
        slide: function(event, ui) {
$( "#recommend").val( ui.value?'Yes':'No');
 
}
});
        // $("#value").val($("#green").slider("value")?'Yes':'No');


$("#sliderThree").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 1,
        slide: function(event, ui) {
$( "#visit").val( ui.value?'Yes':'No');
 
}
});


$("#sliderFour").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 10,
        value:5,
        slide: function(event, ui) {
 $("#inform").val(ui.value);
 
}
});


$("#sliderFive").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 10,
        value:5,
        slide: function(event, ui) {
 $("#ux").val(ui.value);
 
}
});

$("#sliderSix").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 10,
        value:5,
        slide: function(event, ui) {
 $("#hSkills").val(ui.value);
 
}
});

$("#sliderSeven").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 10,
        value:5,
        slide: function(event, ui) {
 $("#bim").val(ui.value);
 
}
});

$("#sliderEight").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 10,
        value:5,
        slide: function(event, ui) {
 $("#rail").val(ui.value);
 
}
});

$("#sliderNine").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 10,
        value:5,
        slide: function(event, ui) {
 $("#futures").val(ui.value);
 
}
});

$("#sliderTen").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 10,
        value:5,
        slide: function(event, ui) {
 $("#video").val(ui.value);
 
}
});

$("#sliderEleven").slider({
orientation: "horizontals",
        range: "min",
        min: 0,
        max: 1,
        slide: function(event, ui) {
$( "#request").val( ui.value?'Yes':'No');
 
}
});




});