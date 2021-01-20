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
    
  });
});
