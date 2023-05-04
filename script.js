// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $(".saveBtn").on("click", function() {
    console.log(this);
    var saveText = $(this).parent().find("textarea").val();
    var selectHour = $(this).parent().attr('id');
    localStorage.setItem(selectHour, saveText);
    //localStorage.getItem("col-8 col-md-10 description", saveText);

  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var curHour = dayjs().hour();
  var timeBlox = $(".time-block");
  timeBlox.each(function(){
    console.log(this);
    console.log(parseInt(this.id));
    var hour = parseInt(this.id);
    if (curHour > hour){
      this.classList.add("past");
    }
    else if(curHour < hour){
      this.classList.add("future");
    }
    else {
      this.classList.add("present");
    }
    $(this).children("textarea").val(localStorage.getItem(this.id));
  })


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
});
var now = dayjs();
$('#currentDay').text(now.format('D MMM, YYYY, h:mm:ss a'));