// time and date
function updateDateTime() {
    var dateTimeElement = document.getElementById('currentDay');
    var currentDate = new Date();
  
    // Get date and time 
    var date = currentDate.toLocaleDateString();
    var time = currentDate.toLocaleTimeString();
  
    // Update the HTML element with the current date and time
    dateTimeElement.textContent = 'Current Date: ' + date + ' | Current Time: ' + time;
  }
  
  setInterval(updateDateTime, 1000);
  
  // Update the block colors based on the current time
  function updateBlockColors() {
    var currentTime = new Date().getHours();
  
    $(".time-block").each(function () {
      var scheduledTime = parseInt($(this).attr("id").split("-")[1]);
  
      if (currentTime > scheduledTime) {
        $(this).removeClass("future present");
        $(this).addClass("past");
      } else if (currentTime < scheduledTime) {
        $(this).removeClass("past present");
        $(this).addClass("future");
      } else {
        $(this).removeClass("past future");
        $(this).addClass("present");
      }
    });
  }
  
  updateBlockColors();
  
  // Buttons functions
  $(".saveBtn").click(function () {
    var eventText = $(this).siblings("textarea").val();
    var eventTime = $(this).parent().attr("id");
  
    // Store the eventText as a stringified JSON
    localStorage.setItem(eventTime, JSON.stringify(eventText));
  
    renderText();
    updateBlockColors(); 
    // Update block colors after saving
  });
  
  // Enter and Display Events
  function renderText() {
    $("#hour-9 textarea").val(parseJSONOrDefault(localStorage.getItem("hour-9")));
    $("#hour-10 textarea").val(parseJSONOrDefault(localStorage.getItem("hour-10")));
    $("#hour-11 textarea").val(parseJSONOrDefault(localStorage.getItem("hour-11")));
    $("#hour-12 textarea").val(parseJSONOrDefault(localStorage.getItem("hour-12")));
    $("#hour-1 textarea").val(parseJSONOrDefault(localStorage.getItem("hour-1")));
    $("#hour-2 textarea").val(parseJSONOrDefault(localStorage.getItem("hour-2")));
    $("#hour-3 textarea").val(parseJSONOrDefault(localStorage.getItem("hour-3")));
    $("#hour-4 textarea").val(parseJSONOrDefault(localStorage.getItem("hour-4")));
    $("#hour-5 textarea").val(parseJSONOrDefault(localStorage.getItem("hour-5")));
  }
  
  function parseJSONOrDefault(jsonString, defaultValue = "") {
    try {
      return JSON.parse(jsonString) || defaultValue;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return defaultValue;
    }
  }
  
  renderText();
  
  
  