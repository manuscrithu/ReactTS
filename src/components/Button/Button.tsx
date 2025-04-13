import './Button.scss'
import { EXAMPLES } from '../../utils/data'
import { useState } from 'react'

export default function Button() {
    const [selectedButton, setSelectedButton] = useState<string>();
    let title = ""
    let body = ""
    let code = ""

    switch (selectedButton) {
        case "components":
            title = EXAMPLES.components.title;
            body = EXAMPLES.components.description;
            code = EXAMPLES.components.code;
            break;
        case "jsx":
            title = EXAMPLES.jsx.title;
            body = EXAMPLES.jsx.description;
            code = EXAMPLES.jsx.code;
            break;
        case "props":
            title = EXAMPLES.props.title;
            body = EXAMPLES.props.description;
            code = EXAMPLES.props.code;
            break;
        case "state":
            title = EXAMPLES.state.title;
            body = EXAMPLES.state.description;
            code = EXAMPLES.state.code;
            break;
        default:
            title = "Demo title"
            body = "Demo body"
            code = "Demo code"
    }
    
    return(
        <div className='button-container'>
            <div className='button-section'>
                <button className={selectedButton === "components" ? "active-button" : "button-item"} onClick={()=>setSelectedButton("components")}>{EXAMPLES.components.title}</button>
                <button className={selectedButton === "jsx" ? "active-button" : "button-item"} onClick={()=>setSelectedButton("jsx")}>{EXAMPLES.jsx.title}</button>
                <button className={selectedButton === "props" ? "active-button" : "button-item"} onClick={()=>setSelectedButton("props")}>{EXAMPLES.props.title}</button>
                <button className={selectedButton === "state" ? "active-button" : "button-item"} onClick={()=>setSelectedButton("state")}>{EXAMPLES.state.title}</button>

            </div>
            <div className='example-section'>
                {
                    !selectedButton?(
                        <main>Please Select a Topic</main>
                    ):(
                        <main>
                            <h3 className='example-title'>{title}</h3>
                            <p className='example-description'>{body}</p>
                            <pre className='example-code'>{code}</pre>
                        </main>
                    )
                }

            </div>
        </div>
    )
}