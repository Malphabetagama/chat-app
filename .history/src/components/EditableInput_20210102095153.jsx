import React, { useState } from 'react';
import { Input } from 'rsuite';

const EditableInput = ({ 
    initialValue,
     onSave,
     label = null,
     placeholder = 'Write your value',
     emptyMsg = 'Input is empty',
     ...inputProps }) => {

        const [input, setInput] = useState(initialValue);

        const onInputChange = useCallback(value) => {

        }

    return 
        <div>
            
        {label}
        <Input {...inputProps} placeholder={placeholder} onChange={} />

        </div>;
};

export default EditableInput;
