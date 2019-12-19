$(document).ready(function(){
    

var now = moment();
var date = now.format('MMMM Do YYYY, h:mm:ss a');
console.log(date);

var hour = now.format('HH')



// var hour = 13
var container_e = $(".container");
var jumbotron_e = $(".jumbotron")
var current_day_e = $("#currentDay");
var num = 0

load_data();
get_time();
create_containers();
// create_date(current_day_e);

// function create_date(current_day_e){
//     console.log("time")
//     date = now.format('MMMM Do YYYY, h:mm:ss a');
//     current_day_e.text(date);
//     jumbotron_e.append(current_day_e);
    
//     // var timerInterval = setInterval(function() {

// }
// setInterval(create_date(current_day_e), 1000);


// var update = function() {
//     // document.getElementById("datetime")
//     .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
// }
// setInterval(update, 1000);

// function setTime() {
//     var timerInterval = setInterval(function() {
//     window.timerInterval = timerInterval
//     // secondsLeft--;
//     // time_l_e.textContent = "Time: " + secondsLeft;

//   }, 1000);
// }

// $('#clock').fitText(1.3);

function update() {
    // console.log("time")
    // date = now.format('MMMM Do YYYY, h:mm:ss a');
    // current_day_e.text(date);
    // jumbotron_e.append(current_day_e);
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
        console.log(hour)
    }
    else {
        hour = now.format('H')
        // var hour = "13"
        console.log(hour)
    }
    hour = parseInt(hour)

}




function create_containers() {
    //Create row container
    var row_container_e = $("<div>");
    create_row_container(row_container_e)
    for (var i = 9; i < 18; i++){
        var time = i
        //Create row div
        var row_e = $("<div>");
        create_div(row_container_e, row_e);
        // //Create Time label
        var label_e = $("<label>");
        create_label(label_e, row_e, time);
        //Add 1 to num
        num++
        //Create Text Area  
        var textarea_e = $("<textarea>");
        create_textarea(textarea_e, num, row_e, time);
        //Create Save Button
        var save_button_e = $("<button>");
        create_buttons(save_button_e, num, row_e);
        //Create Save Icon
        var save_icon_e = $("<i>");
        create_icon(save_icon_e, save_button_e);
    }
}
var daily_data = {}
function save_data(){
    
    var button_id = this.id
    // console.log(button_id)
    var text_i = "text" + button_id.substring(6)
    text_id = "#" + text_i
    // console.log(text_id)
    var textarea_id = $(text_id);
    // console.log(textarea_id)
    var text_value = textarea_id.val();
    load_data();
    // console.log(value)
    daily_data[text_i] = text_value
    console.log(daily_data)
    
    // localStorage.setItem(button_id, text_value);
    localStorage.setItem("day_data", JSON.stringify(daily_data));
    
}

function load_data(){
    
    if (localStorage.getItem("day_data") === null) {
        console.log("is not Storage")
    }
    else if (localStorage.getItem("day_data") !== null) {
        console.log("is Storage")
        var daily_data = JSON.parse(localStorage.getItem("day_data"));
        // console.log(daily_data)
        for (var i = 1; i < 10; i++){
            // console.log(i)
            var data_get = "text_" + i
            // console.log(data_get)
            // console.log(daily_data.data_get)


        }
    }
}



// save_icon_e.attr("class", "far fa-save");
        // save_icon_e.attr("style", "font-size: 40px");
        // save_button_e.append(save_icon_e);
        // var daily_data = {}
        // if (localStorage.getItem("day_data") === null) { //If there isnt anything in storage
        //     console.log("is not Storage")
        //     var initials_to_save = answer_i_e.value;
        //     console.log(initials_to_save)
        //     daily_data[initials_to_save] = score
        //     console.log(daily_data)
        //     localStorage.setItem("scores", JSON.stringify(daily_data));
        // }
        
        // else if (localStorage.getItem("day_data") !== null) { //If there is something in storage
        //     console.log("is Storage")
        //     var initials_to_save = answer_i_e.value;
        //     console.log(initials_to_save)
        //     var daily_data = JSON.parse(localStorage.getItem("scores"));
        //     console.log(daily_data)
        //     daily_data[initials_to_save] = score
        //     console.log(daily_data)
        //     localStorage.setItem("scores", JSON.stringify(daily_data));




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

function create_textarea(textarea_e, num, row_e, time){
    if (time === hour){
        textarea_e.attr("class", " hour present col-md-10");
    }
    else if(time < hour){
        textarea_e.attr("class", " hour past col-md-10");
    }
    else if(time > hour){
        textarea_e.attr("class", " hour future col-md-10");
    }
    textarea_e.attr("style", "height: 100%; resize: none; color: black;");
    textarea_e.attr("id", "text_" + num);
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






$(".save_btn").on("click", save_data)



})


// save_icon_e.attr("class", "far fa-save");
        // save_icon_e.attr("style", "font-size: 40px");
        // save_button_e.append(save_icon_e);
        // var daily_data = {}
        // if (localStorage.getItem("day_data") === null) { //If there isnt anything in storage
        //     console.log("is not Storage")
        //     var initials_to_save = answer_i_e.value;
        //     console.log(initials_to_save)
        //     daily_data[initials_to_save] = score
        //     console.log(daily_data)
        //     localStorage.setItem("scores", JSON.stringify(daily_data));
        // }
        
        // else if (localStorage.getItem("day_data") !== null) { //If there is something in storage
        //     console.log("is Storage")
        //     var initials_to_save = answer_i_e.value;
        //     console.log(initials_to_save)
        //     var daily_data = JSON.parse(localStorage.getItem("scores"));
        //     console.log(daily_data)
        //     daily_data[initials_to_save] = score
        //     console.log(daily_data)
        //     localStorage.setItem("scores", JSON.stringify(daily_data));

// $("button").on("click", function() {




// //Submits highscore to be stored in local storage and displayed on highscores page
// function submit_highscore() {
//     var day_data = {}
//     if (localStorage.getItem("scores") === null) { //If there isnt anything in storage
//         console.log("is not Storage")
//         var initials_to_save = answer_i_e.value;
//         console.log(initials_to_save)
//         day_data[initials_to_save] = score
//         console.log(day_data)
//         localStorage.setItem("scores", JSON.stringify(day_data));
//     }
    
//     else if (localStorage.getItem("scores") !== null) { //If there is something in storage
//         console.log("is Storage")
//         var initials_to_save = answer_i_e.value;
//         console.log(initials_to_save)
//         var day_data = JSON.parse(localStorage.getItem("scores"));
//         console.log(day_data)
//         day_data[initials_to_save] = score
//         console.log(day_data)
//         localStorage.setItem("scores", JSON.stringify(day_data));
//     }
//     populate_list(day_data);
// }

// function populate_list(a) {
//     $("#saved_highscores_ul").empty();
//     var highscore_length = Object.keys(a).length
//     var keys = Object.keys(a);
//     var values = Object.values(a);
//     console.log(keys)
//     console.log(values)
//     for (var i = 0; i < highscore_length; i++) {
//         var user_name = keys[i];
//         var user_score = values[i];
//         var num = i + 2
//         var user_data = (i + 1) + ". " + user_name.toUpperCase() + " - " + user_score
//         var li = document.createElement("li");
//         li.textContent = user_data;
//         li.setAttribute("data-index", i);
//         li.setAttribute("style", "background-color: rgb(1, 10, 49); padding: 5px; border: 1px solid rgb(1, 12, 49); color: white; border-radius: 10px; margin-bottom: 7px;");
//         saved_highscores_ul_e.setAttribute("style", "display: flex;"); 
//         saved_highscores_ul_e.appendChild(li);
//     }
//     high_scores();
// }