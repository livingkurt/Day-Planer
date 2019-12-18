var now = moment();


console.log(now.format('MMMM Do YYYY, h:mm:ss a'))


var body_e = $("body");
var container_e = $(".container");
// var textarea_e = $("textarea");
var jumbotron_e = $(".jumbotron");
var description_e = $(".description");
var time_block_e = $(".time-block");
var row_e = $(".row");
var hour_e = $(".hour");
var past_e = $(".past");
var present_e = $(".present");
var future_e = $(".future");
var saveBtn_e = $(".saveBtn");
var present_e = $(".present");


function create_containers() {
    var time_am = 8
    var time_pm = 0
    //Create Row Div
    var row_container_e = $("<div>");
    row_container_e.attr("class", "row");
    container_e.append(row_container_e);
    for (var i = 0; i < 9; i++){
        
        //Create Each row
        var row_e = $("<div>");
        row_e.attr("class", "col-md-12");
        row_container_e.append(row_e);

        //Create Time label
        var label_e = $("<label>");
        if (time_am < 12){
            time_am++
            label_e.text(time_am + "AM");
        }
        else {
            time_pm++
            label_e.text(time_pm + "PM");
        }
        label_e.attr("class", "col-md-2");
        row_e.append(label_e);

        //Create Text Area
        var textarea_e = $("<textarea>");
        textarea_e.text("Daily Tasks");
        textarea_e.attr("class", "col-md-10");
        row_e.append(textarea_e);

    }

}

create_containers();


