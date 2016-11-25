var app = (function() {
    function moveItemsToList(ListName,taskName, taskDesc, taskDates, taskTimes) {
        var listObject = {
            [taskName]:{
            task: taskDesc,
            taskDate: taskDates,
            taskTime: taskTimes
            }
        };

        ListName.push(listObject);    
    };

    function checkForDoubleDates(taskContainer, taskDay, userDate, taskTime, userTime) {
        for (var listItem in taskContainer) {
            if (taskContainer[listItem][taskDay] === userDate && taskContainer[listItem][taskTime] === userTime) {
                var thereIsADouble = {
                    'double': true
                }
                return thereIsADouble;
            }
        }
    }

    function verifyCheckForDoubleDates(checkMe, taskName, taskTitle, taskDesc, taskDates, taskTimes, message) {
        if (checkMe) {
            message;
        } else {
            moveItemsToList(taskName, taskTitle, taskDesc, taskDates, taskTimes);
        }
    }

    // function printTotheScreen(ListName, DivToOutPut){
    //     for(let task in listName){
            
    //     }
    //     DivToOutPut.innerHtml += '';
    //     for (let taskName in listName){
            
    //     }
    // }

    return {
        moveItemsToList: moveItemsToList,
        checkForDoubleDates: checkForDoubleDates,
        verifyCheckForDoubleDates: verifyCheckForDoubleDates
    };
})();