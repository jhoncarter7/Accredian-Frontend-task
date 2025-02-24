import AnnouncementBar from "./AnnouncementBar";
import NavigationBar from "./NavigationBar";
import SecondaryNav from "./SecondaryNav";

const Header = () => {
    return (
      <div className="flex flex-col w-full">
       
        <AnnouncementBar />
        <NavigationBar />
        <SecondaryNav />
      </div>
    );
  };

export default Header;