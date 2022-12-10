import { useState } from "react";
import {MdDelete} from "react-icons/md";

export default function Display() {
    const [input, setInput] = useState("");
    const [taskList, setTaskList] = useState([]);

    function Input() {
        setTaskList(
            (taskList) => {
                const updatedList = [...taskList, input];
                console.log(taskList);
                setInput('');
                return updatedList;
            }
        );
    }

    function Remove(i) {
        const updatedList = taskList.filter((element, id) => {
            return i != id;
        });
        setTaskList(updatedList);
    }

    function RemoveAll() {
        setTaskList([]);
    }

    return (
        <div>
            <div className="flex justify-between">
                <input className="border-2 focus:outline-none w-5/6 py-2 px-1.5 rounded-md border-transparent"
                type='text' placeholder='Write any task' onChange={(e) => {
                    if (e.target.value) {
                        setInput(e.target.value)
                    }
                }}/>
                <button className="bg-amber-500 hover:bg-amber-600 w-1/6 ml-1.5 rounded-md"
                onClick={Input}
                >Add</button>
            </div>

            { taskList != [] && taskList.map((data, i)=> {
                return (
                    <div className="flex justify-between rounded-md bg-emerald-900 text-fuchsia-50 pl-1.5 py-2.5 my-3">
                    <p className="px-1" key={i}>{data}</p>
                    <span>
                        <button><MdDelete size={30} color="yellow" onClick={(e) => Remove(i)}/></button>
                    </span>
                    </div>
                );
            })}

            { taskList.length >= 1 && 
                <button className="bg-red-700 rounded-md hover:bg-red-800 text-fuchsia-50 w-full py-2 px-1.5"
                 onClick={(e) => RemoveAll()}>Remove All Tasks</button>
            }

        </div>
    );
}
