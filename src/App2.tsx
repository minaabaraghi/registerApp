import React, { useState } from "react";
import Components from "./components/components";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
const App = () => {
  const [conection, setConection] = useState<HubConnection>();
  const join = async (user: string, room: any) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://signalr.golrangonline.ir/chat-hub")
        .configureLogging(LogLevel.Information)
        .build();
      connection.on("ReceiveMessage", (user, message) => {
        console.log("receive msg");
      });
      await connection.start();
      await connection.invoke("SendMessage", "mina");
      setConection(conection);
    } catch (error) {
      console.log(error, "err");
    }
  };
  return (
    <>
      <h1>test SignalR</h1>
      <hr className="line" />
      <Components join={join} />
    </>
  );
};
export default App;
