import React from "react"

const UserContext = React.createContext('Zack')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
