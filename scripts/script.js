$(document).ready(function(){
    

var now = moment();
var date = now.format('MMMM Do YYYY, h:mm:ss a');
console.log(date);

var hour = now.format('HH')



// var hour = 13
var container_e = $(".container");
var jumbotron_e = $(".jumbotron")
var current_day_e = $("#currentDay");


var clear_button_e = $("<button>");
clear_button_e.text("Clear Planner")
jumbotron_e.append(clear_button_e);



current_day_e.html(moment().format('MMMM Do, YYYY H:mm:ss a'));
var num = 0

var daily_data = {"text_1": "", "text_2": "", "text_3": "", "text_4": "", "text_5": "", "text_6": "", "text_7": "", "text_8": "", "text_9": ""}

// var daily_data = {"text_1": "", "text_2": "", "text_3": "", "text_4": "", "text_5": "", "text_6": "", "text_7": "", "text_8": "", "text_9": ""}
var stored_daily_data = JSON.parse(localStorage.getItem("day_data"));

// If todos were retrieved from localStorage, update the todos array to it
if (stored_daily_data !== null) {
    daily_data = stored_daily_data;
}

// console.log("is Storage")
// var daily_data = JSON.parse(localStorage.getItem("day_data"));
console.log(daily_data)
// var text = "text_1"
// console.log(daily_data.text)
var data_length = Object.keys(daily_data).length
var key = Object.keys(daily_data);
var values = Object.values(daily_data);


var first = $("#text_1")
console.log(key)
console.log(values)


get_time();
create_containers();


function update() {
    current_day_e.html(moment().format('MMMM Do, YYYY H:mm:ss a'));
}
setInterval(update, 1000);




function get_time(){
    // console.log(hour)
    // console.log(hour.substring(1))
    // var hour = "13"
    var hour_format = parseInt(hour.substring(1));
    // console.log(hour_format)
    if (hour_format === "0"){
        hour = now.format('HH')
        // var hour = "13"
        // console.log(hour)
    }
    else {
        hour = now.format('H')
        // var hour = "13"
        // console.log(hour)
    }
    hour = parseInt(hour)

}

function create_containers() {
    //Create row container
    var row_container_e = $("<div>");
    var new_time = -1;
    create_row_container(row_container_e)
    for (var i = 9; i < 18; i++){
        var time = i
        
        //Create row div
        new_time++
        var row_e = $("<div>");
        create_div(row_container_e, row_e);
        // //Create Time label
        var label_e = $("<label>");
        create_label(label_e, row_e, time);
        //Add 1 to num
        num++
        //Create Text Area  
        var textarea_e = $("<textarea>");
        create_textarea(textarea_e, num, row_e, time, new_time);
        //Create Save Button
        var save_button_e = $("<button>");
        create_buttons(save_button_e, num, row_e);
        //Create Save Icon
        var save_icon_e = $("<i>");
        create_icon(save_icon_e, save_button_e);
    }
}



$(".save_btn").on("click", save_data)

function save_data(){
    
    var button_id = this.id
    // console.log(button_id)
    var text_i = "text" + button_id.substring(6)
    text_id = "#" + text_i
    // console.log(text_id)
    var textarea_id = $(text_id);
    // console.log(textarea_id)
    var text_value = textarea_id.val();
    // load_data();
    // console.log(value)
    daily_data[text_i] = text_value
    console.log(daily_data)
    
    // localStorage.setItem(button_id, text_value);
    localStorage.setItem("day_data", JSON.stringify(daily_data));
    
}


function create_row_container(row_container_e){
    //Create Row Div    
    
    row_container_e.attr("class", "row");
    row_container_e.attr("style", "height: 100%;");
    container_e.append(row_container_e);
}

function create_div(row_container_e, row_e){
    //Create Each row
    row_e.attr("class", "col-md-12");
    row_e.attr("style", "display: flex;");
    row_container_e.append(row_e);
}

function create_label(label_e, row_e, time){
    //Create Time label
    if (time < 13){
        // console.log(time)
        label_e.text(time + "AM");
    }
    else {
        var time_24 = time - 12
        // console.log(time_24)
        label_e.text(time_24 + "PM");
    }
    label_e.attr("class", "hour col-md-1 col-sm-1");
    label_e.attr("style", "height: 100%; padding-left: 36px; min-width: 110px; padding-right: 33px;");
    row_e.append(label_e);
}

function create_textarea(textarea_e, num, row_e, time, new_time){
    if (time === hour){
        textarea_e.attr("class", "hour present col-md-10 text_areas");
    }
    else if(time < hour){
        textarea_e.attr("class", "hour past col-md-10 text_areas");
    }
    else if(time > hour){
        textarea_e.attr("class", "hour future col-md-10 text_areas");
    }
    // console.log(time)
    
    console.log(new_time)
    var text_boxes = key[new_time];
    var tasks = values[new_time];
    // console.log(tasks)
    // text_boxes = $("'#" + keys[i] + "'")
    // console.log(String(text_boxes))
    // console.log(tasks)
    
    // var num = i + 2
    // var user_data = (i + 1) + ". " + user_name.toUpperCase() + " - " + user_score
    // var li = document.createElement("li");
    // text_boxes.textContent = tasks;
    // $(text_boxes).text(tasks)
    textarea_e.attr("style", "height: 100%; resize: none; color: black;");
    textarea_e.attr("id", "text_" + num);
    textarea_e.text(tasks);
    row_e.append(textarea_e);

}

function create_buttons(save_button_e, num, row_e){
    save_button_e.attr("class", "saveBtn hour col-md-1 col-md-1 save_btn");
    save_button_e.attr("id", "button_" + num);
    save_button_e.attr("style", "height: 100%;");
    row_e.append(save_button_e);

}

function create_icon(save_icon_e, save_button_e){
    save_icon_e.attr("class", "far fa-save");
    save_icon_e.attr("style", "font-size: 40px");
    save_button_e.append(save_icon_e);
}

function clear_planer() {
    var text_areas_e = $(".text_areas");
    localStorage.clear();
    text_areas_e.text("");

    
}

clear_button_e.on("click",clear_planer)






})