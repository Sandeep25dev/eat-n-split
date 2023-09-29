import { Friend } from "./Friend";

export function FriendsList({ friends, handleSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          handleSelection={handleSelection}
          selectedFriend={selectedFriend}
          friendObj={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
