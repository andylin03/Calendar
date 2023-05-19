// Day, date, time
function updateDateTime() {
    var dateTimeElement = document.getElementById('currentDay');
    var currentDate = new Date();
  
    // Get date and time 
    var date = currentDate.toLocaleDateString();
    var time = currentDate.toLocaleTimeString();
  
    // Update the HTML element with the current date and time
    dateTimeElement.textContent = 'Current Date: ' + date + ' | Current Time: ' + time;
  
    // Update the time block colors
    updateBlockColors();
  }
  
  // time and date update
  setInterval(updateDateTime, 1000);
  
 
// Update the time block colors
function updateBlockColors() {
    var currentTime = dayjs().format('H');
  
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
  
      if (blockTime < currentTime) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockTime === currentTime) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  
  // Schedule a recurring update of the block colors every minute
  setInterval(updateBlockColors, 60000);
  
  // updates page
  $(document).ready(function () {
    updateDateTime();
    updateBlockColors();
    renderText();
  });

  // Button functions
  $(".saveBtn").click(function () {
    var eventText = $(this).siblings("textarea").val();
    var eventTime = $(this).parent().attr("id");
  
    localStorage.setItem(eventTime, eventText);
  });
  
  // saves events
  function renderText() {
    $(".time-block").each(function () {
      var eventTime = $(this).attr("id");
      var eventText = localStorage.getItem(eventTime);
  
      $(this).find("textarea").val(eventText);
    });
  }
  

  
  
  
  
  