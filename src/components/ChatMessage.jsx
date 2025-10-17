const ChatMessage = ({ chat }) => {
  return (
    // Check if the message should be hidden
    !chat.hideInChat && (
      // Render the message container
      <div
        className={`message ${chat.role === "model" ? "bot" : "user"}-message ${
          chat.isError ? "error" : ""
        }`}
      >
        {/** Render the message text **/}
        <p className="message-text">{chat.text}</p>
      </div>
    )
  );
};
export default ChatMessage;
