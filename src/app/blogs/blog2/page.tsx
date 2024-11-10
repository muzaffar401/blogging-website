import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const Blog2 = () => {
    return (
        <>
            <Navbar />


            <div className="relative w-full h-[300px]">
                <Image
                    src="/blog2.jpg"
                    alt="image"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-4xl font-bold text-center">Watson Anywhere: The Future</h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div className="md:w-1/2">
                    <p className="text-lg">
                        There’s a paradox in the world of AI: While it’s the largest economic opportunity of our lifetime (estimated to contribute $16 trillion to GDP by 2030), enterprise adoption of AI was less than 4% in 2018. A recent Gartner survey said that the 4% in 2018 has now grown to 14% in 2019. But still, that is meager. This is for a variety of reasons: lack of skills, lack of tools, lack of confidence, etc. But the biggest issue is cultural.
                    </p>
                    <p className="text-lg">
                        For organizations that want to participate in this phase of innovation and wealth creation in technology, the most important thing is a beginner’s mindset; a willingness to try, and an acceptance of failure. Organizations should seek to do 100 AI experiments a year, knowing that more than 50% will fail. Many company cultures are not suited for that. A more typical approach is to rally around one big AI project, committing a lot of people, time and money. I do not advise that approach. AI is about mass experimentation, not one big project implementation. This ain’t ERP.
                    </p>
                </div>

                {/* Image next to text */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src="/blog2.jpg"
                        alt="AI adoption image"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

          

            <Footer />
        </>
    );
}

export default Blog2;