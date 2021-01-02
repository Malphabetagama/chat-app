import React, { createContext } from "react";


const ProfileContext = createContext()

export const ProfileProvider = () => {
 
    const [profile, setProfiles] = useState(false);
 
 
 
    return ( <ProfileContext.Provider value={profile}>
        {children}
        </ProfileContext.Provider>;
    );
};