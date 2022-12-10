import {MdDelete} from "react-icons/md";

export default function Task({text}) {
    return (
        <div className="flex justify-between rounded-md bg-emerald-900 text-fuchsia-50 pl-1.5 py-2.5 my-3">
            <p className="px-1">{text}</p>
            <span className="">
                <button><MdDelete size={30} color="yellow"/></button>
            </span>
        </div>
    );
}
