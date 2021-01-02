import React, { createContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {
 const [profile] = useState(null);
 
    return ( 
    <ProfileContext.Provider value={profile}>
      {children}
       </ProfileContext.Provider>
    );
};

export const useProfile = () => useProfile(ProfileContext);