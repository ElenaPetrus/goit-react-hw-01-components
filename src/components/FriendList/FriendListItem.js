import React from 'react';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className="status">
        {isOnline ? (
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: 'green',
              borderRadius: '50%',
            }}
          ></div>
        ) : (
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: 'red',
              borderRadius: '50%',
            }}
          ></div>
        )}
      </span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

export default FriendListItem;
