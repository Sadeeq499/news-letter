import React, { useState } from "react";
import Images from "../asset/Constrant/index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Success from "./Success";
const NewsData = [
  {
    id: 1,
    title: "Product discovery and building what matters",
    icon: Images.IconList,
  },
  {
    id: 2,
    title: "Measuring to ensure updates are a success",
    icon: Images.IconList,
  },
  {
    id: 3,
    title: "And much more!",
    icon: Images.IconList,
  },
];

function NewsLetter() {
  const navigate = useNavigate();

  //------------------------------- form validation------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });
  // --------------------submit handler--------------------

  const SubmitHandler = (data) => {
    const { email } = data;
    navigate("/success", { state: { email } });
  };

  return (
    <>
      <div className="flex flex-col  md:flex-row md:items-center md:justify-center md:bg-DarkSlateGrey md:h-[100vh]">
        {/* illustration on mobile */}
        <div className="md:hidden">
          <img
            src={Images.MobileIllustration}
            alt="illustration"
            className="w-full h-full"
          />
        </div>
        {/* this container contain both image on large screen and text */}
        <div className="md:flex md:flex-row bg-white md:gap-4 md:max-w-5xl md:rounded-lg md:my-3 ">
          {/* text container */}
          <div className="flex flex-col mt-10 my-10 md:max-w-md md:px-8">
            <h1 className="text-3xl font-bold text-start px-5 md:text-5xl ">
              Stay Update!
            </h1>
            <p className="justify-start mt-5 px-5">
              Join 60,000 product managers receiving monthly updates on:
            </p>

            {/* list  */}
            <div className="flex flex-col">
              {NewsData.map((item) => (
                <ul className="flex flex-col mt-5 px-5" key={item.id}>
                  <li className="flex flex-row">
                    <img src={item.icon} alt="check" className="w-5 h-5" />
                    <p className="ml-5 text-base">{item.title}</p>
                  </li>
                </ul>
              ))}
            </div>

            {/* input */}

            <form
              onSubmit={handleSubmit(SubmitHandler)}
              className="flex flex-col mt-10 px-5"
            >
              <span className="flex flex-row justify-between">
                <label className="text-base font-semibold">Email address</label>

                {errors.email?.message && (
                  <p className="text-red-700 text-sm ">
                    {errors.email?.message}
                  </p>
                )}
              </span>
              <input
                type="text"
                id="email"
                {...register("email", {
                  pattern: {
                    value:
                      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                    message: "Enter a valid email",
                  },
                  required: {
                    value: true,
                    message: "Valid email required",
                  },
                })}
                placeholder=" email@company.com"
                className={`max-w-sm h-14 border-2  rounded-md px-5 ${
                  errors.email ? "border-red-700" : "border-gray-300"
                }`}
              />

              <button className="max-w-sm h-14 bg-DarkSlateGrey rounded-md text-white mt-5 text-center  hover:bg-Tomato shadow-lg">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>

          {/* desktop illustration */}

          <div className=" md:my-6 md:mr-4">
            <img
              src={Images.DesktopIllustration}
              alt="illustration"
              className="hidden lg:block w-full h-[550px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
