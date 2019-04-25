import React from 'react'

function MsgList (props){
    console.log(props)
    return(

        <ul className= 'MsgList'>                 
    {props.messages.map(message => {
        <li key={props.message.id}>
            <div>
                {props.message.senderId}
            </div>
            <div>
                {props.message.text}
            </div>
        </li>
    })}
    </ul>
    )

}


export default MsgList;