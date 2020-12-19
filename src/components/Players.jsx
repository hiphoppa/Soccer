import React, { Fragment, useContext, useState } from 'react';
import MyContext from '../context/TotalContext';
import Player from './Player';
import faker from 'faker'

const Players = ({ target }) => {
    const context = useContext(MyContext)
    // const [ch, setch] = useState([])
    // let checked = (context.players.map(player => (
    //     <Player
    //         checkbox={player.target.value}
    //     />
    // )))
    // setch(checked)
    // console.log(ch);
    return (
        <Fragment>
            {context.players.length > 0 ? (
                context.players.map(player => (
                    <Player
                        key={faker.random.number()}
                        fullname={player.fullname}
                        deleted={id => context.handleDelete(player.id)}
                    />
                ))
            ) : (
                    <div className="col-8 mx-auto custom-transparent p-3 rounded dir-rtl text-right d-flex justify-content-between mb-3">
                        اسم فوتبالیست های مورد علاقتو بگو
                    </div>
                )}
        </Fragment>
    );
}

export default Players;