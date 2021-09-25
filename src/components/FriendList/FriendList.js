import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

// import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <FriendListItem {...friend} />{' '}
        </li>
      ))}
    </ul>
  );
}
FriendList.prototype = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
