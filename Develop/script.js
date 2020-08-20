// Populate the current date to the top of the page

var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay')
eDisplayMoment.innerHTML = NowMoment.format('MMMM Do, YYYY');


// Get the save button to save the message typed in the box
$("#button-addon1").on("click", function(){
    var textBox = localStorage.setItem("#form1", "Jibberish")
    console.log("form1")
})

// (".saveBtn").onclick = event => {
//     event.preventDefault();
//     data = getFormData();
//     localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
//     const message = "Form draft has been saved!";
//     displayAlert(message);
//   };



