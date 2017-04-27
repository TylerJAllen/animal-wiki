$(function() {
  $(".animalForm").submit(function(event) {
    event.preventDefault();
    var animal = $("input:radio[name=animal]:checked").val();
    // alert (animal);
    if (animal === "polarBear") {
      $(".info").hide();
      $("#polarBearInfo").show();
    }
    else if (animal === "dikDik") {
      $(".info").hide();
      $("#dikDikInfo").show();
    }
    else {
      $(".info").hide();
      $("#hippoInfo").show();
    }
  });
});


//var flavor = $("input:radio[name=flavor]:checked").val();
