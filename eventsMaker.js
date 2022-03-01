
dateArray = [] 
eventArray = [] // sets up the parallel arrays of the date and event
window.onload = function(){
    const form = document.querySelector('form')
    form.addEventListener('submit', event => {
      // submit event detected
      event.preventDefault() //allows for submit button to work. In hindsight, I could have used a regular button. Oh well
      addEvent() //adds event to array
      updatePage() //shows array changes on the main page

    })
};
function addEvent() 
{
var date = parseInt(document.getElementById("date").value) //gets the value of the date input
var pos = dateArray.indexOf(date) // checks to see if the date already has been added 
if (pos != -1)
{
    dateArray.splice(pos,1);
    eventArray.splice(pos,1); // if it was located, remove the old date from the list
}
var event = document.getElementById("title").value //gets the name of the event
if (date <= 31 && date > 0 && event != "") //checks to make sure the date is in an acceptable range
    dateArray.push(date) //adds the date and event in parallel
    eventArray.push(event)
}
function updatePage()
{
    var dateString = "";
    for (var i = 0; i < dateArray.length; i++){
        dateString += dateArray[i] + ": " + eventArray[i] + "<br>"; //creates a string for each date/event pair
    }
    document.getElementById("day").innerHTML = dateString;
    document.getElementById("title").value = ""; //clears input boxes for minor QOL
    document.getElementById("date").value = "";
}
var obj = 
{
    "comment": "Each number is a day of the month, this document will be updated each month. LEAVE ANY DAY THAT IS BLANK AS NULL;",
    "comment2":"version number is year.monthDay" //comments exist in the object created 
}
function createFile() //creates file
{
    for (var i = 1; i <= 31; i++) 
    {
        var index = dateArray.indexOf(i);
        if (index > -1) //checks if an event has been created at that day. Not the best implementation. Too Bad.
        {
           obj[i] = eventArray[index] 
        }
    }

    download('events.json', JSON.stringify(obj));
}


function download(filename, text) { // i am trusting the internet. Upon closer inspection it is terrible. too bad.
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
