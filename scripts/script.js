$(document).ready(function(){
    
    //Global Variables

    //Elements
    var container_e = $(".container");
    var jumbotron_e = $(".jumbotron")
    var current_day_e = $("#currentDay");
    var row_container_e = $("<div>");

    //Create Buttons
    var save_all_button_e = $("<button>");
    var clear_button_e = $("<button>");

    //Time
    var now = moment();
    var date = now.format('MMMM Do YYYY, h:mm:ss a');
    var hour = now.format('HH')
    current_day_e.html(moment().format('MMMM Do, YYYY h:mm:ss a'));

    //Inital num
    var num = 0;
    //Data storage object
    var daily_data = {"text_1": "", "text_2": "", "text_3": "", "text_4": "", "text_5": "", "text_6": "", "text_7": "", "text_8": "", "text_9": ""}
    
    //Load Data from local storage
    var stored_daily_data = JSON.parse(localStorage.getItem("day_data"));
    //If there storage is then use the local storage and not the default
    if (stored_daily_data !== null) {
        daily_data = stored_daily_data;
        console.log(daily_data)
    }

    //Separate the local storage into 2 arrays
    var key = Object.keys(daily_data);
    var values = Object.values(daily_data);

    //Run Initial Functions
    //Get info from moment.js
    get_time();
    //Create all of the elements below the jumbotron
    create_elements();

    //Refresh time every second
    function update() {
        current_day_e.html(moment().format('MMMM Do, YYYY h:mm:ss a'));
    }
    //Repeat the update function every second
    setInterval(update, 1000);

    //Remove the 0 on the front of the time when it is only a single digit hour
    function get_time(){
        //Get just the first number
        var hour_format = parseInt(hour.substring(1));
        //If it is a 0 then use the 2 numbers
        if (hour_format === "0"){
            hour = now.format('HH')
        }
        else {
            hour = now.format('H')
        }
        hour = parseInt(hour)

    }
    
    //Create most elements
    function create_elements() {
        //Declare a variable
        var new_time = -1;

        //Create row container
        save_all_button_e.text("Save All")
        jumbotron_e.append(save_all_button_e);

        //Create the clear button
        clear_button_e.text("Clear Planner")
        jumbotron_e.append(clear_button_e);
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


    //Save Data with individual buttons
    function save_data(){
        //Get the button that was clicked
        var button_id = this.id
        //Associate the button with the textarea id
        var text_i = "text" + button_id.substring(6)
        //Add a # to the text
        text_id = "#" + text_i
        // Assign the jQuery associated textarea to a variable
        var textarea_id = $(text_id);
        // Get the value from inside the textarea
        var text_value = textarea_id.val();
        // Add data to object
        daily_data[text_i] = text_value
        console.log(daily_data)
        // Save data to local storage
        localStorage.setItem("day_data", JSON.stringify(daily_data));
        
    }
    //Save all data
    function save_all(){
        // Loop through all of the textareas to save all of the data at once
        for (var i = 1; i < 10; i++){
            //Associate the button with the textarea id
            var text_i = "text_" + i
            console.log(text_i)
             //Add a # to the text
            text_id = "#" + text_i
            // Assign the jQuery associated textarea to a variable
            var textarea_id = $(text_id);
            console.log(textarea_id)
            // Get the value from inside the textarea
            var text_value = textarea_id.val();
            // Add data to object
            daily_data[text_i] = text_value
            console.log(daily_data)
        }
        // Save data to local storage
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
        // For the Present Hour
        if (time === hour){
            textarea_e.attr("class", "hour present col-md-10 text_areas");
        }
        // For the Past Hour
        else if(time < hour){
            textarea_e.attr("class", "hour past col-md-10 text_areas");
        }
        // For the Future hour
        else if(time > hour){
            textarea_e.attr("class", "hour future col-md-10 text_areas");
        }
        console.log(new_time)
        // Get values from storage ready to input onto the textarea
        var tasks = values[new_time];
        textarea_e.attr("style", "height: 100%; resize: none; color: black;");
        textarea_e.attr("id", "text_" + num);
        // Put the local storage data into the textarea
        textarea_e.text(tasks);
        row_e.append(textarea_e);

    }

    function create_buttons(save_button_e, num, row_e){
        // Create all save button
        save_button_e.attr("class", "saveBtn hour col-md-1 col-md-1 save_btn");
        save_button_e.attr("id", "button_" + num);
        save_button_e.attr("style", "height: 100%;");
        row_e.append(save_button_e);

    }

    function create_icon(save_icon_e, save_button_e){
        // Create icons on buttons
        save_icon_e.attr("class", "far fa-save");
        save_icon_e.attr("style", "font-size: 40px");
        save_button_e.append(save_icon_e);
    }

    function clear_planner() {
        // Clear all Textareas and local storage
        var text_areas_e = $(".text_areas");
        //Set text areas to a empty string
        text_areas_e.val('')
        //Clear local storage
        localStorage.clear();
        console.log("clear storage")
        //Object back to default
        var daily_data = {"text_1": "", "text_2": "", "text_3": "", "text_4": "", "text_5": "", "text_6": "", "text_7": "", "text_8": "", "text_9": ""}
        console.log(daily_data)

        
    }


    // Event Handlers
    
    // Click on the clear planner button
    clear_button_e.on("click",clear_planner)
    // Click on the save all button
    save_all_button_e.on("click",save_all)
    // Click on all of the save buttons
    $(".save_btn").on("click", save_data)



})