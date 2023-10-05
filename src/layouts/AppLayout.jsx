import Channel from '../components/Channel';
import ChannelSideBar from '../components/ChannelSideBar';
import ServerSideBar from '../components/ServersSideBar';

const AppLayout = () => {
  return (
    <div className="flex items-stretch h-full ">
      <ServerSideBar />
      <ChannelSideBar />
      <Channel />
    </div>
  );
};

export default AppLayout;
