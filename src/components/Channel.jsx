import happyEmoji from '/emojis/happy.png';

const Channel = () => {
  return (
    <div className="self-stretch grow bg-channel-bg flex flex-col">
      {/* CHANNEL HEADER */}
      <div className="flex items-center  text-misc-logo border-b-2 border-misc-horizontal-separator font-semibold text-sm w-full px-3 h-11">
        <div className="icon-hash w-5 mr-2"></div>
        <p id="channel-header">general</p>
        {/* OPTIONS */}
        <div className="flex items-center ml-auto gap-3">
          <button>
            <div className="icon-message-thread w-5"></div>
          </button>
          <button>
            <div className="icon-bell w-5"></div>
          </button>
          <button>
            <div className="icon-pin w-5"></div>
          </button>
          <button>
            <div className="icon-users w-5"></div>
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-sm text-misc-logo bg-server-side-bg py-px text-sm pl-2 pr-6 placeholder:text-gray-text  max-w-[140px] focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2">
              <div className="icon-search w-[14px] bg-gray-text "></div>
            </button>
          </div>
          <button>
            <div className="icon-inbox w-5"></div>
          </button>
          <button>
            <div className="icon-circle-question bg-misc-green-icon w-5"></div>
          </button>
        </div>
      </div>

      {/* CHANNEL CONTENT */}
      <div className="grow px-3 flex flex-col justify-end w-full">
        {/* PLACEHOLDER */}
        <div className="flex flex-col gap-3 w-fit pb-2">
          <div className="rounded-full p-[10px] bg-message-input-bg aspect-square w-fit">
            <div className="icon-hash w-9"></div>
          </div>
          <h2 className="text-3xl text-misc-logo font-bold leading-none">
            Welcome to #general!
          </h2>
          <p className="text-sm text-muted-text font-semibold">
            This is the start of the #general channel
          </p>
          <button className="text-blue-text capitalize flex text-sm hover:brightness-90">
            <div className="icon-pencil w-5 bg-blue-text mr-1"></div>
            Edit Channel
          </button>
        </div>
      </div>

      {/* CHANNEL INPUT */}
      <div className="px-3 py-4">
        <div className="flex items-center w-full rounded-md bg-message-input-bg pl-3 pr-2 py-[6px]">
          <button className="mr-3">
            <div className="icon-circle-plus w-5"></div>
          </button>
          <input
            type="text"
            className="grow placeholder:text-gray-text placeholder:font-semibold placeholder:text-sm text-misc-logo bg-transparent focus:outline-none"
            placeholder="Message #general"
          />
          <div className="flex items-center pl-2 gap-3">
            <button>
              <div className="icon-gift w-5"></div>
            </button>
            <button>
              <div className="icon-gif w-5"></div>
            </button>
            <button>
              <div className="icon-sticker w-[18px]"></div>
            </button>
            <button className="group/emoji">
              <img
                src={happyEmoji}
                alt=""
                className="w-5 grayscale group-hover/emoji:grayscale-0"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
