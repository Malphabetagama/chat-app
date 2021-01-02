import { useState, useCallback } from "react";

function useModalState(defaultValue = false) {
    const [isOpen, setIsOpen] = useState(defaultValue);

    const open = useCallback(() => setIsOpen(true),[]);
    const close = useCallback(() => setIsOpen(false),[]);


}