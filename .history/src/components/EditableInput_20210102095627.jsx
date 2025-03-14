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

        const onInputChange = useCallback((value) => {
            setInput(value);
      }, [])

    return (
        <div>
            {label}
                <Input
                 {...inputProps}
                  placeholder={placeholder}
                  value={input}
                  onChange={onInputChange} />
        </div>;
    );
};

export default EditableInput;
