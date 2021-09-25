import React from 'react';

import Profile from './components/Profile/Profile';
import userInfor from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/statistical-data.json';

function App() {
  return (
    <div>
      <Profile name={userInfor.name} tag={userInfor.location} />
      <Statistics title="Upload Stats" starts={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
