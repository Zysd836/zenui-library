import React, { useState } from 'react';

// components
import OverviewFooter from '../../../../../Shared/OverviewFooter';
import ContentHeader from '../../../../../Shared/ContentHeader';

// contents for scrollspy
import { randomContents } from '../../../../../Utils/ContentsConfig/RandomContent';
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';

// react helmet
import { Helmet } from 'react-helmet';

// showing the code
import Showcode from '../../../../../Shared/ShowCode';

const Code = () => {
  const sectionIds = randomContents.map((item) => item.href.slice(1));
  const activeSection = useScrollSpy(sectionIds);

  // code
  const [codePreview, setCodePreview] = useState(true);
  const [codeCode, setCodeCode] = useState(false);

  const handleCodePreview = () => {
    setCodePreview(true);
    setCodeCode(false);
  };

  const handleCodeCode = () => {
    setCodeCode(true);
    setCodePreview(false);
  };

  return (
    <>
      <aside className='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
        <div>
          <ContentHeader text={'Code'} id={'code'} />

          <p className='w-full 425px:w-[80%] text-text text-[1rem]'>
            This is a code display component. Showcase code snippets with
            clarity and formatting.
          </p>

          <div className='w-full 425px:w-[80%] border border-border rounded mt-8'>
            <div className='relative'>
              <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
                  codePreview
                    ? 'translate-x-[0px] !w-[100px]'
                    : 'translate-x-[107px] rounded-br'
                }`}
              ></div>
              <button
                className={`${
                  codePreview && 'text-tabTextColor'
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleCodePreview}
              >
                Preview
              </button>
              <button
                className={`${
                  codeCode && 'text-tabTextColor'
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleCodeCode}
              >
                Code
              </button>
            </div>
            {codePreview && (
              <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                <div className='bg-[#d1d1d180] text-[#000000] rounded-md py-1 px-4 tracking-wider font-mono font-[500]'>
                  npm i @zenui
                </div>
              </div>
            )}

            {codeCode && (
              <Showcode
                code='
<div className="bg-[#d1d1d180] text-[#000000] rounded-md py-1 px-4 tracking-wider font-sans font-[600]">
     npm i @zenui
</div>
                '
              />
            )}
          </div>

          <OverviewFooter
            backUrl='/components/ads-card'
            backName='ads card'
            forwardName='snippet'
            forwardUrl='/components/snippet'
          />
        </div>

        <div className='1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]'>
          <h2 className='text-[0.9rem] font-[600] text-text tracking-widest'>
            CONTENTS
          </h2>
          {randomContents.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`${
                activeSection === item.href.slice(1) &&
                '!text-primary !border-primary'
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </aside>
      <Helmet>
        <title>Randoms - Code</title>
      </Helmet>
    </>
  );
};

export default Code;
