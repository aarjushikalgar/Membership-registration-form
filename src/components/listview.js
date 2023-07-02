import React, { useState } from 'react';
import CardInfo from './cardinfo';
import Register from './register';
import Cardinfo from './cardinfo';

export default function Listview(props) {
  const arr = props.arr;
  const [isList, setIsList] = useState(true);
  const [isCard, setIsCard] = useState(false);
 const [userInfo,setUserInfo] =  useState();

  const navToCard = (event,index) => {
   setUserInfo(arr[index]);
    setIsList(false);
    setIsCard(true);
  };

  return (
    <div>
      <h1>User Details</h1>
      {isList &&
        arr.map((x, index) => {
          return (
            <div
              key={index}
              style={{ border: '2px solid black', margin: '10px', padding: '5px' }}
              onClick= {(event)=> {
                navToCard(event,index);
            }
              }
            >
              {x.name}
            </div>
          );
        })}
      <div>{ isCard && <Cardinfo userinfo = {userInfo}></Cardinfo>}</div>
    </div>
  );
}

