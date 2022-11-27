import { useState, useEffect } from 'react';

import MessagesList from 'components/sections/MessagesList/MessagesList';
import WelcomeMessage from 'components/sections/WelcomeMessage/WelcomeMessage';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

import {
  removeMessage,
  getMessages
} from 'helpers/http';

function HomePage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
      .then(data => {
        setMessages(data);
      })
  }, [])

  const handleMessageRemove = (id) => {
    const filteredMessage = messages.filter(message => {
      return message.id !== id
    })

    removeMessage(id)
    setMessages(filteredMessage)
  }

  return (
    <MainTemplate>
      <WelcomeMessage>
        <h3>Messages List</h3>
      </WelcomeMessage>
      <MessagesList
        messages={messages}
        handleMessageRemove={handleMessageRemove}
      />
    </MainTemplate>
  );
}

export default HomePage;