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
    $("#color option:first").hide();// then hides the first option in the color drop down menu so that it only shows as the title of the drop down menu
    /*
    ● Hide the colors in the “Color” drop down menu.*/
    //FIRST TRY CODE is the first line below, second line below is more succinct and SPECIFIC. it uses the treehouse descendant selection method
    // $("#color").find("option").hide(); // uses find method to get all elements with color id then takes only the option elements with that color id and hides them (them being: all t shirt color drop down menu options)
    $("#color option").hide(); // selects any option elements that are descendants of elements with the color id and hides them (them being: all t shirt color drop down menu options) 
//EXCEEDS ATTEMPT - Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.
    $('div[id="colors-js-puns"]').hide(); //Hides the "Color" label and select menu
            
    // <div id="colors-js-puns" class="">
    //       <label for="color">Color:</label>
    //       <select id="color">
    //         <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
    //         <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
    //         <option value="gold">Gold (JS Puns shirt only)</option> 
    //         <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
    //         <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
    //         <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
    //       </select>
    //     </div>   
    
    
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

$("#design").on('change', function(event){ //change event handler uses selected theme to display only the corresponding color t shirts in the color drop down menu and hides the shirt colors that do not match the user theme selection
    console.log("in change event handler for t shirt design");
    console.log(event);
    console.log(event.target);
    if($('#design').val() === "js puns") { //if statement for when js puns is selected > only shows the t shirts with the js puns options
        console.log("js puns selected");
        $('div[id="colors-js-puns"]').show(); //Shows the "Color" label and select menu **EXCEEDS***
        $("#color option").show(); // shows all of the options for the color select menu
        $("#color option").eq(0).hide();// then hides the first option in the color drop down menu so that it only shows as the title of the drop down menu
        $("#color option").eq(1).prop("selected",true); //updates the color field to show the first available color (cornflower blue, 2nd in index so using numeral 1) using .eq to reference index assumes the index will never change, better to use value property to select
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
        $('div[id="colors-js-puns"]').show(); //Shows the "Color" label and select menu **EXCEEDS***
        $("#color option").show(); // shows all of the options for the color select menu
        $("#color option:first").hide();// then hides the first option in the color drop down menu so that it only shows as the title of the drop down menu
        $("#color [value='tomato']").prop("selected",true); //updates the color field to show the first available color (tomato)
        $("#color [value='cornflowerblue']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='darkslategrey']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='gold']").hide(); // hides t shirt with the value listed inside brackets
    }
});



/* ACTIVITY SECTION
Like many code problems, there are multiple ways to complete this section of the project. One
option would be to simply reference each checkbox input, as well as the cost, and day and time
from each input’s parent `label` element, and store those values in variables, or in an object as
key value pairs. Then, in an event handler that listens for ‘changes’ to the activity section, you
could use a set of conditionals to disable conflicting activities, and add or subtract from the total
cost element you create, depending on whether the checkbox was checked or unchecked.
But a preferred approach would be to come up with a dynamic solution that will work even if
the cost, day or time of the activities were changed in the HTML. To do that, we'll:
    ● Create an element to display the total activity cost
    ● Listen for changes in the Activity section
    ● Create helpful variables to store important values
    ● Update and display the total activity cost
    ● Disable conflicting activities */

    /*Creating an element to display the total activity cost
    Create a DOM element, store it in a global variable and append it to the `.activity` section. You
    can view the elements tab in the Chrome DevTools to check that your element is in the DOM.
    Create a global variable to store total activity cost — initially set to 0 — don't use const since
    you want to update this as needed.*/

let amountDueContainer= "<span><span>"; //dom element created to display total activity cost
$(".activities").append(amountDueContainer); //appended element to the activities section
let activityCost= 0; // global variable for total activity cost

    /*Listening for changes in the activity section
    Add a change event listener to the activity section. Inside the listener, it will be helpful to have
    a variable to reference the DOM `input` element that was just clicked.
        ● NOTE: It is helpful at this point to log out the variable you just created to double check
    that its values is what you expect. Remember, you’ll need to click on the checkboxes in
    the Activity section to run the code in this listener, including your log statements.*/
$("[type=checkbox]").on('change', function(event){ //change event handler for check boxes in activity section
    console.log("in activities change event handler");
    
    let $clickedBox= (event.target); //variable for dom input element that was just clicked
    
    /*Updating and displaying the total activity cost
        Let’s add another helpful variable in the Activity section’s change listener:
            ● Get the `data-cost` attribute value of the clicked element stored in the variable above.*/
    let $dataCost= $($clickedBox).attr('data-cost'); // stores activity cost as the new value of the $clickedBox variable
    
            /*Since you’ll be performing some simple arithmetic with the activity cost, you’ll need to
            make sure the value is a number. There are helpful methods for turning strings into
            numbers, which can be found with a Google search. And the `typeof` operator can be
            used to log out the data type of a value or variable.
            ● NOTE: Again, it’s helpful here to log out the cost variable.*/
    $dataCost= $dataCost.slice(1, 4); //reads the string "$200" as an array and only returns "200" (indexes 1 through 4)
    $dataCost= parseFloat($dataCost); //converts string to a number

        /*Still inside the Activity section’s change listener, you can use an `if/else` statement to check if
        the clicked input element is checked or unchecked. If the input element is checked, add the cost
        of the currently clicked activity to the total cost variable, else subtract the cost.
        Finally, set the text of the total cost element (that you created above) equal to the string ‘Total:
        $’ concatenated with the current value of the total cost variable (that you declared above).*/
    if ($($clickedBox).prop('checked') === true) { // if statement that tests to see if the event target has a property of 'checked'
        activityCost= activityCost + $dataCost; // adds cost of checked activity to total activity cost
    }
    else {
        activityCost= activityCost - $dataCost; // subtracts cost of unchecked activity from total activity cost
    }

    $('.activities span').text('Amount Due: $' + activityCost);// displays and updates total amount due as boxes are checked and unchecked
    // amountDueContainer= $( "<h3>Amount Due: $</h3>" ).append(activityCost); 
    // $(".activities").append(amountDue);


    /*Disabling conflicting activities
    Still inside the Activity section’s change listener, let’s follow the same pattern we used to get
    the cost of the currently clicked activity to get the day and time as well. First, we’ll add another
    helpful variable:
        ● Get the `data-day-and-time` attribute value of the clicked element stored in a variable
    above. NOTE: Now would be a good time to log out these most recent variables to
    make sure they are what you think they are.
        */
    let $clickedDataDayAndTime = $($clickedBox).attr('data-day-and-time');//day and time attribute of clicked box
    console.log($clickedDataDayAndTime);
            /*
    Now you need to accomplish the following tasks:
        ● When an activity is checked, disable any activity that occurs at the same day and time
    (i.e. "conflicting activities") without disabling the activity that was just checked.
        */       
       for (i = 0; i < 7; i++) { //for loop to create indexes numbers to cycle through all checked boxes
        let $currentCheckboxIt= $('input[type="checkbox"]').eq(i); //checkbox at current iteration of the loop.
        let $iteratedName= $($currentCheckboxIt).attr('name');//name attribute at current interation of the loop (allows for side by side comparison in the if statement condition)
        let $clickedName= $($clickedBox).attr('name');//name attribute of clicked box (allows for side by side comparison in the if statement condition)
        
        //if statement below tests 3 conditions. IF 1)scheduled day time are the same, 2)activity name are not the same, 3)the click box is checked
        if (($($currentCheckboxIt).attr('data-day-and-time') === $clickedDataDayAndTime) && ($clickedName != $iteratedName) && ($($clickedBox).prop('checked') === true))  {
            $($currentCheckboxIt).prop("disabled",true); // disables the other activity scheduled at the same time
        } else if (($($currentCheckboxIt).attr('data-day-and-time') === $clickedDataDayAndTime) && ($clickedName != $iteratedName) && ($($clickedBox).prop('checked') === false)) { 
            $($currentCheckboxIt).prop("disabled",false); // changes the activity to enabled
       }
        }   
        
        /*
        ● And when an activity is unchecked, you want to enable any conflicting activities.
    To do this, you’ll need to loop over all the checkbox inputs in the Activity section. It will be
    helpful to create a variable that targets the activity input element at the current iteration of the
    loop. Remember, you do this with bracket notation, using the loop iterator in the brackets.
    Something like this: `input[i]`. Be sure to log out the variable you just created to test its value.
    Now that you’re looping over each activity, and capturing each one in a variable, it’s time to test
    a few conditions. In order to disable or enable an activity in the loop, you need to know two
    things about the activity at the current loop iteration:
        ● First, does the activity occur at the same day and time as the activity that was just
    clicked? We can check this by seeing if the activity in the current loop iteration has a
    `data-day-and-time` attribute that is equal to the `data-day-and-time` attribute of the
    element that was just clicked.
        ● Second, is the activity is different than the activity that was just clicked? We can check
    this by seeing if the activity that was just clicked is not equal to the activity in the
    current loop iteration.
    Both of these conditions should be checked in a single if statement using the `&&` operator.
    If both conditions evaluate to "true", then this activity needs to be disabled or enabled
    depending on whether the clicked activity was checked or unchecked. An `if/else` statement
    will help here:
        ● If the clicked activity was checked, then set the matching activity element's `disabled`
    property to `true`
        ● If the clicked activity was unchecked, then set the matching activity element's `disabled`
    property to `false`.*/
});


/*PAYMENT SECTION
Initially, the credit card section should be selected and displayed in the form, and the other two
payment options should be hidden. The user should be able to change payment options at any
time, but shouldn’t be able to select the “Select Payment Method” option. So you’ll need to
check the currently selected payment option, and hide and show the payment sections in the
form accordingly.
    ● Hide the “Select Payment Method” `option` so it doesn’t show up in the drop down
menu.*/

let paymentSelected = 'select method' // global variable to hold user selected payment method

$('option[value="select method"]').hide();
if ($('#payment').val() === 'select method') { //if statement hides all payment entry/info elements until a payment option is selected
    $('div[id="credit-card"]').hide(); //hides cc input elements
    $('div[id="paypal"]').hide();// hides paypal spiel
    $('div[id="bitcoin"]').hide();//hides bitcoin spiel
}

$("#payment").on('change', function(event){ //change event handler uses selected theme to display only the corresponding color t shirts in the color drop down menu and hides the shirt colors that do not match the user theme selection
    console.log($('#payment').val());
    paymentSelected = $('#payment').val()
    /*● Get the value of the payment select element, and if it’s equal to ‘credit card’, set the
credit card payment section in the form to show, and set the other two options to hide.*/
       if (paymentSelected === 'Credit Card') {
        $('div[id="credit-card"]').show(); //shows cc input elements
        $('div[id="paypal"]').hide();// hides paypal spiel
        $('div[id="bitcoin"]').hide();//hides bitcoin spiel
    } else 
   /*● Repeat the above step with the PayPal and BitCoin options so that the selected
payment is shown and the others are hidden.*/
        if (paymentSelected === 'PayPal') {
            $('div[id="credit-card"]').hide(); //hides cc input elements
            $('div[id="paypal"]').show();// shows paypal spiel
            $('div[id="bitcoin"]').hide();//hides bitcoin spiel
        } else if (paymentSelected === 'Bitcoin') {
            $('div[id="credit-card"]').hide(); //hides cc input elements
            $('div[id="paypal"]').hide();// hides paypal spiel
            $('div[id="bitcoin"]').show();//shows bitcoin spiel
        }
});

/*FORM VALIDATION AND VALIDATION MESSAGES
There are numerous ways to accomplish this part of the project. You could try to cram all the
programming for this section into the submit event listener.
You could try to validate all of the required fields in a single function and then call that function
in a submit listener.
You could separate the validation and validation messages into separate tasks handled
independently of each other. But it's generally a good idea to start with the simplest possible
solution. Here’s an example of a straightforward approach that takes it one step at a time.
There are three sections of the form that are always required: name, email and activities. The
credit section—comprised of three inputs—only needs to be validated if “credit card” is the
selected payment method. To keep things simple, you can create a function to validate each
required section, as well as add and remove a validation error indicator of some sort. Each
required section will need to be tested to see if it meets certain criteria, which are detailed in the
project instructions. If the criteria are not met, the validation function should add a validation
error indication for that field and return false. Else, the function should remove any validation
error indicator and return true.
    ● Create a separate validation function for each of the required form fields or sections
        ○ Name (Name field can't be blank.)
        */
     
    //NAME INPUT VALIDATION & ERROR MESSAGE
        // global variables for all input elements requiring validation
       const nameInput = document.getElementById("name"); // selects the name input element
       const emailInput = document.getElementById("mail"); // selects the email input element
       const activitiesInput = document.getElementsByClassName("activities"); // selects the activities input element ***DRAFT SELECTOR.. not sure it's right***
       
       const creditCardNumberInput = document.getElementById("cc-num"); // selects the credit card number input element
       const zipCodeInput = document.getElementById("zip"); // selects the zip code input elemtent
       const cvvInput = document.getElementById("cvv"); // selects the cvv input element

       let nameBoolean = false
       let emailBoolean = false
    //    let activiesValue = 
       let ccNumBoolean = false
       let zipBoolean = false
       let cvvBoolean = false

       
        function isValidName(name) { // tests to see if name field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
            console.log ('in isValidName function');
            return /^[a-z]+\.?([a-z]+)?\.?\s[a-z]+$/i.test(name); //regex designed to allow names with initials such as J.J. and requires a first and last name
            // return /.+/.test(name); // if field is blank test method will return false else will return true
            // '/^[a-z]+\.?([a-z]+)?\.?\s[a-z]+$/i' <= regex designed to allow names with initials such as J.J. and requires a first and last name
        }
        // $nameErrorMessage creates h3 tag with error message. Appends it above the input field.
        const $nameErrorMessage = "<h3 class='name'>*Please enter your first and last name separated by a space.</h3>"
        $('label[for="name"]').append($nameErrorMessage);
        $('h3[class="name"]').css('color', 'red').css("fontSize", 14).addClass('name'); //adds class & styles the appended error message to be red and smaller than the label
        $('h3[class="name"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
            
        $(nameInput).keyup(function(event){ //event listener for any typing in name input field
            console.log ($(this).val()); //console logs the text the user typed
            nameBoolean= isValidName($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
            console.log(nameBoolean);
            if (nameBoolean === true) {
                console.log ('Name is valid!')
                $('h3[class="name"]').hide();//hide error message
            } else if (nameBoolean === false) {
                console.log ('Name is invalid!')
                $('h3[class="name"]').show(); //show error message
            }
        });


    //EMAIL INPUT VALIDATION & ERROR MESSAGE
        function isValidEmail(mail) { // tests to see if email field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
            console.log('in isValidEmail function');
            return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
        }

        // $emailErrorMessage creates h3 tag with error message. Appends it above the input field.
        const $emailErrorMessage = "<h3 class='email'>*Please enter a valid email address.</h3>"
        $('label[for="mail"]').append($emailErrorMessage);
        $('h3[class="email"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
        $('h3[class="email"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
        
        $(emailInput).keyup(function(event){ //event listener for any typing in email input field
            console.log ($(this).val()); //console logs the text the user typed
            emailBoolean= isValidEmail($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
            console.log(emailBoolean);
            if (emailBoolean === true) {
                console.log ('Email is valid!')
                $('h3[class="email"]').hide();//hide error message
            } else if (emailBoolean === false) {
                console.log ('Email is invalid!')
                $('h3[class="email"]').show(); //show error message
            }
        });

    // ACTIVITIES INPUT VALIDATION & ERROR 
    
// $activitiesErrorMessage creates h3 tag with error message. Appends it to the fieldset
const $activitiesErrorMessage = "<h3 class='activities'>*Please select one or more activities.</h3>"
$('fieldset[class="activities"]').append($activitiesErrorMessage);
$('h3[class="activities"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
$('h3[class="activities"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
    
        $('input[type="checkbox"]').on('change', function(event){ //change event handler runs everytime an activity box is checked or unchecked
            if ($('input[type="checkbox"]:checked').length === 0) { //counts number of boxes that are checked and tests to see if they equal zero
                console.log('show error message');  
                $('h3[class="activities"]').show(); //show error message
            } else if ($('input[type="checkbox"]:checked').length > 0) {
                console.log('submit ok');//show error message
                $('h3[class="activities"]').hide(); //hide error message
            }
        });


    //PAYMENT INPUT VALIDATION & ERROR MESSAGE
       //CARDNUMBER
       function isValidCCNumber(creditCardNumber) { // tests to see if email field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
        console.log('in is ValidCCNumber function');
        return /^[0-9]{4}\s?\-?,?[0-9]{4}\s?\-?,?[0-9]{4}\s?\-?,?[0-9]{1,4}/.test(creditCardNumber); //regex requires 13-16 digits which can be optionally separated by commas, hyphens, or spaces after every 4th digit.
        }

        // $ccNumberErrorMessage creates h3 tag with error message. Appends the message to the label field.
        const $ccNumberErrorMessage = "<h3 class='cc-num'>*Please enter a valid credit card number.</h3>"
        $('label[for="cc-num"]').append($ccNumberErrorMessage);
        $('h3[class="cc-num"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
        $('h3[class="cc-num"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
        
        $(creditCardNumberInput).keyup(function(event){ //event listener for any typing in cc-num input field
            console.log ($(this).val()); //console logs the text the user typed
            ccNumBoolean = isValidCCNumber($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
            console.log(ccNumBoolean);
            if (ccNumBoolean === true) {
                console.log ('CC Number is valid!')
                $('h3[class="cc-num"]').hide();//hide error message
            } else if (ccNumBoolean === false) {
                console.log ('CC Number is invalid!')
                $('h3[class="cc-num"]').show(); //show error message
            }
        }); 

        //ZIPCODE
        function isValidZip(zipCode) { // tests to see if email field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
            console.log('in isValidZip function');
            return /^[0-9]{5}$/.test(zipCode); //regex requires 5 digits
            }
    
            // $zipErrorMessage creates h3 tag with error message. Appends the message to the label field.
            const $zipErrorMessage = "<h3 class='zip'>*Zip code must be 5 digits.</h3>"
            $('label[for="zip"]').append($zipErrorMessage);
            $('h3[class="zip"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
            $('h3[class="zip"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
            
            $(zipCodeInput).keyup(function(event){ //event listener for any typing in cc-num input field
                console.log ($(this).val()); //console logs the text the user typed
                zipBoolean = isValidZip($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
                console.log(zipBoolean);
                if (zipBoolean === true) {
                    console.log ('Zip is valid!')
                    $('h3[class="zip"]').hide();//hide error message
                } else if (zipBoolean === false) {
                    console.log ('Zip is invalid!')
                    $('h3[class="zip"]').show(); //show error message
                }
            }); 

        //CVV    
        function isValidCVV(cvv) { // tests to see if email field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
            console.log('in isValidCVV function');
            return /^[0-9]{3}$/.test(cvv); //regex requires 5 digits
            }
    
            // $cvvErrorMessage creates h3 tag with error message. Appends the message to the label field.
            const $cvvErrorMessage = "<h3 class='cvv'>*CVV must be 3 digits.</h3>"
            $('label[for="cvv"]').append($cvvErrorMessage);
            $('h3[class="cvv"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
            $('h3[class="cvv"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
            
            $(cvvInput).keyup(function(event){ //event listener for any typing in cc-num input field
                console.log ($(this).val()); //console logs the text the user typed
                cvvBoolean= isValidCVV($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
                console.log(cvvBoolean);
                if (cvvBoolean === true) {
                    console.log ('CVV is valid!')
                    $('h3[class="cvv"]').hide();//hide error message
                } else if (cvvBoolean === false) {
                    console.log ('CVV is invalid!')
                    $('h3[class="cvv"]').show(); //show error message
                }
            }); 
       
    //MASTER VALIDATION FUNCTION
        $("[type=submit]").on('click', function(event){ //click event handler for submit button
            console.log("in Master Validation Function");
            event.preventDefault(); //stop submit button from refreshing page
            console.log('Name: ' + nameBoolean);
            console.log('Email: ' + emailBoolean);
            console.log('Payment Method: ' + paymentSelected);
            console.log('CC#: ' + ccNumBoolean);
            console.log('Zip: ' + zipBoolean);
            console.log('CVV: ' + cvvBoolean);
            if (nameBoolean === true && emailBoolean === true && paymentSelected === 'Bitcoin') {
                console.log('both name and email true and payment selected is bitcoin!');
                console.log('ALLOW USER SUBMIT');
            } else if (nameBoolean === true && emailBoolean === true && paymentSelected === 'PayPal') {
                console.log('both name and email true and payment selected is paypal!');
                console.log('ALLOW USER SUBMIT');
            } else if (nameBoolean === true && emailBoolean === true && paymentSelected === 'Credit Card' && ccNumBoolean === true && zipBoolean === true && cvvBoolean === true) {
                console.log('name, email, cc selected as payment, and all cc input valid');
                console.log('ALLOW USER SUBMIT');
            }
        });


                                // if
                                // function isValidName(name)
                                // function isValidEmail(mail) 
                                // both return true
                                // test if payment selected is bitcoin or paypal and if true
                                // ALLOW Submit

                                // then test
                                // if cc is selected as payment test to see if these are true
                                // function isValidCCNumber(creditCardNumber)
                                // function isValidZip(zipCode)
                                // function isValidCVV(cvv) 


                                // all return true
                                // then allow user to Submit 
                                // else prevent default
      /*
        ○ Email (Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.)

        ○ Activity Section (User must select at least one checkbox under the "Register for Activities" section of the form.)
        ○ Credit Card Number (only validated if the payment method is “credit card”)
            ○ Credit Card field should only accept a number between 13 and 16 digits.
            ○ The Zip Code field should accept a 5-digit number.
            ○ The CVV should only accept a number that is exactly 3 digits long.
        ○ Zip Code (only validated if the payment method is “credit card”)
        ○ CVV (only validated if the payment method is “credit card”)
    ● Each validation function will accomplish a similar set of tasks for its required field
        ○ Use a conditional to check if the input value meets the requirements for that
input as stated in the project instructions.
        ○ If the criteria are not met, add an error indicator and return false.
        ○ If the criteria are met, remove any error indicators and return true.
        ○ NOTE: A common error indicator for an invalid field is to turn the input or form
section’s border red. But an even better approach is to append an element to
the DOM near the input or section, give it some friendly error message, and
show it when the field is invalid, and hide it when the field is valid.

    ● With the individual validation functions complete, a single master validation function can
now be created to test them all with a single function call. If all the individual validation
functions return true, then the master validation function should return true as well.
And if any individual validation functions return false, then the master function should
do the same.
        ○ NOTE: Remember, the name, email and activity section need to be validated on
every submission attempt regardless of which payment method has been
selected. But the three credit card fields will only need to be validated if “credit
card” is the selected payment method. */

/* */

/* */

/* */

/* */