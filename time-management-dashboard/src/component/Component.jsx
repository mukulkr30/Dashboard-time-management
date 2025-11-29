import Goaltracker from "./Goaltracker";
import Recent from "./Recent";
import Todayschedule from "./Todayschedule";
import Todo from "./Todo";

export default function Component(){
    return(
        <div className="col-9">
            <div className="row">
                <Todayschedule/>
                <Todo/>
            </div>
            <div className="row">
                <Recent/>
                <Goaltracker/>
            </div>
        </div>
    )
}