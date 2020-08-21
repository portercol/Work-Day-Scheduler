// Populate the current date to the top of the page

var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay')
eDisplayMoment.innerHTML = NowMoment.format('MMMM Do, YYYY');

// Differences: class names, key names
function temp(buttonClassName, textAreaClassName, keyName){
    $(buttonClassName).on("click", function(){
        // Get the input from the texa area
            var textarea = $(textAreaClassName).val();
        // Save data from text area to local storage
            localStorage.setItem(keyName, textarea)
        })
        var textarea10 = localStorage.getItem(keyName)
        console.log(textarea10)
        // get data to show on the page
        $(textAreaClassName).val(textarea10);
}
temp("#button-addon1", ".textarea-9", "data")
temp("#button-addon2", ".textarea-10", "data10")
temp("#button-addon3", ".textarea-11", "data11")
temp("#button-addon4", ".textarea-12", "data12")
temp("#button-addon5", ".textarea-1", "data1")
temp("#button-addon6", ".textarea-2", "data2")
temp("#button-addon7", ".textarea-3", "data3")
temp("#button-addon8", ".textarea-4", "data4")
temp("#button-addon9", ".textarea-5", "data5")

    var NowMoment = moment();
    