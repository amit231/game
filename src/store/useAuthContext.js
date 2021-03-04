import React from 'react'
let authContext=React.createContext({});
export default authContext;
export let AuthProvider = authContext.Provider;