import {createContext, useContext, useState } from "react";

const AppContext=createContext();

const AppProvider=({children})=>{
    const [isSidebar,setIsSidebar]=useState(false);

  const openSidebar=()=>{
    setIsSidebar(true);
  }

  const closeSidebar=()=>{
      setIsSidebar(false);
  }

    return <AppContext.Provider value={{openSidebar,closeSidebar,isSidebar}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export default AppProvider;