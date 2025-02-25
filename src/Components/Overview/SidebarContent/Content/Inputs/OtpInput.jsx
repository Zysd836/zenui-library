import React, { useState, useRef } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

// contents for scrollspy
import { otpInputContents } from '../../../../../Utils/ContentsConfig/InputContents';
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';

const OtpInput = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    const sectionIds = otpInputContents.map((item) => item.href.slice(1));
    const activeSection = useScrollSpy(sectionIds);

    // custom navigation
    const [customNavigatePreview, setCustomNavigationPreview] = useState(true);
    const [customNavigationCode, setCustomNavigationCode] = useState(false);

    const handleCustomNavigationPreview = () => {
        setCustomNavigationPreview(true);
        setCustomNavigationCode(false);
    };

    const handleCustomNavigationCode = () => {
        setCustomNavigationCode(true);
        setCustomNavigationPreview(false);
    };

    // auto navigation
    const [autoNavigationPreview, setAutoNavigationPreview] = useState(true);
    const [autoNavigationCode, setAutoNavigationCode] = useState(false);

    const handleAutoNavigationPreview = () => {
        setAutoNavigationPreview(true);
        setAutoNavigationCode(false);
    };

    const handleAutoNavigationCode = () => {
        setAutoNavigationCode(true);
        setAutoNavigationPreview(false);
    };

    // actions

    const [autoOtp, setAutoOtp] = useState('')

    const length = 4

    const onChange = (value) => {
        setAutoOtp(value)
    }
    const autoNavigationInputs = useRef([])

    const handleAutoNavigationInputChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...autoNavigationInputs.current.map(input => input.value)];

        // Ensure only a single digit is entered per box
        if (/^[0-9]$/.test(value) && value.length === 1) {
            newOtp[index] = value; // Update the OTP array with the new digit
            onChange(newOtp.join('')); // Update the OTP state with the new value

            // Move focus to the next input if it's not the last box
            if (index < length - 1) {
                autoNavigationInputs.current[index + 1].focus();
            }
        } else if (value === '') {
            // Clear the value if the input is empty
            newOtp[index] = '';
            onChange(newOtp.join(''));
        } else {
            // If the input has more than one character, reset it to the first character only
            e.target.value = value.slice(0, 1);
        }
    };

    // for custom navigation
    const handleCustomNavigationInputChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...autoNavigationInputs.current.map(input => input.value)];

        // Ensure only a single digit is entered per box
        if (/^[0-9]$/.test(value) && value.length === 1) {
            newOtp[index] = value; // Update the OTP array with the new digit
            onChange(newOtp.join('')); // Update the OTP state with the new value
        } else if (value === '') {
            // Clear the value if the input is empty
            newOtp[index] = '';
            onChange(newOtp.join(''));
        } else {
            // If the input has more than one character, reset it to the first character only
            e.target.value = value.slice(0, 1);
        }
    };



    const handleAutoNavigationKeydown = (e, index) => {
        if (e.key === 'Backspace' && !autoNavigationInputs.current[index].value && index > 0) {
            autoNavigationInputs.current[index - 1].focus()
        }
    }


    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader text={"custom navigation"} id={"custom_navigation"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Custom OTP input field with navigation controls, allowing users to easily move between digits
                        for seamless entry.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${customNavigatePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${customNavigatePreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleCustomNavigationPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${customNavigationCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleCustomNavigationCode}
                            >
                                Code
                            </button>
                        </div>
                        {customNavigatePreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className='grid grid-cols-4 gap-[10px] w-full 1024px:w-[50%]'>
                                    {
                                        Array.from({length}).map((_, index) => (
                                            <input
                                                key={index}
                                                ref={(el) => (autoNavigationInputs.current[index] = el)}
                                                className='p-3 text-center border border-[#bcbcbc] rounded-md outline-none focus:border-primary'
                                                placeholder='0'
                                                max="1"
                                                onChange={(e) => handleCustomNavigationInputChange(e, index)}
                                                type='number'
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {customNavigationCode && (
                            <Showcode
                                code={`import React, { useState, useRef } from "react";

const OtpInput = () => {
    const length = 4
    const [customNavigatePreview, setCustomNavigationPreview] = useState(true);
    const [customNavigationCode, setCustomNavigationCode] = useState(false);

    const handleCustomNavigationPreview = () => {
        setCustomNavigationPreview(true);
        setCustomNavigationCode(false);
    };

    const handleCustomNavigationCode = () => {
        setCustomNavigationCode(true);
        setCustomNavigationPreview(false);
    };
    const handleCustomNavigationInputChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...autoNavigationInputs.current.map(input => input.value)];
    
        if (/^[0-9]$/.test(value) && value.length === 1) {
            newOtp[index] = value; 
            onChange(newOtp.join('')); 
        } else if (value === '') {
            newOtp[index] = '';
            onChange(newOtp.join(''));
        } else {
            e.target.value = value.slice(0, 1);
        }
    };

    return (
        <div className='grid grid-cols-4 gap-[10px] w-full 1024px:w-[50%]'>
            {
                Array.from({ length }).map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (autoNavigationInputs.current[index] = el)}
                        className='p-3 text-center border border-[#bcbcbc] rounded-md outline-none focus:border-primary'
                        placeholder='0'
                        max="1"
                        onChange={(e) => handleCustomNavigationInputChange(e, index)}
                        type='number'
                    />                         
                ))
            }
        </div>
    );
};

export default OtpInput;
`}
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"Keyboard navigation"} id={"keyboard_navigation"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        OTP input field with keyboard navigation, enabling users to move between digits using arrow keys
                        for quick and efficient entry.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${autoNavigationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${autoNavigationPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleAutoNavigationPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${autoNavigationCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleAutoNavigationCode}
                            >
                                Code
                            </button>
                        </div>
                        {autoNavigationPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className='grid grid-cols-4 gap-[10px] w-full 1024px:w-[50%]'>
                                    {
                                        Array.from({length}).map((_, index) => (
                                            <input
                                                key={index}
                                                ref={(el) => (autoNavigationInputs.current[index] = el)}
                                                className='p-3 text-center border border-[#bcbcbc] rounded-md outline-none focus:border-primary'
                                                placeholder='0'
                                                max="1"
                                                onChange={(e) => handleAutoNavigationInputChange(e, index)}
                                                onKeyDown={(e) => handleAutoNavigationKeydown(e, index)}
                                                type='number'
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {autoNavigationCode && (
                            <Showcode
                                code='
import React, {useRef, useState} from "react";

const OtpInput = () => {

    const [autoOtp, setAutoOtp] = useState("")

    const length = 4

    const onChange = (value)=> {
        setAutoOtp(value)
    }
    const autoNavigationInputs = useRef([])

    const handleAutoNavigationInputChange = (e, index) => {
        const {value} = e.target

        const newOtp = [...autoNavigationInputs.current.map(input => input.value)]

        if(/^[0-9]$/.test(value)){
            newOtp[index] = value

            onChange(newOtp.join(""))

            if(index < length - 1){
                autoNavigationInputs.current[index + 1].focus()
            }
        }else if(value === ""){
            newOtp[index] = ""

            onChange(newOtp.join(""))
        }
            else{
                e.target.value = value.slice(0, 1);
            }
    }


    const handleAutoNavigationKeydown = (e,index) => {
        if(e.key === "Backspace" && !autoNavigationInputs.current[index].value && index > 0){
            autoNavigationInputs.current[index - 1].focus()
        }
    }

    return (
        <div className="grid grid-cols-4 gap-[10px] w-full lg:w-[50%]">
            {
                Array.from({length}).map((_, index) => (
                    <input
                        key={index}
                        ref={(el) => (autoNavigationInputs.current[index] = el)}
                        className="p-3 text-center border border-[#bcbcbc] rounded-md outline-none focus:border-primary"
                        placeholder="0"
                        max="1"
                        onChange={(e) => handleAutoNavigationInputChange(e, index)}
                        onKeyDown={(e) => handleAutoNavigationKeydown(e, index)}
                        type="number"
                    />
                ))
            }
        </div>
    );
};

export default OtpInput;
                '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/input-file' backName='file' forwardName='normal button'
                                    forwardUrl='/components/normal-button'/>
                </div>

                <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]'>
                    <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
                        CONTENTS
                    </h2>
                    {otpInputContents.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={`${
                                activeSection === item.href.slice(1) &&
                                '!text-primary !border-primary'
                            } text-[0.9rem] capitalize transition-all duration-300 text-text border-l border-transparent pl-4`}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </aside>
            <Helmet>
                <title>Form - OTP Input</title>
            </Helmet>
        </>
    );
};

export default OtpInput;
