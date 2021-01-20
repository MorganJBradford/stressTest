$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    let userResponses = []
    let tally = [];
    for (let i = 0; i < userResponses.length; i += 2) {
      for (let j = 1; i < userResponses.length; i += 2) {
      tally.push(userResponses[i] + userResponses[j]);
      }
    }
    
    $("#test-responses").show();
    $("input:checkbox[name=sign]:checked").each(function() {
      const stressSigns = parseInt($(this).val());
      userResponses.push(stressSigns);
    });
    $("input:checkbox[name=symptom]:checked").each(function() {
      const stressSymptoms = parseInt($(this).val());
      userResponses.push(stressSymptoms);
    });
    $("input:checkbox[name=relief]:checked").each(function() {
      const reliefActivity = parseInt($(this).val());
      userResponses.push(reliefActivity);
    });
    
    $('#stress-test').hide();
    
    //if () {
    //  $("#mild-stress").show();
    //} else if () {
    //  $("#significant-stress").show();
    //} else {
    //  $("#what-stress").show();
   // }
  });
});
