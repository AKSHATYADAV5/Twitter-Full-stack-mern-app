import React from 'react';
import {BsTwitter,BsBell,BsEnvelope, BsBookmark} from 'react-icons/bs'
// import {BsSearch} from 'react-icons/bs'
import {BiHash, BiHomeCircle, BiMoney, BiUser} from 'react-icons/bi'
import { SlOptions } from 'react-icons/sl';
import Image from "next/image";
import { GoogleLogin } from '@react-oauth/google';
import FeedCard from "@/components/FeedCard";

// const inter = Inter({subsets:["latin"]});

interface TwitterSidebarButton{
  title:string;
  icon:React.ReactNode;
}
const sidebarMenuItems:TwitterSidebarButton[] = [
  {title:"Home", 
    icon:<BiHomeCircle />,
  },
  {title:"Explore", 
    icon:<BiHash />
  },
  {title:"Notifications", icon:<BsBell />},
  {title:"Messages", icon:<BsEnvelope />},
  {title:"Bookmarks", icon:<BsBookmark/>},
  {title:"Twitter Blue", icon:<BiMoney />},
  // {title:"Lists", icon:<BsListCheck />},
  {title:"Profile", icon:<BiUser />},
  {title:"More Options", icon:<SlOptions/>},
  // {title:"More", icon:<BsThreeDotsVertical />},
]

export default function Home() {
  const handleLoginWithGoogle = useCallback((cred:CredentialResponse) => {
    
  },[])

  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 ml-28">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item)=>(
                <li 
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2"
                key={item.title}>
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] font-semibold py-2 px-4 text-lg rounded-full w-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3">
          <div className="p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl">New to Twitter?</h1>
            <GoogleLogin onSuccess={(cred) => console.log(cred)}/>
          </div>
        </div>
      </div>
    </div>
  );
}