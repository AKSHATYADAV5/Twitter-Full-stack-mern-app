import React from 'react'
import Image from 'next/image'

const FeedCard: React.FC = () => {
    return (
        <div className="border border-gray-600 p-4">
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                    <Image src="https://avatars.githubusercontent.com/u/147269291?v=4" alt="user-image" width={50} height={50}/>
                </div>
            </div>
        </div>
    );
};

export default FeedCard;