import React, {useState} from 'react';
import MyContext from './TotalContext';
import {toast } from 'react-toastify'

const GlobalState = props => {
    const [name, setname] = useState("");
    const [players, setplayers] = useState([]);
    const [isclicked, setIsClicked] = useState(false)
    const [Edited, setEdited] = useState(name)
    const [pre, setpre] = useState(false)


    const handleClick = () => {
        setIsClicked(!isclicked)
    }
    const submitted = event => {
        event.preventDefault();
        const allplayers = [...players];
        const singlePlayer = {
            id: Math.floor(Math.random() * 1000),
            fullname: name,
        }
        if (name !== "" && name !== " ") {
            allplayers.push(singlePlayer);
            setplayers(allplayers);
            setname("");
            toast.success(`${name} با موفقییت اضافه شد.`,
                {
                    position: "top-right",
                    closeOnClick: true,
                })
        }
    }

    const handleInputChange = event => {
        setname(event.target.value);
    }
    const handleDelete = id => {
        const allplayers = [...players];
        const index = allplayers.filter(player => player.id !== id);
        const deleteIndex = allplayers.findIndex(player => player.id === id);
        setplayers(index);
        toast.error(`${allplayers[deleteIndex].fullname} متاستفانه حذف شد.`,
            {
                position: 'bottom-right',
                closeOnClick: true
            })
    }
    return (
        <MyContext.Provider value={{
              name: name,
              players: players,
              isClicked: isclicked,
              Edited: Edited,
              handleClick: handleClick,
              handleInputChange: handleInputChange,
              submitted: submitted,
              handleDelete: handleDelete
            }}
            >
            {props.children}
        </MyContext.Provider>
    );
}

export default GlobalState;