import "./style.css";
import Task, { projectList } from "./task.js"

// default is the "root" project that is referenced unless overwritten
projectList.push({ default: [] });

const task1 = Task("First Task");
const task2 = Task("Second Task", "First Project");
const task3 = Task("Third Task", "First Project");


projectList.forEach(project => console.log(project))


window.onload = () => {
  
}

