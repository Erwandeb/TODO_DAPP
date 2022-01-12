pragma solidity >=0.4.22 <0.9.0;
 
contract TodoList {
    uint public taskCount = 0;

    struct Task {
        uint id;  //identifiant de la tache 
        string content; // Titre de la tache 
        bool completed;  // la tache est-elle realisée ? 
    }

    mapping(uint => Task) public tasks;

    constructor() public{
        createTask("create your own task");
    }

    function createTask(string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }
}