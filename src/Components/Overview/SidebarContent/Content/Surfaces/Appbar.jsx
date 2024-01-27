import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import Showcode from "../../../../../Shared/ShowCode";

// icons
import { FiMenu } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Appbar = () => {
  // basicApp
  const [basicAppPreview, setBasicAppPreview] = useState(true);
  const [basicAppCode, setBasicAppCode] = useState(false);

  const handleBasicAppPreview = () => {
    setBasicAppPreview(true);
    setBasicAppCode(false);
  };

  const handleBasicAppCode = () => {
    setBasicAppCode(true);
    setBasicAppPreview(false);
  };

  // appbarwithsearch
  const [appBarWithSearchPreview, setAppBarWithSearchPreview] = useState(true);
  const [appBarWithSearchCode, setAppBarWithSearchCode] = useState(false);

  const handleAppbarSearchPreview = () => {
    setAppBarWithSearchPreview(true);
    setAppBarWithSearchCode(false);
  };

  const handleAppbarSearchCode = () => {
    setAppBarWithSearchCode(true);
    setAppBarWithSearchPreview(false);
  };

  // appbarwithicons
  const [appbarWithIconsPreview, setAppbarWithIconsPreview] = useState(true);
  const [appbarWithIconsCode, setAppbarWithIconsCode] = useState(false);

  const handleAppbarWithIconsPreview = () => {
    setAppbarWithIconsPreview(true);
    setAppbarWithIconsCode(false);
  };

  const handleAppbarWithIconsCode = () => {
    setAppbarWithIconsCode(true);
    setAppbarWithIconsPreview(false);
  };

  const [isLogout, setIsLogout] = useState(false);

  return (
    <>
      <aside>
        <ContentHeader text={"app bar with manu & profile"} />

        <p className="w-[80%] text-text text-[1rem]">
          This is the card skeleton. The skeleton provided here basically shows
          the information of an account.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                basicAppPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleBasicAppPreview}>
              Preview
            </button>
            <button
              className={`${
                basicAppCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleBasicAppCode}>
              Code
            </button>
          </div>
          {basicAppPreview && (
            <div className="p-8 mb-4 flex flex-col items-center gap-5 justify-center">
              <div className="p-4 bg-primary w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
                  <h2 className="text-[1.3rem] text-secondary font-[600]">
                    Logo
                  </h2>
                </div>
                {!isLogout && (
                  <FaRegCircleUser className="text-secondary text-[1.5rem] cursor-pointer" />
                )}
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`${
                    isLogout ? "!bg-[#b3b3b3]" : "!bg-[#83c2fd]"
                  } cursor-pointer px-4 py-2 rounded-lg before:bg-transparent before:w-[20px] before:h-[20px] before:rounded-full before:absolute relative before:top-[-12%] before:right-[-15%] before:cursor-pointer after:bg-primary after:absolute after:top-[-12%] after:left-[-15%] after:cursor-pointer  after:h-[20px] after:w-[20px] after:rounded-full transition-all duration-300 ${
                    isLogout && "after:!bg-transparent before:!bg-primary "
                  }`}
                  onClick={() => setIsLogout(!isLogout)}></div>
                <span
                  className={`text-[1.2rem] font-[500] ${
                    isLogout ? "text-text" : "text-primary"
                  }`}>
                  Logout
                </span>
              </div>
            </div>
          )}

          {basicAppCode && (
            <Showcode
              code='
import React, { useState } from "react";

// icons
import { FiMenu } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";


const AppbarWithUsericon = () => {
  const [isLogout, setIsLogout] = useState(false);
  return (
    <>
      <div className="p-4 bg-primary w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
          <h2 className="text-[1.3rem] text-secondary font-[600]">Logo</h2>
        </div>
        {!isLogout && (
          <FaRegCircleUser className="text-secondary text-[1.5rem] cursor-pointer" />
        )}
      </div>
      <div className="flex items-center gap-3">
        <div
          className={`${
            isLogout ? "!bg-[#b3b3b3]" : "!bg-[#83c2fd]"
          } cursor-pointer px-4 py-2 rounded-lg before:bg-transparent before:w-[20px] before:h-[20px] before:rounded-full before:absolute relative before:top-[-12%] before:right-[-15%] before:cursor-pointer after:bg-primary after:absolute after:top-[-12%] after:left-[-15%] after:cursor-pointer  after:h-[20px] after:w-[20px] after:rounded-full transition-all duration-300 ${
            isLogout && "after:!bg-transparent before:!bg-primary "
          }`}
          onClick={() => setIsLogout(!isLogout)}></div>
        <span
          className={`text-[1.2rem] font-[500] ${
            isLogout ? "text-text" : "text-primary"
          }`}>
          Logout
        </span>
      </div>
    </>
  );
};

export default AppbarWithUsericon;
              '
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"app bar with search bar"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the image gallery skeleton. Here the skeleton is created for
          the image, similar to the grid layout.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                appBarWithSearchPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleAppbarSearchPreview}>
              Preview
            </button>
            <button
              className={`${
                appBarWithSearchCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleAppbarSearchCode}>
              Code
            </button>
          </div>
          {appBarWithSearchPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="px-4 py-2 bg-primary w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
                  <h2 className="text-[1.3rem] text-secondary font-[600]">
                    Logo
                  </h2>
                </div>
                <div className="relative">
                  <input
                    type="search"
                    className="pl-10 py-2 bg-[#104c853d] border-none outline-none text-secondary placeholder:text-[#ffffffa8] "
                    placeholder="Search..."
                  />
                  <CiSearch className=" absolute top-2 left-3 text-secondary text-[1.4rem]" />
                </div>
              </div>
            </div>
          )}

          {appBarWithSearchCode && (
            <Showcode
              code='
import React, { useState } from "react";

// icons
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


const AppbarWithSearchbar = () => {

  return (
    <>
      <div className="px-4 py-2 bg-primary w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
          <h2 className="text-[1.3rem] text-secondary font-[600]">Logo</h2>
        </div>
        <div className="relative">
          <input
            type="search"
            className="pl-10 py-2 bg-[#104c853d] border-none outline-none text-secondary placeholder:text-[#ffffffa8] "
            placeholder="Search..."
          />
          <CiSearch className=" absolute top-2 left-3 text-secondary text-[1.4rem]" />
        </div>
      </div>
    </>
  );
};

export default AppbarWithSearchbar;  
            '
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"app bar with search and icons"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the skeleton of a social post, and you can also use it as a
          card. Here is image, name, bio and post details.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                appbarWithIconsPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleAppbarWithIconsPreview}>
              Preview
            </button>
            <button
              className={`${
                appbarWithIconsCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleAppbarWithIconsCode}>
              Code
            </button>
          </div>
          {appbarWithIconsPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="px-4 py-2 bg-primary w-full flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-4">
                    <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
                    <h2 className="text-[1.3rem] text-secondary font-[600]">
                      Logo
                    </h2>
                  </div>
                  <div className="relative">
                    <input
                      type="search"
                      className="pl-10 py-2 bg-[#104c853d] border-none outline-none text-secondary placeholder:text-[#ffffffa8] "
                      placeholder="Search..."
                    />
                    <CiSearch className=" absolute top-2 left-3 text-secondary text-[1.4rem]" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <IoCartOutline className="text-[1.8rem] text-[#ffffff]" />
                    <div className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
                      <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                        10
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <IoIosNotifications className="text-[1.8rem] text-[#ffffff]" />
                    <div className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
                      <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                        10
                      </span>
                    </div>
                  </div>
                  <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]" />
                </div>
              </div>
            </div>
          )}

          {appbarWithIconsCode && (
            <Showcode
              code='
import React, { useState } from "react";

// icons
import { FiMenu } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const AppbarWithIcons = () => {

  return (
    <>
      <div className="px-4 py-2 bg-primary w-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
            <h2 className="text-[1.3rem] text-secondary font-[600]">Logo</h2>
          </div>
          <div className="relative">
            <input
              type="search"
              className="pl-10 py-2 bg-[#104c853d] border-none outline-none text-secondary placeholder:text-[#ffffffa8] "
              placeholder="Search..."
            />
            <CiSearch className=" absolute top-2 left-3 text-secondary text-[1.4rem]" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <IoCartOutline className="text-[1.8rem] text-[#ffffff]" />
            <div className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
              <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                10
              </span>
            </div>
          </div>

          <div className="relative">
            <IoIosNotifications className="text-[1.8rem] text-[#ffffff]" />
            <div className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
              <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                10
              </span>
            </div>
          </div>
          <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]" />
        </div>
      </div>
    </>
  );
};

export default AppbarWithIcons;              
              '
            />
          )}
        </div>

        <OverviewFooter />
      </aside>
      <Helmet>
        <title>Surfaces - App Bar</title>
      </Helmet>
    </>
  );
};

export default Appbar;