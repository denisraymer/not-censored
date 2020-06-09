import React, {Component} from "react";
import TextEditor from "../components/TextEditor";
import FontSetting from "../components/FontSettings";

class Editor extends Component {
    render() {
        return (
            <React.Fragment>
                <TextEditor/>
                <FontSetting/>
            </React.Fragment>
        )
    }
}

export default Editor
