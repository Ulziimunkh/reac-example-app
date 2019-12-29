import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import Title from "./Title";
function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
    <Title></Title>
      <div>
        <RoomFilter rooms={rooms}></RoomFilter>
        <RoomList rooms={sortedRooms}></RoomList>
      </div>
    </>
  );
}
export default withRoomConsumer(RoomContainer);
