import React from "react";
import Images from "../asset/Constrant";
import { Link, useLocation } from "react-router-dom";
function Success() {
  const location = useLocation();
  const email = location.state.email;
  return (
    <div className="w-full h-[100vh] pt-16 md:bg-DarkSlateGrey md:pt-20">
      <div className="flex flex-col max-w-sm px-5 space-y-40 md:space-y-4 md:mx-auto md:bg-white md:rounded-xl md:py-5">
        {/* text */}
        <div className="pt-28 space-y-6 md:pt-5 md:my-4 md:space-y-3 ">
          <img src={Images.IconSuccess} alt="success logo" />
          <h1 className="text-4xl font-bold">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>{" "}
            Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>

        <Link
          to={"/"}
          className="max-w-sm h-14 bg-DarkSlateGrey rounded-md text-white mt-5 text-center pt-4 hover:bg-Tomato shadow-md"
        >
          Dismiss message
        </Link>
      </div>
    </div>
  );
}

export default Success;
