// at a particular time you want the lunchtime event to happen

//activating the wakeuptimeselector 
// -want the event/result to be that wakeuptime=wakeupselectedtime
// -firstget all the wakeUpTimeSelector & store it in var
// wakeUpTime is time/value selected on the wakeUpTimeSelector
var wakeUpTimeSelector = document.getElementById("wakeupTimeSelector");
var wakeUpEvent = function(){
    wakeUpTime = wakeUpTimeSelector.value
}

PLAN
1. showing the currect time on the page 
-display the current time where it says 'clock goes here'
-set hours meridian AM to PM (not using 24hrs but 12rs) 
-set minutes e.g <10 to 0.9minutes = "0" + minutes 
-set seconds e.g "0"9 seconds to seconds= "0"+seconds
-put together the strings Hrs + minutes + seconds + meridian 

2.getting the clock to 
 a . increase on its own/update itself
      var upDate = function(){
          var time = newDate().gateHours();
      }
      b .change its messages
      c .change its images

  3.getting the clock to increase per seconds 
   var perSeconds = 1000;
   setInterval(updateclock, perSeconds);
   
   4.getting the partytime button to work/change 

   5.activate the wakeup ,lunchtime, naptime Selector