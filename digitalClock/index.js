
function showDayAndMonth(){
    let dateObj = new Date();
    let Days = ['Sunday', 'Monday', 'Tuesday', 
    'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    let Months = ['January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
    let day = dateObj.getDay();
    let date = dateObj.getDate();
    let month = dateObj.getMonth();
    let year = dateObj.getFullYear();
    
  
    let DayMonth = Days[day] + ", " + date + " " + Months[month] + " " + year;
    document.getElementById("date").innerHTML = DayMonth;
  }
  showDayAndMonth();
  
  function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
     let timeFormate = "AM";
  
    if (hour > 12) {
      hour -= 12;
      timeFormate = "PM";
    }
    else if (hour == 0) {
      hr = 12;
      timeFormate = "AM";
    }
  
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime = hour + ":" + min + ":" + sec + " "+ timeFormate;

    document.getElementById("clock").innerHTML = currentTime;
  }
  showTime();