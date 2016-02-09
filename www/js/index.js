$(document).on("pageshow", "#todoPage", onPageShow);
$(document).on("click", "#addTaskButton", onAddTask);

function Tasks() {
    this.Task = "";
}

function onPageShow() {
    //console.log("page show");

    var tasks = Backendless.Persistence.of(Tasks).find().data;
    //wipe the list clean
    $("#taskList").empty();

    //add each task
    for (var i = 0; i < tasks.length; i++) {
        $("#taskList").append("<li>" + tasks[i].Task + "</li>");
    }

    //refresh listview
    $("#taskList").listview('refresh');

    //console.log(tasks);

}

function onAddTask() {
    //console.log("button clicked");
    var tasktext = $("#addTaskText").val();
    var newTask = new Tasks();
    newTask.Task = tasktext;
    var tasks = Backendless.Persistence.of(Tasks).save(newTask);

    onPageShow();
    $("#addTaskText").val("");
}