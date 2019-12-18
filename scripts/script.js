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
    row_container_e.attr("style", "height: 100%;");
    
    container_e.append(row_container_e);
    for (var i = 0; i < 9; i++){
        
        //Create Each row
        var row_e = $("<div>");
        row_e.attr("class", "col-md-12");
        row_e.attr("style", "display: flex;");
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
        label_e.attr("class", "hour col-md-2");

        // label_e.attr("style", "top: -50px; ");
        label_e.attr("style", "height: 100%;");
        row_e.append(label_e);

        //Create Text Area
        var textarea_e = $("<textarea>");
        // textarea_e.text("Daily Tasks");

        textarea_e.attr("class", "description hour present col-md-8");
        textarea_e.attr("placeholder", "Daily Task");
        textarea_e.attr("style", "height: 100%;");
        row_e.append(textarea_e);

        //Create Save Button
        var save_button_e = $("<button>");
        // save_button_e.text("Daily Tasks");
        save_button_e.attr("class", "saveBtn hour col-md-2");
        save_button_e.attr("style", "height: 100%;");
        // save_button_e.attr("style", "height: 69px; top: -3px;");
        
        row_e.append(save_button_e);

        //Create Save Icon
        var save_icon_e = $("<i>");
        // save_button_e.text("Daily Tasks");
        save_icon_e.attr("class", "far fa-save");
        save_icon_e.attr("style", "font-size: 40px");
        // save_button_e.attr("style", "height: 69px; top: -3px;");
        
        save_button_e.append(save_icon_e);


    }

}

create_containers();


function create_row_div() {
    
}


