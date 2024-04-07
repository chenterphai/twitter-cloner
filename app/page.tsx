import Image from "next/image";
import LeftSidebarForNavbar from "@/components/leftSidebarForNavbar";
import MainBody from "@/components/MainBody";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <div className="w-full h-full flex items-center justify-center relative bg-white">
        <div className="max-w-screen-xl w-full h-full flex relative">
          <LeftSidebarForNavbar />
          <MainBody />
          <section className="sticky top-0 w-[285px] ml-3 flex items-stretch right-0 flex-col h-screen">
            <div>
              <div className="relative w-full h-full py-3">
                <label htmlFor="searchBar" className="absolute top-0 left-4 justify-center h-full flex items-center">
                  <BsSearch className="w-5 h-5 text-gray-400" />
                </label>
                <input
                  id="searchBar"
                  type="text"
                  placeholder="Search twitter"
                  className="w-full h-full text-gray-400 placeholder:text-gray-200 rounded-full pr-8 pl-12 py-4 outline-none bg-gray-100" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
