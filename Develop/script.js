var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('MMMM Do, YYYY');

function temp(buttonClassName, textAreaClassName, keyName) {
    $(buttonClassName).on("click", function () {
        var textarea = $(textAreaClassName).val();
        localStorage.setItem(keyName, textarea);
    });
    var textarea10 = localStorage.getItem(keyName);
    $(textAreaClassName).val(textarea10);
}
temp("#button-addon1", ".textarea-9", "data");
temp("#button-addon2", ".textarea-10", "data10");
temp("#button-addon3", ".textarea-11", "data11");
temp("#button-addon4", ".textarea-12", "data12");
temp("#button-addon5", ".textarea-1", "data1");
temp("#button-addon6", ".textarea-2", "data2");
temp("#button-addon7", ".textarea-3", "data3");
temp("#button-addon8", ".textarea-4", "data4");
temp("#button-addon9", ".textarea-5", "data5");

var textbox = $(".textBox");

for (var i = 0; i < textbox.length; i++) {
    var textArea = $(textbox[i]);
    let textboxhour = textArea.attr("id");
    let currenthour = NowMoment.format("H");
    if (currenthour > parseInt(textboxhour)) {
        textArea.addClass("past");
    } else if (currenthour == parseInt(textboxhour)) {
        textArea.addClass("present");
    };
    if (currenthour < parseInt(textboxhour)) {
        textArea.addClass("future");
    };
};