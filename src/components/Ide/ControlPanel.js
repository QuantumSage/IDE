import {Form} from 'react-bootstrap';
import {fontSizes,themes} from './constants';

function SelectComponent({choices, value, handleValueChange}){
    return(
        <div className="select-container">
            <Form.Select value={value} onChange={(event)=>{
                handleValueChange(event.target.value);
            }}>
                {choices.map(choice=>
                <option key={`option-${choice}`}>
                    {choice}
                </option>)}
            </Form.Select>
        </div>
        
    )
}

export default function ControlPanel({
    fontSize, 
    handleFontSizeChange, 
    theme, 
    handleThemeChange}){
    
    return(
        <div className="control-panel-container">
            <SelectComponent 
                choices={fontSizes} 
                value={fontSize} 
                handleValueChange={handleFontSizeChange}/>

            <SelectComponent 
                choices={themes} 
                value={theme} 
                handleValueChange={handleThemeChange}/>
        </div>
    );
}