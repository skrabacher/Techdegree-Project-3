// ----------------------------------
// Sarah Krabacher
// FSJS TechDegree - Team Treehouse
// Project 3 - Exceeds Expectations
// ----------------------------------


//focuses cursor on name input element when page is loaded
$(document).ready(function() { //ready method runs function as soon as page loads
    $('#name').focus(); //when page loads, cursor will automatically focus on input element with name id
});

//------------------------
//SELECT MENU REFORMATTING
//------------------------

//hides input box for other job role until user has selected "other" in the drop down menu
$("#other-title").hide(); //hides the text input element for other job role in the html file

$("#title").on("change", function() {  // change event listener - everytime #title value is changed
    if($('#title').val() === "other") {   //if user selects other, other job role input box will show
        $('#other-title').show();
    } else {                              //if user selects anything else, input box will remain hidden
        $('#other-title').hide();
    }
});

    $("#design option:first").hide(); // hides first option in the design drop down menu "select theme"
    
    //Updates the “Color” field to read “Please select a T-shirt theme” until the user has selected a theme. 
    $("#color").prepend( "<option selected>Please select a T-shirt theme</option>" ); //adds new menu option to color and makes the option the default selection by adding "selected" inside the opening option tag
    $("#color option:first").hide();// then hides the first option in the color drop down menu so that it only shows as the title of the drop down menu
   
    $("#color option").hide(); // selects any option elements that are descendants of elements with the color id and hides them (them being: all t shirt color drop down menu options) 
    // completely hides the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.
    $('div[id="colors-js-puns"]').hide(); //Hides the "Color" label and select menu

//Curates color drop down list based upon user theme selection
//if "js puns" it will hide the three “heart js” option elements in the “Color” dropdown menu and only show "js puns" shirt colors
//if "heart js" it will hide the three “js puns” option elements in the “Color” dropdown menu and only show "heart js" shirt colors
$("#design").on('change', function(event){ //change event handler uses selected theme to display only the corresponding color t shirts in the color drop down menu and hides the shirt colors that do not match the user theme selection
    if($('#design').val() === "js puns") { //if statement for when js puns is selected > only shows the t shirts with the js puns options
        $('div[id="colors-js-puns"]').show(); //Shows the "Color" label and select menu **EXCEEDS***
        $("#color option").show(); // shows all of the options for the color select menu
        $("#color option").eq(0).hide();// then hides the first option in the color drop down menu so that it only shows as the title of the drop down menu
        $("#color option").eq(1).prop("selected",true); //updates the color field to show the first available color (cornflower blue, 2nd in index so using numeral 1) using .eq to reference index assumes the index will never change, better to use value property to select
        $("#color [value='tomato']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='steelblue']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='dimgrey']").hide(); // hides t shirt with the value listed inside brackets
    } else if ($('#design').val() === "heart js") { //if statement for when heart js is selected > only shows the t shirts with the heart js options
        $('div[id="colors-js-puns"]').show(); //Shows the "Color" label and select menu **EXCEEDS***
        $("#color option").show(); // shows all of the options for the color select menu
        $("#color option:first").hide();// then hides the first option in the color drop down menu so that it only shows as the title of the drop down menu
        $("#color [value='tomato']").prop("selected",true); //updates the color field to show the first available color (tomato)
        $("#color [value='cornflowerblue']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='darkslategrey']").hide(); // hides t shirt with the value listed inside brackets
        $("#color [value='gold']").hide(); // hides t shirt with the value listed inside brackets
    }
});



//------------------------
// ACTIVITY SECTION
//------------------------


// Amount Due Display - creates display for total activity cost
let amountDueContainer= "<span><span>"; //dom element created to display total activity cost
$(".activities").append(amountDueContainer); //appended element to the activities section
let activityCost= 0; // global variable for total activity cost


//Checkbox Handler - listens for when boxes are checked or unchecked. 
$("[type=checkbox]").on('change', function(event){ //change event handler for check boxes in activity section
    let $clickedBox= (event.target); //variable for dom input element(checkbox) that was just clicked
    
    //Activity Cost Calulator - will add up the cost of all checked activities and return as a number that can be displayed in the amount due field 
    let $dataCost= $($clickedBox).attr('data-cost'); // stores activity cost as the new value of the $clickedBox variable
    $dataCost= $dataCost.slice(1, 4); //reads the string "$200" as an array and only returns "200" (indexes 1 through 4)
    $dataCost= parseFloat($dataCost); //converts string to a number

    if ($($clickedBox).prop('checked') === true) { // if statement that tests to see if the event target has a property of 'checked'
        activityCost= activityCost + $dataCost; // adds cost of checked activity to total activity cost
    } else {
        activityCost= activityCost - $dataCost; // subtracts cost of unchecked activity from total activity cost
    }
    $('.activities span').text('Amount Due: $' + activityCost);// displays and updates total amount due as boxes are checked and unchecked


    /*Disabling conflicting activities
    Still inside the Activity section’s change listener, let’s follow the same pattern we used to get
    the cost of the currently clicked activity to get the day and time as well. First, we’ll add another
    helpful variable:
        ● Get the `data-day-and-time` attribute value of the clicked element stored in a variable
    above. NOTE: Now would be a good time to log out these most recent variables to
    make sure they are what you think they are.
        */
    //Conflicting Activities Disabler - when activity is checked, disables any other check boxes for activities at same time. when unchecked, enables previously conflicting check boxes
    let $clickedDataDayAndTime = $($clickedBox).attr('data-day-and-time');//day and time attribute of clicked box
         
       // loops through all check boxes   
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
});


//------------------------
// PAYMENT SECTION
//------------------------

// defaults to credit card as payment and hides other payment message fields
let paymentSelected = 'Credit Card' // global variable to hold user selected payment method
$('div[id="paypal"]').hide();// hides paypal spiel
$('div[id="bitcoin"]').hide();//hides bitcoin spiel


$("#payment option:first").remove();// "hides select method" from payment field and drop down options
//if statement hides all payment entry/info elements until a payment option is selected
if ($('#payment').val() === 'credit card') { 
    $('div[id="credit-card"]').show(); //hides cc input elements
    $('div[id="paypal"]').hide();// hides paypal spiel
    $('div[id="bitcoin"]').hide();//hides bitcoin spiel
}

//Payment Drop Down Menu Handler
$("#payment").on('change', function(event){ 
    paymentSelected = $('#payment').val() // gets the value of the payment menu option selected 
    //if user selected credit card, shows credit card payment input fields,
       if (paymentSelected === 'Credit Card') {
        $('div[id="credit-card"]').show(); //shows cc input elements
        $('div[id="paypal"]').hide();// hides paypal spiel
        $('div[id="bitcoin"]').hide();//hides bitcoin spiel
    } else 
    //if user selected Bitcoin or Paypal, shows respective payment message and hides the cc input elements
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
     
//----------------------------------
// FORM VALIDATON AND ERROR MESSAGES
//----------------------------------

    // global variables for all input elements requiring validation
       const nameInput = document.getElementById("name"); // selects the name input element
       const emailInput = document.getElementById("mail"); // selects the email input element
       const activitiesInput = document.getElementsByClassName("activities"); // selects the activities input element ***DRAFT SELECTOR.. not sure it's right***
       
       const creditCardNumberInput = document.getElementById("cc-num"); // selects the credit card number input element
       const zipCodeInput = document.getElementById("zip"); // selects the zip code input elemtent
       const cvvInput = document.getElementById("cvv"); // selects the cvv input element
    // global variables to hold the boolean value of each form after validation (or # of activities)
       let nameBoolean = false
       let emailBoolean = false
       let numberOfActivities = 0
       let ccNumBoolean = false
       let zipBoolean = false
       let cvvBoolean = false

    //NAME INPUT VALIDATION & ERROR MESSAGE - tests input and returns error if invalid
        function isValidName(name) { // tests to see if name field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
            return /^[a-z]+\.?([a-z]+)?\.?\s[a-z]+$/i.test(name); //regex designed to allow names with initials such as J.J. and requires a first and last name
            // return /.+/.test(name); // if field is blank test method wallow names with initials such as J.J. and requires a first and last name
        }
        // $nameErrorMessage creates h3 tag with error message. Appends it above the input field.
        const $nameErrorMessage = "<h3 class='name'>*Please enter your first and last name separated by a space.</h3>"
        $('label[for="name"]').append($nameErrorMessage);
        $('h3[class="name"]').css('color', 'red').css("fontSize", 14).addClass('name'); //adds class & styles the appended error message to be red and smaller than the label
        $('h3[class="name"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
            
        $(nameInput).keyup(function(event){ //event listener for any typing in name input field
            nameBoolean= isValidName($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
            if (nameBoolean === true) {
                $('h3[class="name"]').hide();//hide error message
            } else if (nameBoolean === false) {
                $('h3[class="name"]').show(); //show error message
            }
        });


    //EMAIL INPUT VALIDATION & ERROR MESSAGE
        function isValidEmail(mail) { // tests to see if email field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
            return /^[^@]+@[^@.]+\.[a-z]+$/i.test(mail);
        }

        // $emailErrorMessage creates h3 tag with error message. Appends it above the input field.
        const $emailErrorMessage = "<h3 class='email'>*Please enter a valid email address.</h3>"
        $('label[for="mail"]').append($emailErrorMessage);
        $('h3[class="email"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
        $('h3[class="email"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
        const $blankEmailErrorMessage = "<h3 class='email-blank'>*Email field is blank.</h3>"
        $('label[for="mail"]').append($blankEmailErrorMessage);
        $('h3[class="email-blank"]').css('color', 'red').css("fontSize", 14);
        $('h3[class="email-blank"]').hide(); 

        $(emailInput).keyup(function(event){ //event listener for any typing in email input field
            emailBoolean= isValidEmail($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
            if (/^\s*$/.test($(this).val()) === true) {
                $('h3[class="email-blank"]').show();//hide error message
                $('h3[class="email"]').hide();//hide error message
            } else if (emailBoolean === true) {
                $('h3[class="email-blank"]').hide(); 
                $('h3[class="email"]').hide();//hide error message
            } else if (emailBoolean === false) {
                $('h3[class="email"]').show(); //show error message
                $('h3[class="email-blank"]').hide();                 
            }
        });

    // ACTIVITIES INPUT VALIDATION & ERROR 

    
// $activitiesErrorMessage creates h3 tag with error message. Appends it to the fieldset
const $activitiesErrorMessage = "<h3 class='activities'>*Please select one or more activities.</h3>"
$('fieldset[class="activities"]').append($activitiesErrorMessage);
$('h3[class="activities"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
$('h3[class="activities"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
    
        $('input[type="checkbox"]').on('change', function(event){ //change event handler runs everytime an activity box is checked or unchecked
            numberOfActivities = $('input[type="checkbox"]:checked').length
            if (numberOfActivities === 0) { //counts number of boxes that are checked and tests to see if they equal zero
                $('h3[class="activities"]').show(); //show error message
            } else if (numberOfActivities > 0) {
                $('h3[class="activities"]').hide(); //hide error message
            }
        });


    // PAYMENT INPUT VALIDATION & ERROR MESSAGE
       //CARDNUMBER
       function isValidCCNumber(creditCardNumber) { // tests to see if email field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
        return /^[0-9]{4}\s?\-?,?[0-9]{4}\s?\-?,?[0-9]{4}\s?\-?,?[0-9]{1,4}/.test(creditCardNumber); //regex requires 13-16 digits which can be optionally separated by commas, hyphens, or spaces after every 4th digit.
        }

        // $ccNumberErrorMessage creates h3 tag with error message. Appends the message to the label field.
        const $ccNumberErrorMessage = "<h3 class='cc-num'>*Please enter a valid credit card number.</h3>"
        $('label[for="cc-num"]').append($ccNumberErrorMessage);
        $('h3[class="cc-num"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
        $('h3[class="cc-num"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
        
        $(creditCardNumberInput).keyup(function(event){ //event listener for any typing in cc-num input field
            ccNumBoolean = isValidCCNumber($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
            if (ccNumBoolean === true) {
                $('h3[class="cc-num"]').hide();//hide error message
            } else if (ccNumBoolean === false) {
                $('h3[class="cc-num"]').show(); //show error message
            }
        }); 

        //ZIPCODE
        function isValidZip(zipCode) { // tests to see if email field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
            return /^[0-9]{5}$/.test(zipCode); //regex requires 5 digits
            }
    
            // $zipErrorMessage creates h3 tag with error message. Appends the message to the label field.
            const $zipErrorMessage = "<h3 class='zip'>*Zip code must be 5 digits.</h3>"
            $('label[for="zip"]').append($zipErrorMessage);
            $('h3[class="zip"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
            $('h3[class="zip"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
            
            $(zipCodeInput).keyup(function(event){ //event listener for any typing in cc-num input field
                zipBoolean = isValidZip($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
                if (zipBoolean === true) {
                    $('h3[class="zip"]').hide();//hide error message
                } else if (zipBoolean === false) {
                    $('h3[class="zip"]').show(); //show error message
                }
            }); 

        //CVV    
        function isValidCVV(cvv) { // tests to see if email field input is correctly formatted. Returns true if formatted correctly, false if not formatted correctly.
            return /^[0-9]{3}$/.test(cvv); //regex requires 5 digits
            }
    
            // $cvvErrorMessage creates h3 tag with error message. Appends the message to the label field.
            const $cvvErrorMessage = "<h3 class='cvv'>*CVV must be 3 digits.</h3>"
            $('label[for="cvv"]').append($cvvErrorMessage);
            $('h3[class="cvv"]').css('color', 'red').css("fontSize", 14); //adds class & styles the appended error message to be red and smaller than the label
            $('h3[class="cvv"]').hide(); // hides the error message so that it is not shown unless triggered by keyup event listener below
            
            $(cvvInput).keyup(function(event){ //event listener for any typing in cc-num input field
                cvvBoolean= isValidCVV($(this).val()); //tests the user inputted text against the regex using the validating function and returns the boolean value. true=valid false=invalid)
                if (cvvBoolean === true) {
                    $('h3[class="cvv"]').hide();//hide error message
                } else if (cvvBoolean === false) {
                    $('h3[class="cvv"]').show(); //show error message
                }
            }); 
       
    //MASTER VALIDATION FUNCTION - tests to ensure ALL validations above return true (or for activities > 0) then allows user to submit for, OR displays error messages for fields that are invalid
        $("[type=submit]").on('click', function(event){ //click event handler for submit button
            if (nameBoolean === false) {
                $('h3[class="name"]').show(); // shows name error message above name field
                event.preventDefault(); //stop submit button from refreshing page
            } if (emailBoolean === false) {
                $('h3[class="email"]').show(); // shows name error message above name field
                event.preventDefault(); //stop submit button from refreshing page
            } if (numberOfActivities === 0) {
                $('h3[class="activities"]').show(); //show error message
                event.preventDefault(); //stop submit button from refreshing page
            } if (paymentSelected === 'Credit Card') {
                if (ccNumBoolean === false) {
                    $('h3[class="cc-num"]').show(); //show error message
                    event.preventDefault(); //stop submit button from refreshing page
                } if (zipBoolean === false) {
                    $('h3[class="zip"]').show(); //show error message
                    event.preventDefault(); //stop submit button from refreshing page
                } if (cvvBoolean === false) {
                    $('h3[class="cvv"]').show(); //show error message
                    event.preventDefault(); //stop submit button from refreshing page
                } else {
                //ALLOWS USER SUBMIT
                }
            } if (paymentSelected === "Bitcoin") {
                //ALLOWS USER SUBMIT
            } if (paymentSelected === "PayPal") {
                //ALLOWS USER SUBMIT
            }
        });

                               