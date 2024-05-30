import "modern-normalize";
import Profile from './Profile/Profile';
import userData from "../userData.json";

import friends from "../friends.json";
import FriendList from "../components/FriendList/FriendList";

import transactions from "../transactions.json";
import TransactionHistory from './TransactionHistory/TransactionHistory';

import { useState } from "react";

const App = () => {

const [values, setValues] = useState({
    x: 0,
    y: 0,
});

	const updateX = () => {
	setValues({
		...values,
    x: values.x + 1,
	});
};


  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    })
 }

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

       <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
        <button onClick={updateY}>Update y</button>
    </div>
    </>
  );
};

export default App;