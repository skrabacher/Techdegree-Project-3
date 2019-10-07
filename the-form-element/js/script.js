// ----------------------------------
// Sarah Krabacher
// FSJS TechDegree - Team Treehouse
// Project 3
// ----------------------------------

/*PUT THE FIRST FIELD IN THE 'FOCUS' STATE
    ● Use jQuery to select the 'Name' input element and place focus on it. */

$(document).ready(function() { //ready method runs function as soon as page loads
    $('#name').focus(); //when page loads, cursor will automatically focus on input element with name id
});

/* ADD AN "OTHER" OPTION TO THE JOB ROLE SECTION
This is the one and only section of the project where you will have to make changes directly in
the `index.html` file.
    ● In the `index.html` file, just below the ‘Job Role’ `select` element, create a text input
element, set its `name` attribute to “job_role_other”, set its `placeholder` attribute to
“Your Job Role”, and give it an `id` attribute of “other-title” so you can easily target this
element in your JS file.
    ● In your JavaScript file, target the ‘Other’ input field, and hide it initially, so that it will
display if JavaScript is disabled, but be hidden initially with JS. */

$("#other-title").hide(); //hides the text input element for other job role in the html file

$("#title").on("change", function() {  // change event listener - everytime #title value is changed
    if($('#title').val() === "other") {   //if user selects other, other job role input box will show
        $('#other-title').show();
    } else {                              //if user selects anything else, input box will remain hidden
        $('#other-title').hide();
    }
    console.log($('#title').val()); /// test to see which drop down item is selected
});


/* T-SHIRT SECTION
The goal for the t-shirt section is to filter the available "Color" options by the selected theme in
the "Design" field. Doing this ensures that the user cannot select an invalid combination of
values for the "Design" and "Color" fields.
When the form is initially loaded, we need to update the "Design" and "Color" fields so that it's
clear to the user that they need to select a theme before selecting a color. Use jQuery to:
    ● Hide the “Select Theme” `option` element in the “Design” menu. */
        // FIRST TRY CODE is the two lines below, they work but the line below those two is much more clean and succinct (no uneccesary classes)
        // $("#design option:first").attr('id','first-option'); //selects first option in design dropdown menu and assigns ID of first-option
        // $("#first-option").hide(); // hides elements with id of 'first-option' in this case just the design menu's first option
    $("#design option:first").hide(); // hides first option in the design drop down menu "select theme"
    /*
    ● Update the “Color” field to read “Please select a T-shirt theme”. */
    $("#color").prepend( "<option selected>Please select a T-shirt theme</option>" ); //adds new menu option to color and makes the option the default selection by adding "selected" inside the opening option tag
    // $("#color option:selected").attr(value="none"); //***NEED TO FIX***TRYING TO ASSIGN VALUE TO THIS OPTION SO THAT IT CAN BE REMOVED LATER WHEN THEME IS SELECTED***
    $("#color option:first").hide();// then hides the first option in the color drop down menu so that it only shows as the title of the drop down menu
    /*
    ● Hide the colors in the “Color” drop down menu.*/
    //FIRST TRY CODE is the first line below, second line below is more succinct and SPECIFIC. it uses the treehouse descendant selection method
    // $("#color").find("option").hide(); // uses find method to get all elements with color id then takes only the option elements with that color id and hides them (them being: all t shirt color drop down menu options)
    $("#color option").hide(); // selects any option elements that are descendants of elements with the color id and hides them (them being: all t shirt color drop down menu options) 
    /*
    ● NOTE: Be sure to check out the helpful links in the second section of this Study Guide if
you’re unsure of how to accomplish these steps.
Then, when one of the two themes is selected, only the appropriate colors should show in the
“Color” drop down menu, and the “Color” field should update to the first available color. You’ll
use a `change` event listener on the “Design” menu `select` element to listen for changes. And
inside the event listener, you’ll use a conditional to determine what to hide, show and update.

●   If “js puns” is selected, hide the three “heart js” option elements in the “Color” drop
down menu, show the three “js puns” option elements, and update the “Color” field to
the first available color. */

$("#design").on('change', function(){ 
    console.log("in change event handler for t shirt design");
    
    if($('#design').val() === "js puns") { //if statement for when js puns is selected > only shows the t shirts with the js puns options
        console.log("js puns selected");
        $("#color option").show(); // shows all of the options for the color select menu
        //$("#color [value='none']").remove(); //***NEED TO FIX***TRYING TO REMOVE PLEASE SELECT THEME OPTION BECAUSE THE THEME HAS BEEN SELECTED
        $("#color [value='tomato']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='steelblue']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='dimgrey']").hide(); // hides t shirt with the value listed inside brackets
    } 

/*
●   If “heart js” is selected, hide the three “js puns” option elements in the “Color” drop
down menu, show the three “heart js” option elements, and update the “Color” field to
the first available color. */ 
    else if ($('#design').val() === "heart js") { //if statement for when heart js is selected > only shows the t shirts with the heart js options
        console.log("heart js selected"); 
        $("#color option").show(); // shows all of the options for the color select menu
        $("#color option:first").hide();// then hides the first option in the color drop down menu so that it only shows as the title of the drop down menu
        $("#color [value='cornflowerblue']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='darkslategrey']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='gold']").hide(); // hides t shirt with the value listed inside brackets
    }
});

