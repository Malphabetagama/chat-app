import React from 'react';
import { Input } from 'rsuite';

const EditableInput = ({ 
    initialValue,
     onSave,
     label = null,
     placeholder = 'Write your value',
     emptyMsg = 'Input is empty',
     ...inputProps }) => {

        const [input, setInput] = useState(initialValue)



    return 
        <div>
            
        {label}
        <Input {...inputProps} placeholder={placeholder} />

        </div>;
};

export default EditableInput;
