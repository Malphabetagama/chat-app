import React, { useState, useCallback } from 'react';
import { Icon, Input, InputGroup } from 'rsuite';
import InputGroupButton from 'rsuite/lib/InputGroup/InputGroupButton';

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
                <InputGroup.Button>
                  <Icon icon={isEditable ? 'close' : 'edit'} />
                </InputGroup.Button>
        </div>
    );
};

export default EditableInput;
