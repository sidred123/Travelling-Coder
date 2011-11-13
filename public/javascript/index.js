var searchSubmitHandler = function () {
    console.log("Search button clicked.");
    var searchText = $("#search_box").val();
    $.ajax({
        type: 'GET',
        url: '/search',
        data: {text: searchText},
        success: function () {
            console.log("success in search.");
        },
        error: function () {
            console.log("failure in search.");
        }
    });
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
