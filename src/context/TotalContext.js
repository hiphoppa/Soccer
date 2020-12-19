import { createContext } from 'react'

const MyContext = createContext({
    name: "",
    players: [],
    isClicked: false,
    Edited: '',
    handleInputChange: () => {},
    submitted: () => {},
    handleDelete: () => {},
    handleClick: () => {}
})
export default MyContext;