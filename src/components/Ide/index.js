import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-chaos"
import "ace-builds/src-noconflict/ext-language_tools";
import {useState, useEffect} from 'react';
import "./Ide.css";
import ControlPanel from "./ControlPanel";


export default function Ide(){

    const [code,setCode]= useState("");
    const[fontSize, setFontSize]=useState(14);
    const [theme, setTheme]=useState("monokai");

    useEffect(()=>{
        console.log(fontSize);
    }, [fontSize]);
    
    return(
        <div>
            <ControlPanel 
                fontSize={fontSize} 
                handleFontSizeChange={setFontSize}
                theme={theme}
                handleThemeChange={setTheme}
            />
            <AceEditor
                mode="java"
                theme={theme}
                fontSize={parseInt(fontSize)}
                width={"100%"}
                showPrintMargin={false}   //mid margin line removed
                onChange={(value)=>setCode(value)}
                name="ace-editor-123"
                editorProps={{ $blockScrolling: true }}
            />
        </div>
    );
}