

try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);

}


var noteTextarea = $('.inputField');


var noteContent = '';


recognition.continuous = true;


recognition.onresult = function(event) {

  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;

  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent += transcript;
    noteTextarea.val(noteContent);
  }
  noteContent = noteContent.toLowerCase();
  console.log(noteContent);
 
  if (noteContent == "the sun" || noteContent == "sun") {
    location.href = "sun.html";
    noteTextarea.val("");
  } else if (noteContent == "mercury" || noteContent == "planet mercury"){
    location.href = "mercury.html";
    noteTextarea.val("");
  } else if (noteContent == "venus" || noteContent == "planet venus"){
    location.href = "venus.html";
    noteTextarea.val("");
  } else if (noteContent == "earth" || noteContent == "planet earth"){
    location.href = "earth.html";
    noteTextarea.val("");
  } else if (noteContent == "mars" || noteContent == "planet mars"){
    location.href = "mars.html";
    noteTextarea.val("");
  } else if (noteContent == "jupiter" || noteContent == "planet jupiter"){
    location.href = "jupiter.html";
    noteTextarea.val("");
  } else if (noteContent == "saturn" || noteContent == "planet saturn"){
    location.href = "saturn.html";
    noteTextarea.val("");
  } else if (noteContent == "uranus" || noteContent == "planet uranus"){
    location.href = "uranus.html";
    noteTextarea.val("");
  } else if (noteContent == "neptune" || noteContent == "planet neptune"){
    location.href = "neptune.html";
    noteTextarea.val("");
  } else {
    alert ("Sorry, that is not a planet");
    noteTextarea.val("");
  }
  

};


recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    alert('No speech was detected. Try again.');  
  };
}




$('#start-record-btn').on('click', function(e) {
  if (noteContent.length) {
    noteContent += ' ';
  }
  recognition.start();
});


$('#pause-record-btn').on('click', function(e) {
  recognition.stop();

});


noteTextarea.on('input', function() {
  noteContent = $(this).val();
})
console.log(noteContent);





function redirection () {
  $('.sun').on('click', function() {
    location.href = "sun.html";
  });
  $('.mercury').on('click', function() {
    location.href = "mercury.html";
  });
  $('.venus').on('click', function() {
    location.href = "venus.html";
  });
  $('.earth').on('click', function() {
    location.href = "earth.html";
  });
  $('.mars').on('click', function() {
    location.href = "mars.html";
  });
  $('.jupiter').on('click', function() {
    location.href = "jupiter.html";
  });
  $('.saturn').on('click', function() {
    location.href = "saturn.html";
  });
  $('.uranus').on('click', function() {
    location.href = "uranus.html";
  });
  $('.neptune').on('click', function() {
    location.href = "neptune.html";
  });

}

function init () {
  redirection();

}

init();



