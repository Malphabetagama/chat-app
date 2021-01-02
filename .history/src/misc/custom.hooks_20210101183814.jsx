import { useState, useCallback } from "react";

function useModalState(defaultValue = false) {
    const [isOpen, setIsOpen] = useState(defaultValue);

    const open = useCallback(() => setIs(true),[]);
    const close = useCallback(() => setIs(false),[]);


}