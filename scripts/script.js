var now = moment();


// console.log(now.format('h:mm:ss a'))

var hour = now.format('HH')
var minute = now.format('mm')
// var second = now.format('ss')

// console.log(hour)

var hour = 13

var num_array = [9, 10, 11, 12, 13, 14, 15, 16, 17]


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


var row_container_e = $("<div>");
var row_e = $("<div>");


function create_containers() {
    // var time_am = 8
    // var time_pm = 0
    //Create Row Div
    var row_container_e = $("<div>");
    row_container_e.attr("class", "row");
    row_container_e.attr("style", "height: 100%;");
    
    container_e.append(row_container_e);
    for (var i = 0; i < 9; i++){
        var time = num_array[i]
        
        
        //Create Each row
        var row_e = $("<div>");
        row_e.attr("class", "col-md-12");
        row_e.attr("style", "display: flex;");
        row_container_e.append(row_e);

        //Create Time label
        var label_e = $("<label>");
        if (time < 13){
            // time_am++
            console.log(time)
            label_e.text(time + "AM");
        }
        else {
            // time++
            var time_24 = time - 12
            console.log(time_24)
            label_e.text(time_24 + "PM");
        }
        
        label_e.attr("class", "hour col-md-2");
        label_e.attr("style", "height: 100%; padding-left: 140px;");
        row_e.append(label_e);

        // //Create Text Area
        // var textarea_e = $("<textarea>");
        // textarea_e.attr("class", "description hour present col-md-8");
        // textarea_e.attr("style", "height: 100%;");
        // row_e.append(textarea_e);

        if (time === hour){
            //Create Text Area
            var textarea_e = $("<textarea>");
            textarea_e.attr("class", " hour present col-md-8");
            textarea_e.attr("style", "height: 100%;");
            row_e.append(textarea_e);
        }
        else if(time < hour){
            //Create Text Area
            var textarea_e = $("<textarea>");
            textarea_e.attr("class", " hour past col-md-8");
            textarea_e.attr("style", "height: 100%;");
            row_e.append(textarea_e);
        }
        else if(time > hour){
            //Create Text Area
            var textarea_e = $("<textarea>");
            textarea_e.attr("class", " hour future col-md-8");
            textarea_e.attr("style", "height: 100%;");
            row_e.append(textarea_e);
        }
        // else if (time > 1) {
        //     //Create Text Area
        //     var textarea_e = $("<textarea>");
        //     textarea_e.attr("class", "description hour future col-md-8");
        //     textarea_e.attr("style", "height: 100%;");
        //     row_e.append(textarea_e);

        // }




        //Create Save Button
        var save_button_e = $("<button>");
        save_button_e.attr("class", "saveBtn hour col-md-2");
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





// function create_containers() {
//     var time_am = 8
//     var time_pm = 0
//     //Create Row Div
//     var row_container_e = $("<div>");
//     row_container_e.attr("class", "row");
//     row_container_e.attr("style", "height: 100%;");
    
//     container_e.append(row_container_e);
//     for (var i = 0; i < 9; i++){
        
//         //Create Each row
//         var row_e = $("<div>");
//         row_e.attr("class", "col-md-12");
//         row_e.attr("style", "display: flex;");
//         row_container_e.append(row_e);

//         //Create Time label
//         var label_e = $("<label>");
//         if (time_am < 12){
//             time_am++
//             label_e.text(time_am + "AM");
//         }
//         else {
//             time_pm++
//             label_e.text(time_pm + "PM");
//         }
        
//         label_e.attr("class", "hour col-md-2");
//         label_e.attr("style", "height: 100%; padding-left: 140px;");
//         row_e.append(label_e);

//         // //Create Text Area
//         // var textarea_e = $("<textarea>");
//         // textarea_e.attr("class", "description hour present col-md-8");
//         // textarea_e.attr("style", "height: 100%;");
//         // row_e.append(textarea_e);

//         if (time_am === hour || time_pm === hour){
//             //Create Text Area
//             var textarea_e = $("<textarea>");
//             textarea_e.attr("class", "description hour present col-md-8");
//             textarea_e.attr("style", "height: 100%;");
//             row_e.append(textarea_e);
//         }
//         else if(time_am < hour || time_pm < hour){
//             //Create Text Area
//             var textarea_e = $("<textarea>");
//             textarea_e.attr("class", "description hour past col-md-8");
//             textarea_e.attr("style", "height: 100%;");
//             row_e.append(textarea_e);
//         }
//         else if(time_am > hour || time_pm > hour){
//             //Create Text Area
//             var textarea_e = $("<textarea>");
//             textarea_e.attr("class", "description hour future col-md-8");
//             textarea_e.attr("style", "height: 100%;");
//             row_e.append(textarea_e);
//         }



//         //Create Save Button
//         var save_button_e = $("<button>");
//         save_button_e.attr("class", "saveBtn hour col-md-2");
//         save_button_e.attr("style", "height: 100%;");
//         row_e.append(save_button_e);

//         //Create Save Icon
//         var save_icon_e = $("<i>");
//         save_icon_e.attr("class", "far fa-save");
//         save_icon_e.attr("style", "font-size: 40px");
//         save_button_e.append(save_icon_e);


//     }

// }

// create_containers();