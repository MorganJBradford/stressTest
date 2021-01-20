$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    let userResponses = [];
    
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

    let tally = 0;
    for (let i = 0; i < userResponses.length; i += 1) {
      tally += userResponses[i];
    }
    
    $("#stress-test").hide();
    if (tally > 5) {
      $("#significant-stress").show();
    } else if (tally < 5 && tally > 2) {
      $("#mild-stress").show();
    } else {
      $("#what-stress").show();
    }
  });
});
