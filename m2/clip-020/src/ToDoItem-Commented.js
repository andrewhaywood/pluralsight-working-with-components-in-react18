//renders the ToDoItem compoent in the Index component
// not passing a value will set the recieving prop to undefined 
export default function Index() {
  return <ToDoItemNoState text="Wash clothes" completed={false} important={true} />;
}
// same as above but using an object and the spread operator to spread the vals for the props
// you can pass more vals on the object that are not used by the component it will just ignore them.
export default function Index() {
  const toDoItem = {text:"Wash clothes", completed:false, important:true}
  return <ToDoItemNoState  {...toDoItem}/>;
}

//destructure an object passed in to use the vals as props
function ToDoItemNoState({ text, completed, important }) {
  return (
    <div className={completed ? "completed" : ""}>
      {important ? "*" : ""} {text}
    </div>
  );
}

// set the inital value of textState to the text val passed in as a prop
// the browsers event model is used to plug into
// the component will re-render on change of state
// usEffect is run after the component has rendered
function ToDoItemWithState({ text, completed, important }) {
  const [textState, setTextState] = useState(text)
  const [completedState, setCompletedState] = useState(completed)
  const [important, setImportant] = useState(important)
       useEffect(() => {
    setTextState(`${text} ${new Date().toLocaleDateTimestring}`);
  }, []);
  
  return (
    <div 
    className={completed ? "completed" : ""} onClick={()=> setCompletedState(!completedState)}>
      {important ? "*" : ""} {text}
    </div>
  );
}
