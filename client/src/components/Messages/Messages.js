import React from "react";
import "./Messages.css";
import Message from "./Message/Message";

export default function Messages({ messages, name }) {
  return (
    <div className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  );
}
