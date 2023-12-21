import React from 'react';
import icon1 from '../photos/restaurant.jpg'
const MaxWidthCard = (props) => {
  let icon2=props.icon;
  return (
    <div className="max-w-sm">
      <div className="shadow-lg rounded overflow-hidden">
        <img className="w-full w-[400px] h-[300px]" src={props.icon} alt="Placeholder" />
        <div className="bg-white p-12">
          <p className="font-light text-xl italic text-gray-800">
            {props.name}
          </p>
          <p className="mt-4 font-light text-sm text-gray-500">{props.text}</p>
          <p className="mt-1 font-semibold text-sm text-gray-900"></p>
        </div>
      </div>
    </div>
  );
};

export default MaxWidthCard;
