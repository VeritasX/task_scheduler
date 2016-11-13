var tasksList={};

var submitTasks=function(){
var taskName = $('#taskName').val(), taskTime = $('#taskTime').val(), taskDay = $('#taskDay').val(), thereIsADouble;
$('#alerts').empty();
function moveItemsToList(taskTitle){
 tasksList[taskTitle] =  {
        task:taskName,
        taskDate:taskDay,
        taskTime:taskTime
    };
}

var checkForDoubleDates = function(){
    for(var listItem in tasksList){
        if(tasksList[listItem]['taskDate'] === taskDay && tasksList[listItem]['taskTime']  === taskTime){
            console.log('it is the same as ' + tasksList[listItem]['task']);
            $('#alerts').append('<p>You already have the task "' + tasksList[listItem]['task'] + '" at that day and time!  </p>');
            thereIsADouble = {'double':true};
        }
    }
};
var verifyCheckForDoubleDates =function(){
if(thereIsADouble){
    console.log('sorry there was a double');
}else{
    moveItemsToList(taskName);
}

}

checkForDoubleDates();
verifyCheckForDoubleDates();
 
console.log(tasksList);
};

