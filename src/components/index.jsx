import { useState } from "react"
import data from "./data"
import './style.css'

export default function Acordin() {
    const [selected, setSelected] = useState(null)
    function handleSingleClick(getSelectedId) {
        setSelected(selected === getSelectedId ? null : getSelectedId)
    }
    return (
        <div className="acc-wrapper">
            <div className="accordian">
                {data && data.length > 0 ? <div>
                    {data.map(dataItem => <div className="item">
                        <div className="title" onClick={() => handleSingleClick(dataItem.id)}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {selected === dataItem.id ? <div>
                            <h3>{dataItem.answer}</h3>
                        </div> : <div></div>}
                    </div>)}
                </div> : <div>No Data Found</div>}
            </div>
        </div>
    )
}