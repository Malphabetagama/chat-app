import React, { useState, useCallback } from 'react';
import { Input } from 'rsuite';

const EditableInput = ({ 
    initialValue,
     onSave,
     label = null,
     placeholder = 'Write your value',
     emptyMsg = 'Input is empty',
     ...inputProps }) => {

        const [input, setInput] = useState(initialValue);
        const [isEditable, setIsEditable] = useState(false);
        
        const onInputChange = useCallback((value) => {
            setInput(value);
      }, [])

    return (
        <div>
            {label}
                <Input
                 {...inputProps}
                 disabled={!isEditable}
                  placeholder={placeholder}
                  value={input}
                  onChange={onInputChange} />
        </div>
    );
};

export default EditableInput;
