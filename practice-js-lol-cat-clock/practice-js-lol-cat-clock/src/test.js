var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var evening = 18;
var partytime;




// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the currentTime on the webpage
    var clock = document.getElementById('clock');
 
    var currentDate = new Date();
 
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes  = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
     var currentTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = currentTime;
};



//a. Getting the clock to change/update messages & pictures as the time clocks:party time,wakeup time,lunch time,nap time,noon time,evening time.
//b.display the update by grabbing the timeevent space and display it there.
var updateClock = function() {
  var currentHour = new Date().getHours();
  var messageText;
  var imageUrl = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (currentHour == partytime)
  {
    imageUrl = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (currentHour == wakeuptime)
  {
    imageUrl = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (currentHour == lunchtime)
  {
    imageUrl = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (currentHour == naptime)
  {
    imageUrl = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (currentHour < noon)
  {
    imageUrl = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    imageUrl = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    imageUrl = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  // console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImageJS.src = imageUrl;
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");
partyButton.addEventListener("click", partyEvent);

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1; //if you set party time to 9 d/4 9-1 indicte partytime less by 1
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

var wakeUpEvent = function(){
    wakeuptime = wakeUpTimeSelector.value;
};



// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
lunchTimeSelector.addEventListener("change", lunchEvent);


var lunchEvent = function(){
    lunchtime = lunchTimeSelector.value;
};



// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");
napTimeSelector.addEventListener("change", napEvent);


var napEvent = function(){
    naptime = napTimeSelector.value;
};
