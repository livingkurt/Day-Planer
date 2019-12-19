var now = moment();


// console.log(now.format('h:mm:ss a'))

var hour = now.format('HH')
// var minute = now.format('mm')
// var second = now.format('ss')

// console.log(hour)

var hour = 13
var container_e = $(".container");


// var body_e = $("body");

// var textarea_e = $("textarea");
// var jumbotron_e = $(".jumbotron");
// var description_e = $(".description");
// var time_block_e = $(".time-block");
// var row_e = $(".row");
// var hour_e = $(".hour");
// var past_e = $(".past");
// var present_e = $(".present");
// var future_e = $(".future");
// var saveBtn_e = $(".saveBtn");
// var present_e = $(".present");


// var row_container_e = $("<div>");
// var row_e = $("<div>");

var day_data = {}


function create_containers() {
    //Create Row Div
    var row_container_e = $("<div>");
    row_container_e.attr("class", "row");
    row_container_e.attr("style", "height: 100%;");
    
    container_e.append(row_container_e);
    for (var i = 9; i < 18; i++){
        var time = i
        
        //Create Each row
        var row_e = $("<div>");
        row_e.attr("class", "col-md-12");
        row_e.attr("style", "display: flex;");
        row_container_e.append(row_e);

        //Create Time label
        var label_e = $("<label>");
        if (time < 13){
            console.log(time)
            label_e.text(time + "AM");
        }
        else {
            var time_24 = time - 12
            console.log(time_24)
            label_e.text(time_24 + "PM");
        }
        label_e.attr("class", "hour col-md-1 col-sm-1");
        label_e.attr("style", "height: 100%; padding-left: 36px; min-width: 110px; padding-right: 33px;");

        //Create Text Area  
        row_e.append(label_e);
        if (time === hour){
            var textarea_e = $("<textarea>");
            textarea_e.attr("class", " hour present col-md-10");
        }
        else if(time < hour){
            var textarea_e = $("<textarea>");
            textarea_e.attr("class", " hour past col-md-10");
        }
        else if(time > hour){
            var textarea_e = $("<textarea>");
            textarea_e.attr("class", " hour future col-md-10");
        }
        textarea_e.attr("style", "height: 100%; resize: none; color: black;");
        row_e.append(textarea_e);

        //Create Save Button
        var save_button_e = $("<button>");
        save_button_e.attr("class", "saveBtn hour col-md-1 col-md-1");
        save_button_e.attr("style", "height: 100%;");
        row_e.append(save_button_e);

        //Create Save Icon
        var save_icon_e = $("<i>");
        save_icon_e.attr("class", "far fa-save");
        save_icon_e.attr("style", "font-size: 40px");
        save_button_e.append(save_icon_e);
    }

}

create_containers();



function view_highscores(){
    
    
    if (localStorage.getItem("scores") === null) { //If there isnt anything in storage
        console.log("is not Storage")
        saved_highscores_ul_e.setAttribute("style", "display: none;");
        empty_highscores_table_l_e.textContent = "Highscores will populate here when you complete the quiz";
        empty_highscores_table_l_e.setAttribute("style", "display: flex;");
        empty_highscores_table_l_e.setAttribute("style", "display: flex; background-color: rgb(1, 10, 49); padding: 5px; border: 1px solid rgb(1, 12, 49); margin: 16px 0px; color: white; border-radius: 10px;");
    }
    
    else if (localStorage.getItem("scores") !== null) { //If there is something in storage
        console.log("is Storage")
        var initials_to_save = answer_i_e.value;
        console.log(initials_to_save)
        var highscore_saved_list = JSON.parse(localStorage.getItem("scores"));
        console.log(highscore_saved_list)
    }
    populate_list(highscore_saved_list);
}

//Submits highscore to be stored in local storage and displayed on highscores page
function submit_highscore() {
    //Check if there is anything in storage
    var submit_au_e = document.createElement("audio");
    submit_au_e.setAttribute("src", "assets/audio/submit.mp3");
    submit_au_e.play();
    var highscore_saved_list = {}
    if (localStorage.getItem("scores") === null) { //If there isnt anything in storage
        console.log("is not Storage")
        var initials_to_save = answer_i_e.value;
        console.log(initials_to_save)
            highscore_saved_list[initials_to_save] = score
            console.log(highscore_saved_list)
            localStorage.setItem("scores", JSON.stringify(highscore_saved_list));
    }
    
    else if (localStorage.getItem("scores") !== null) { //If there is something in storage
        console.log("is Storage")
        var initials_to_save = answer_i_e.value;
        console.log(initials_to_save)
        var highscore_saved_list = JSON.parse(localStorage.getItem("scores"));
        console.log(highscore_saved_list)
        highscore_saved_list[initials_to_save] = score
        console.log(highscore_saved_list)
        localStorage.setItem("scores", JSON.stringify(highscore_saved_list));
    }
    populate_list(highscore_saved_list);
}

function populate_list(a) {
    $("#saved_highscores_ul").empty();
    var highscore_length = Object.keys(a).length
    var keys = Object.keys(a);
    var values = Object.values(a);
    console.log(keys)
    console.log(values)
    for (var i = 0; i < highscore_length; i++) {
        var user_name = keys[i];
        var user_score = values[i];
        var num = i + 2
        var user_data = (i + 1) + ". " + user_name.toUpperCase() + " - " + user_score
        var li = document.createElement("li");
        li.textContent = user_data;
        li.setAttribute("data-index", i);
        li.setAttribute("style", "background-color: rgb(1, 10, 49); padding: 5px; border: 1px solid rgb(1, 12, 49); color: white; border-radius: 10px; margin-bottom: 7px;");
        saved_highscores_ul_e.setAttribute("style", "display: flex;"); 
        saved_highscores_ul_e.appendChild(li);
    }
    high_scores();
}