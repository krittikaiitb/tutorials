const Header = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-text-color-dark-text-primary w-[1199px] h-[190px] overflow-hidden text-left text-sm text-text-color-dark-text-primary font-medium-medium-regular-text">
      <div className="absolute top-[36px] left-[94px] text-18xl leading-[20px] font-lateef text-black flex items-center w-[133px] h-10">
        BITSBIDS
      </div>
      <div className="absolute top-[33px] left-[243px] rounded-spacing-1 flex flex-row items-center justify-center py-spacing-2 px-spacing-3 gap-[12px] text-text-color-light-tritary-text border-[1px] border-solid border-button-stroke-stroke">
        <div className="self-stretch w-[277px] flex flex-row items-center justify-start gap-[16px]">
          <div className="flex-1 relative leading-[20px]">Search Producs</div>
          <div className="w-[109px] flex flex-row items-center justify-end text-text-color-light-primary-text">
            <div className="relative leading-[20px] flex items-center w-[85px] shrink-0">
              All categories
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconarrow.svg"
            />
          </div>
        </div>
        <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-color-gray-gray-100" />
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/iconsearch.svg"
        />
      </div>
      <div className="absolute top-[45px] left-[632px] flex flex-row items-center justify-center gap-[12px] text-text-color-light-secondary-text">
        <div className="relative leading-[20px] flex items-center w-24 shrink-0">
          About us
        </div>
        <div className="relative leading-[20px] flex items-center w-24 shrink-0">
          Contact us
        </div>
        <div className="relative leading-[20px] flex items-center w-24 shrink-0">{`Help & support`}</div>
      </div>
      <div className="absolute top-[44px] left-[1052px] w-[127.5px] h-6 flex flex-row items-center justify-end">
        <div className="w-[84px] flex flex-row items-center justify-center gap-[12px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/iconinstagram.svg"
          />
          <img className="relative w-3 h-[18px]" alt="" src="/iconfb.svg" />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/icontelegram.svg"
          />
        </div>
      </div>
      <div className="absolute top-[99px] left-[0px] bg-black w-[1199px] h-[91px]" />
      <div className="absolute top-[131px] left-[842px] w-[340px] flex flex-row items-center justify-start gap-[20px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/iconsign-in.svg"
          />
          <div className="flex-1 relative leading-[20px]">Sign in</div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/iconfavorides.svg"
          />
          <div className="flex-1 relative leading-[20px]">Favorites</div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[8px]">
          <div className="w-[60px] flex flex-row items-center justify-end gap-[4px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/iconcard.svg"
            />
            <div className="flex-1 relative leading-[20px]">Cart</div>
          </div>
          <div className="rounded-11xl bg-color-green-green-400 flex flex-col items-end justify-center py-0.5 px-2 text-right">
            <div className="relative leading-[20px] flex items-center w-2 h-[19px] shrink-0">
              3
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[132px] left-[45px] w-[144.8px] flex flex-row items-center justify-start gap-[4px] text-xl">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/iconcategories.svg"
        />
        <b className="flex-1 relative leading-[20px]">Categories</b>
      </div>
      <div className="absolute top-[136px] left-[239px] flex flex-row items-center justify-center text-right text-mini">
        <div className="w-[66.4px] flex flex-row items-center justify-start">
          <div className="flex-1 relative leading-[20px]">English</div>
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/iconarrow1.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[34px] left-[44px] w-[45px] h-[42px] object-cover"
        alt=""
        src="/image-19@2x.png"
      />
    </div>
  );
};

export default Header;
