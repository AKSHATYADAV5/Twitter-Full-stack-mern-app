import React from 'react';
import Image from 'next/image';
import {BiMessageRounded,BiUpload} from "react-icons/bi";
import {FaRetweet} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai";

const FeedCard: React.FC = () => {
    return (
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-al">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <Image src="https://avatars.githubusercontent.com/u/147269291?v=4" alt="user-image" width={50} height={50}/>
                </div>
                <div className="col-span-11">
                    <h5>Akshat</h5>
                    <p>
                        Some random text
                    </p>
                    <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
                        <div>
                            <BiMessageRounded/>                            
                        </div>
                        <div>
                            <FaRetweet/>
                        </div>
                        <div>
                            <AiOutlineHeart/>
                        </div>
                        <div>
                            <BiUpload/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedCard;