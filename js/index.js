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

var checkForDoubleDates = function(){
    for(var listItem in tasksList){
        if(tasksList[listItem]['taskDate'] === taskDay || tasksList[listItem]['taskTime']  === taskTime){
            console.log('it is the same as ' + tasksList[listItem]['task'])
        }
    }
};

checkForDoubleDates();
moveItemsToList(taskName);
console.log(tasksList);
};

