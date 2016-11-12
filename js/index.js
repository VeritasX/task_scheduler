

var tasksList={};

var submitTasks=function(){
var taskName = $('#taskName').val(), taskTime = $('#taskTime').val(), taskDay = $('#taskDay').val();
function moveItemsToList(taskTitle){
 tasksList[taskTitle] =  {
        task:taskName,
        taskDate:taskDay,
        taskTime:taskTime
    };
}

moveItemsToList(taskName);
console.log(tasksList);
};

