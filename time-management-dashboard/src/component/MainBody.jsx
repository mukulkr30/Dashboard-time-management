import Component from "./Component";
import Sidebar from "./sidebar";

export default function Mainbody(){
    return(
        <div className="container-fluid" >
            <div className="row">
                <Sidebar />
                <Component/>
            </div>
        </div>
    )
}