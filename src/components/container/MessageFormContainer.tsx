import { useObserver } from "mobx-react-lite";
import { MessageForm } from "../presentation/MessageForm";
import { useMessageModel } from "../../model/message/useMessageModel";

export const MessageFormContainer: React.FC<{ children?: never }> = () => {
  const model = useMessageModel();
  return useObserver(() => {
    return (
      <MessageForm message={model.message} onChangeMessage={model.setMessage} />
    );
  });
};
