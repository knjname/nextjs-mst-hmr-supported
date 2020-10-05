export const MessageForm: React.FC<{
  message: string;
  onChangeMessage: (value: string) => void;
}> = ({ message, onChangeMessage }) => (
  <section>
    <h1>Message: {message}</h1>
    <input
      type="text"
      value={message}
      onChange={(ev) => onChangeMessage(ev.currentTarget.value)}
    />
  </section>
);
