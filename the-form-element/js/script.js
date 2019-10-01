// ----------------------------------
// Sarah Krabacher
// FSJS TechDegree - Team Treahouse
// Project 3
// ----------------------------------

/*Put the first field in the `focus` state
    ● Use jQuery to select the 'Name' input element and place focus on it. */

$(document).ready(function() { //when page loads, cursor will automatically focus on input element with name id
    $('#name').focus(); 
});

/* Add an “Other” option to the Job Role section
This is the one and only section of the project where you will have to make changes directly in
the `index.html` file.
    ● In the `index.html` file, just below the ‘Job Role’ `select` element, create a text input
element, set its `name` attribute to “job_role_other”, set its `placeholder` attribute to
“Your Job Role”, and give it an `id` attribute of “other-title” so you can easily target this
element in your JS file.
    ● In your JavaScript file, target the ‘Other’ input field, and hide it initially, so that it will
display if JavaScript is disabled, but be hidden initially with JS. */

$("#other-title").hide();