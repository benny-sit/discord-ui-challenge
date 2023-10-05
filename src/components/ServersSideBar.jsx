import DiscordLogo from '/icons/discord-logo.svg';
import download from '/icons/download.svg';
import plus from '/icons/plus.svg';
import compass from '/icons/compass.svg';

const ServerSideBar = () => {
  return (
    <div className="h-screen w-14 p-2 bg-server-side-bg flex flex-col">
      <div className="w-full aspect-square rounded-full bg-server-icon-bg grid place-items-center p-2 hover:brightness-110">
        <div className="icon-discord w-5 aspect-square"></div>
      </div>
      <span className="server-divider my-2"></span>
      <button className="relative w-full aspect-square rounded-xl bg-selected-server-icon-bg grid place-items-center p-2 uppercase text-white text-sm hover:brightness-110">
        HW
        <div className="absolute -left-2 top-1 bottom-1  w-[3px] bg-white rounded-r-md"></div>
      </button>
      <button className="w-full aspect-square rounded-full bg-server-icon-bg grid place-items-center p-2 mt-2 hover:brightness-110">
        <div className="icon-plus w-5 bg-misc-green-icon aspect-square"></div>
      </button>
      <button className="w-full aspect-square rounded-full bg-server-icon-bg grid place-items-center p-2 mt-2 hover:brightness-110">
        <div className="icon-compass w-5 bg-misc-green-icon aspect-square"></div>
      </button>
      <span className="server-divider my-2"></span>
      <button className="w-full aspect-square rounded-full bg-server-icon-bg grid place-items-center p-2 hover:brightness-110">
        <div className="icon-download w-5 bg-misc-green-icon aspect-square"></div>
      </button>
    </div>
  );
};

export default ServerSideBar;
