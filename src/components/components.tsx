import React, { useState } from "react";

export default function Components({ join }: any) {
  const [user, setUser] = useState();
  const [room, setRoom] = useState();
  return (
    <div>
      <form>
        <input
          placeholder="name"
          onChange={(e: any) => setUser(e.target.value)}
        />
        <input
          placeholder="room"
          onChange={(e: any) => setRoom(e.target.value)}
        />
        <button
          onClick={(e) => {
            join(user, room);
          }}
        >
          click
        </button>
      </form>
    </div>
  );
}
