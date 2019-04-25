import React, { Component }from 'react';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

import './App.css';
import MsgList from './components/MsgList/MsgList'
import SendMsgForm from './components/SendMsgForm/SendMsgForm'

const instanceLocator = 'v1:us1:c54f6109-caf2-4c58-a868-9acf027bbe37'
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/c54f6109-caf2-4c58-a868-9acf027bbe37/token"
const username = "Ninja"
const roomId = 19771161

class App extends Component {
  state = {
       messages: []
    }

    componentDidMount() {
      const chatManager = new ChatManager({
        instanceLocator: instanceLocator,
        userId: username,
        tokenProvider: new TokenProvider({
          url: testToken
        })
     }) 

     chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
  })
}

    render(){
    return (
      <div className="App">
        <MsgList messages={this.state.messages}/>
        <SendMsgForm />
      </div>
        );
    }  
  }
      
      export default App;
      