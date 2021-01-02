import React, { createContext, useState } from "react";


const ProfileContext = createContext()

export const ProfileProvider = () => {
 const [profile] = useState(false);
 
    return ( 
    <ProfileContext.Provider value={profile}>
        {children}
        </ProfileContext.Provider>
    );
};