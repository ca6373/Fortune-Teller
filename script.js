$(".Button").click(function() {
 var month = $(".month").val();
 var cost = $(".cost").val();
 var color = $(".color").val();
 var calculation = parseInt(month)*12*41*parseInt(cost);
 $(".fortune").append("You will spend "+calculation+"$ on "+color);

});