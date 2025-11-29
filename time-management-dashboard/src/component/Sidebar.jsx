import './Sidebar.css'

export default function Sidebar(){
    return(
        <div className="col-3">
                <ul >
                    <li><i class="fa-solid fa-house"></i>Dashboard</li>
                    <br />
                    <li><i class="fa-solid fa-calendar"></i>Planner</li>
                    <br />
                    <li><i class="fa-solid fa-list-check"></i>Task</li>
                    <br />
                    <li><i class="fa-solid fa-chart-pie"></i>Analytics</li>
                </ul>
        </div>
    )
}