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
      timer.minutes=min;
      timer.seconds=sec;
      timer.timeID=null;
}

//add method to see if timer is paused
function runPause(timer, minBox, secBox) {
      //if statement to see if timer is paused
      if (timer.timedID!=null) {
            //pause timer
            window.clearInterval(timer.timeID);
            timer.timeID=null;
      }
      else {
            
      }
}






/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

