$(document).ready(function () {
    hideAll();
    showPanel("panel-default");

    $("#btn-subjective-quiz").click(function (e) { 
        e.preventDefault();
        hideAll();
        showPanel("panel-subjective-quiz");
    });
    $("#btn-placement-quiz").click(function (e) { 
        e.preventDefault();
        hideAll();
        showPanel("panel-placement-quiz")
    });
    $("#btn-your-books").click(function (e) { 
        e.preventDefault();
        hideAll();
        showPanel("panel-your-books")
    });
    $("#btn-your-collections").click(function (e) { 
        e.preventDefault();
        hideAll();
        showPanel("panel-your-collections")
    });
});

function hideAll() {
    $(".panel-item").remove();
}

function showPanel(fileName) {
    $(".panel").load("./dashboard-templates/" + fileName + ".html");
}