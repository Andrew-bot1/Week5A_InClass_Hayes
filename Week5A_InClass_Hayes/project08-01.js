"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Andrew Hayes
      Date:   4/16/25   

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
//constructor
function timer(min,sec){
      //declare
      this.minutes=min;
      this.seconds=sec;
      this.timeID=null;
}

//add method to see if timer is paused
function runPause(timer, minBox, secBox) {
      //if statement to see if timer is paused
      if (timer.timeID != null) {
            //pause timer
            window.clearInterval(timer.timeID);
            //set timeid to null
            timer.timeID = null;
      } 
      else {
            //start timer
            timer.timeID = window.setInterval(function countdown() {
                  //see if seconds is greater than 0
                  if (timer.seconds > 0) {
                  //decrease seconds value by 1
                  timer.seconds -= 1;
                  }
                  //see if mins is greater than 0
                  else if (timer.minutes > 0) {
                        //decrease mins by 1
                        timer.minutes -= 1;
                  }
                  //stop timer
                  else {
                        window.clearInterval(timer.timeID);
                        //set timeid to null
                        timer.timeID = null;
                  }
                  //change value of minutes and seconds
                  timer.minutes = minBox.value;
                  timer.seconds = secBox.value;
            }, 1000);
      }
}







/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

//declare myTimer object
let myTimer=new timer(minBox.value,secBox.value);
//change minuetes to minBox value
minBox.onchange=function(){
      myTimer.minutes= minBox.value;
}
//change seconds to secBox value
secBox.onchange=function(){
      myTimer.seconds=secBox.value;
}

// pause timer  
runPauseTimer.onclick=function(){
      myTimer=runPause(myTimer,minBox,secBox);
}
