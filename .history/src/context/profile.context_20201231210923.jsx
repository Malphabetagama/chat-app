import { Children, createContext } from "react";


const ProfileContext = createContext()

export const ProfileProvider = () => {
 return <ProfileContext.Provider>{children}</ProfileContext.Provider>;



}