import type { ChangeEvent, FC } from 'react';

import { isValidAddress, useStartConversation } from '@xmtp/react-sdk';
import { useCallback, useState } from 'react';

const StartConversation: FC = () => {
  const [peerAddress, setPeerAddress] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { startConversation } = useStartConversation();

  const handleAddressChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPeerAddress(e.target.value);
    },
    []
  );

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setMessage(e.target.value);
    },
    []
  );

  const handleStartConversation = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (peerAddress && message) {
        setIsLoading(true);
        const conversation = await startConversation(peerAddress, message);
        setIsLoading(false);
      }
    },
    [message, peerAddress, startConversation]
  );

  return (
    <form onSubmit={handleStartConversation}>
      <input
        disabled={isLoading}
        name="addressInput"
        onChange={handleAddressChange}
        placeholder="add"
        type="text"
      />
      <input
        disabled={isLoading || !isValidAddress(peerAddress)}
        name="messageInput"
        onChange={handleMessageChange}
        type="text"
      />
      <button type="submit">Start conversation</button>
    </form>
  );
};

export default StartConversation;