/* eslint-disable no-constant-condition */
const ChannelSideBar = () => {
  return (
    <div className="flex flex-col items-center min-w-[200px] w-[240px] bg-channel-selector-bg">
      <div className="flex items-center justify-between text-misc-logo border-b-2 border-misc-horizontal-separator font-semibold text-sm w-full px-3 h-11">
        <p>Hello World</p>
        <button>
          <div className="icon-arrow-down w-5"></div>
        </button>
      </div>

      <div className="mt-5 w-full  text-muted-text font-bold">
        <div className="flex justify-between items-center pr-4">
          <button className="flex items-center text-[11px]">
            <div className="icon-arrow-down w-3 mx-1 uppercase"></div>
            TEXT CHANNELS
          </button>
          <button className="">
            <div className="icon-plus w-4 h-4"></div>
          </button>
        </div>
        <ul className="w-full px-2 space-y-1 mt-1">
          <li>
            <button
              className={`group/channel relative flex w-full p-[6px] items-center text-[13px] leading-none rounded-md ${
                true
                  ? 'hover:bg-selected-channel-bg hover:text-misc-logo'
                  : 'text-misc-logo bg-selected-channel-bg'
              }`}
            >
              <div className="icon-hash w-4 bg-muted-text mr-1"></div>
              chat
              <button
                className={`absolute right-8 top-1/2 -translate-y-1/2 ${
                  (true && 'translate-x-3 opacity-0') || ''
                } group-hover/channel:translate-x-0 group-hover/channel:opacity-100 group-hover/channel:transition-all group-hover/channel:duration-300 group-hover/channel:delay-200`}
              >
                <div className="icon-create-invite w-[14px]"></div>
              </button>
              <button
                className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                  (true && 'translate-x-3 opacity-0') || ''
                } group-hover/channel:translate-x-0 group-hover/channel:opacity-100 group-hover/channel:transition-all group-hover/channel:duration-300`}
              >
                <div className="icon-settings w-[14px]"></div>
              </button>
            </button>
          </li>
          <li>
            <button
              className={`group/channel relative flex w-full p-[6px] items-center text-[13px] leading-none rounded-md ${
                false
                  ? 'hover:bg-selected-channel-bg hover:text-misc-logo'
                  : 'text-misc-logo bg-selected-channel-bg'
              }`}
            >
              <div className="icon-hash w-4 bg-muted-text mr-1"></div>
              general
              <button
                className={`absolute right-8 top-1/2 -translate-y-1/2 ${
                  (false && 'translate-x-3 opacity-0') || ''
                } group-hover/channel:translate-x-0 group-hover/channel:opacity-100 group-hover/channel:transition-all group-hover/channel:duration-300 group-hover/channel:delay-200`}
              >
                <div className="icon-create-invite w-[14px]"></div>
              </button>
              <button
                className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                  (false && 'translate-x-3 opacity-0') || ''
                } group-hover/channel:translate-x-0 group-hover/channel:opacity-100 group-hover/channel:transition-all group-hover/channel:duration-300`}
              >
                <div className="icon-settings w-[14px]"></div>
              </button>
            </button>
          </li>
        </ul>
      </div>

      <div className="mt-5 w-full  text-muted-text font-bold">
        <div className="flex justify-between items-center pr-4">
          <button className="flex items-center text-[11px]">
            <div className="icon-arrow-down w-3 mx-1 uppercase"></div>
            VOICE CHANNELS
          </button>
          <button className="">
            <div className="icon-plus w-4 h-4"></div>
          </button>
        </div>
        <ul className="w-full px-2 space-y-2 mt-2">
          <li>
            <button
              className={`group/channel capitalize relative flex w-full p-[6px] items-center text-[13px] leading-none rounded-md ${
                true
                  ? 'hover:bg-selected-channel-bg hover:text-misc-logo'
                  : 'text-misc-logo bg-selected-channel-bg'
              }`}
            >
              <div className="icon-speaker w-4 bg-muted-text mr-1"></div>
              General
              <button
                className={`absolute right-8 top-1/2 -translate-y-1/2 ${
                  (true && 'translate-x-3 opacity-0') || ''
                } group-hover/channel:translate-x-0 group-hover/channel:opacity-100 group-hover/channel:transition-all group-hover/channel:duration-300 group-hover/channel:delay-200`}
              >
                <div className="icon-create-invite w-[14px]"></div>
              </button>
              <button
                className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                  (true && 'translate-x-3 opacity-0') || ''
                } group-hover/channel:translate-x-0 group-hover/channel:opacity-100 group-hover/channel:transition-all group-hover/channel:duration-300`}
              >
                <div className="icon-settings w-[14px]"></div>
              </button>
            </button>
          </li>
        </ul>
      </div>

      <div className="mt-auto w-full h-12 bg-user-info-bg flex items-center px-2">
        <div className=" aspect-square rounded-full bg-user-icon-bg grid place-items-center p-[7px]">
          <div className="icon-discord w-[22px] aspect-square"></div>
        </div>
        <div className="mx-1 font-semibold shrink">
          <p className="text-sm text-misc-logo leading-none truncate">User</p>
          <p className="text-xs text-muted-text leading-none  truncate">
            another_user1
          </p>
        </div>
        <div className="flex items-center justify-between ml-auto max-w-[90px] grow">
          <button className="hover:brightness-95">
            <div className="icon-mute w-5"></div>
          </button>
          <button className="hover:brightness-95">
            <div className="icon-headphones w-5"></div>
          </button>
          <button className="hover:brightness-95">
            <div className="icon-settings w-5"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChannelSideBar;
