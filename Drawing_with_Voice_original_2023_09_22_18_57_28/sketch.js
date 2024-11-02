let sp = new p5.Speech();
let speech,
  said = "",
  speechRec;
let Xpos = 0,
  Xv = 0,
  Ypos = 0,
  Yv = 0,
  Stop = false;


function setup() {
  createCanvas(windowWidth,windowHeight);
  speechRec = new p5.SpeechRec();
  speechRec.onResult = showResult;
  let continuous = true;
  let interimResults = true;
  speechRec.start(continuous, interimResults);
  console.log(speechRec.onResult);

  function gotSpeech() {
    console.log(speechRec);
    if (speechRec.resultValue) {
      said = speechRec.resultString;
    }
}
}



function draw() {
  point(width / 2 + Xpos, height / 2 + Ypos);
  if (Stop == false) {
    Xpos = Xpos + Xv;
    Ypos = Ypos + Yv;
  }
}

function showResult() {
  said = speechRec.resultString;
  
    if (said == "Stop" || said == "stop") {
    Stop = true;
    Xv = 0;
    Yv = 0;
    sp.speak("Stopped");
  }
  text(speechRec.resultString,10,30)
  if (said == "start") {
    Stop = false;
    sp.speak("Started");
  }
  if (said == "Clear" || said == "clear") {
    background(255);
    sp.speak("Background cleared");
  }
  if (said=="black background"){
    background(0);
    sp.speak("Background Colour To Black")
  }
  if (said == "Center" || said == "center") {
    Xv = 0;
    Xpos = 0;
    Yv = 0;
    Ypos = 0;
    Stop = false;
    sp.speak("Back to center point");
  }
  if (said == "Reset" || said == "reset") {
    Xv = 0;
    Xpos = 0;
    Yv = 0;
    Ypos = 0;
    Stop = false;
    background(255);
    sp.speak("Restarted");
  }
  
if (said == "color red") {
  stroke(255, 0, 0);
  sp.speak("Changing colour to RED");
}
if (said == "color orange") {
  stroke(255, 165, 0);
  sp.speak("Changing colour to ORANGE");
}
if (said == "color yellow") {
  stroke(255, 255, 0);
  sp.speak("Changing colour to YELLOW");
}
if (said == "color green") {
  stroke(0, 255, 0);
  sp.speak("Changing colour to GREEN");
}
if (said == "color blue") {
  stroke(0, 0, 255);
  sp.speak("Changing colour to BLUE");
}
if (said == "color purple") {
  stroke(255, 0, 255);
  sp.speak("Changing colour to PURPLE");
}
if (said == "color black") {
  stroke(0);
  sp.speak("Changing colour to BLACK");
}
if (said == "color white") {
  stroke(255);
  sp.speak("Changing colour to WHITE");
}
  
  if(said=="small circle"){
      Stop = true;
      Xv = 0;
      Yv = 0;
    if (said=="small blue circle"){
      ellipse(Xpos+windowWidth/2,Ypos+windowHeight/2,50)
      fill(blue)
    }
      console.log(speechRec.resultString)
      ellipse(Xpos+windowWidth/2,Ypos+windowHeight/2,50)
      sp.speak("Made a small circle");
    }
  if(said=="medium circle"){
      Stop = true;
      Xv = 0;
      Yv = 0;
    console.log(speechRec.resultString)
      ellipse(Xpos+windowWidth/2,Ypos+windowHeight/2,450)
      sp.speak("Made a medium circle");
    }
  if(said=="large circle"){
      Stop = true;
      Xv = 0;
      Yv = 0;
      fill(speechRec.resultString)
      ellipse(Xpos+windowWidth/2,Ypos+windowHeight/2,600)
      sp.speak("Made a large circle");
    }
  
  if (said == "up" || said == "UP") {
    Yv = -1;
    Xv = 0;
    sp.speak("Going up");
  }
  if (said == "down" || said == "DOWN" || said == "down") {
    Yv = 1;
    Xv = 0;
    sp.speak("Going down");
  }
  if (said == "left" || said == "LEFT") {
    Yv = 0;
    Xv = -1;
    sp.speak("Going left");
  }
  if (said == "right" || said == "RIGHT") {
    Yv = 0;
    Xv = 1;
    sp.speak("Going right");
  }
  
  if(said=="default"){
    strokeWeight(1)
    sp.speak("Default Thickness")
  }
  if(said=="thicker"){
    strokeWeight(5)
    sp.speak("Medium Thickness")
  }
  if(said=="thickest"){
    strokeWeight(10)
    sp.speak("Max Thickness")
  }
}