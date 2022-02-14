//import node
dateArray = []
eventArray = []
window.onload = function(){
    const form = document.querySelector('form')
    form.addEventListener('submit', event => {
      // submit event detected
      event.preventDefault()
      printRes()
      updatePage()

    })
};
function printRes()
{
var date = parseInt(document.getElementById("date").value)
//console.log(date)
pos = dateArray.indexOf(date)
if (pos != -1)
{
    console.log("found")
    dateArray.splice(pos,1);
    eventArray.splice(pos,1);
}
if (date <= 31 && date > 0)
    dateArray.push(date)
//console.log(dateArray)

var event = document.getElementById("title").value
//console.log(event)
if (date <= 31 && date > 0)
    eventArray.push(event)
//console.log(eventArray)
}
function updatePage()
{
    var dateString = "";
    for (var i = 0; i < dateArray.length; i++)
    {

        console.log(dateArray)
        dateString += dateArray[i] + ": " + eventArray[i] + "<br>";
    }
    document.getElementById("day").innerHTML = dateString;
    console.log("test")
}

var obj = 
{
    "version": null,  
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    "10": null,
    "11": null,
    "12": null,
    "13": null,
    "14": null,
    "15": null,
    "16": null,
    "17": null,
    "18": null,
    "19": null,
    "20": null,
    "21": null,
    "22": null,
    "23": null,
    "24": null,
    "25": null,
    "26": null,
    "27": null,
    "28": null,
    "29": null,
    "30": null,
    "31": null,
    "comment": "Each number is a day of the month, this document will be updated each month. LEAVE ANY DAY THAT IS BLANK AS NULL;",
    "comment2":"version number is year.monthDay"
}
function createFile()
{
    const d = new Date();
    var day = d.getDate();
    var month =(d.getMonth() + 1) * 100
    var year = d.getFullYear()*10000
    version = day + month + year;
    version /= 10000
    // version 
    console.log(version)


    obj["version"] = version;
    //console.log(obj);
    for (var i = 1; i <= 31; i++)
    {
        var index = dateArray.indexOf(i);
        if (index > -1)
        {
           obj[i] = eventArray[index] 
           //console.log("found")
        }
    }



    var dictstring = JSON.stringify(obj);
    console.log(dictstring)
    //var fs = require('fs');
    //fs.writeFile("events.json", dictstring, function(err, result) {
    //if(err) console.log('error', err);
//});
}

