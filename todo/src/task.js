export let projectList = [];

const Task = function(name, parentProject = "default", isProject = false) {
  const task = {
    name,  
    parentProject, 
    details: null,
    createDate: null,
    dueDate: null,
    priority: null,        // array of nums
    status: null,          // array of strings (for site pulldown)
    notes: null,
    checklist: null,       // array of object status(bool) & item(string)
    isProject              // bool
  };
  return Object.assign({}, 
    task, 
    {updateProjectList},
    {checklistMethods}, 
    {toggleProjectStatus}, 
    {listProjectTasks},
    updateProjectList.call(task)
  );
}

const updateProjectList = function() {
  let index;
  let updateList = false;
  for (let i = 0; i < projectList.length; i++) {
    if (this.parentProject in projectList[i]) {
      console.log(`EXISTING PROJECT`)
      index = i;
      updateList = true;
      break;
    } else {
      console.log(`NEW PROJECT TIME for ${ this.name }`);
      const newProject = Task(this.parentProject, "default", true);
      projectList.push({ [this.parentProject]: [this] });
      break;
    }
  }
  if (updateList) {
    projectList[index][this.parentProject].push(this);
  }
};

const checklistMethods = function() {
  console.log(`Checklisting...`)
  const toggleListItem = () => {
    console.log(`Toggling target item for ${ this.name }`)
  }
  return {toggleListItem}; 
}

const toggleProjectStatus = function() {
  console.log(`toggling status of ${ this.isProject }`);
  this.isProject = !this.isProject;
}

const listProjectTasks = function() {
  console.log(`Getting tasks for ${ this.name }`);
}

export default Task;
