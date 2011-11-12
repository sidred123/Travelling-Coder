var searchSubmitHandler = function () {
    console.log("Search button clicked.");
};

var projectSubmitHandler = function () {
    console.log("Project submitted.");
    var projectText = $('#project_description').val();
    console.log("Project text: " + projectText);
    $.ajax({
        type: 'POST',
        url: '/project',
        data: {text: projectText},
        success: function () {
            console.log("Data successfully posted.");
        },
        error: function () {
            console.log("Error in posting project data.");
        }
    });
};



$(document).ready(function () {
    // Bind listeners to submit buttons.
    $('#search_submit').click(searchSubmitHandler);
    $('#project_submit').click(projectSubmitHandler);
});
