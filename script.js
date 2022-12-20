let horror = ["Midsommar", "Hereditary", "Get Out"];

$(".horror").click(function() {
// write your for loop here
for (let movie of horror){ 
$(".horror-recommend").append("<p>" + movie + "</p>");
}
    
});


let action = ["MeninBlack1", "MeninBlack2", "MeninBlack3"];

$(".action").click(function() {
// write your for loop here
for (let movie of action){ 
$(".action-recommend").append("<p>" + movie + "</p>");
}
    
});



let comedy = ["GrownUps", "Dumb&Dumber1", "Dumb&Dumber2"];

$(".comedy").click(function() {
// write your for loop here
for (let movie of comedy){ 
$(".comedy-recommend").append("<p>" + movie + "</p>");
}
    
});
//declare your new array here