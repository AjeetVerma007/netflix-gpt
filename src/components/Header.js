import React, { use } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        console.log(error);
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-50"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex p-4">
        <img
          className="w-10 h-12 "
          alt="userIcon"
          src="https://occ-0-2590-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZHGvGso7Ju34l91G3R3IEDBQ6EBNSqP1yYoXEQPp12U7NgE037YbJLjtjQS-KIqTPkAbsnDG0vKEoWSp66TSJ0eKhB2ZHI.png?r=6fb"
        ></img>
        <button
          className="ml-5 px-4 py-2 bg-red-600 hover:bg-red-700 
         text-white font-bold rounded transition duration-300 ease-in-out"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
