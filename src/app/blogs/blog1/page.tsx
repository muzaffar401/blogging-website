import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const Blog1 = () => {
    return (
        <>
            <Navbar/>

        
            <div className="relative w-full h-[300px]">
                <Image
                    src="https://www.ibm.com/blogs/think/wp-content/uploads/2020/01/experimentation-light-image-160-x-800.jpg"
                    alt="AI in 2020: From Experimentation to Adoption"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-4xl font-bold text-center">AI in 2020: From Experimentation to Adoption</h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div className="md:w-1/2">
                    <p className="text-lg">
                        AI has captured the imagination and attention of people globally. But in the business world, the rate of adoption of artificial intelligence has lagged behind the level of interest through 2019. Even though we hear that most business leaders believe AI provides a competitive advantage, up until recently, some industry watchers have pegged enterprise adoption at less than 20%.
                    </p>
                    <p className="text-lg">
                        But as we enter 2020, we’re spotting an uptick, not only in interest but in AI adoption. This uptick is reaffirmed by a recent global survey commissioned by IBM. The survey, From Roadblock to Scale: The Global Sprint Towards AI, polled more than 4,500 technology decision-makers to gauge the current and future states of AI deployment across the U.S., Europe, and China.
                    </p>
                </div>

                {/* Image next to text */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src="https://www.ibm.com/blogs/think/wp-content/uploads/2020/01/AI-adoption-image.jpg"
                        alt="AI adoption image"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">AI Adoption on the Rise</h2>
                <p className="mb-4">
                    Results from the Roadblocks to Scale survey indicate that while there is still work to be done, advances in data discovery and management, skills training, and AI explainability are driving the rate of AI adoption faster than many predicted.
                </p>
                <p className="mb-4">
                    For example, 45% of the respondents from large companies (1,000+ employees) said they have adopted AI, while 29% of small and medium-sized businesses (under 1,000 employees) responding said they have adopted the technology. These numbers are significantly higher than some industry watchers have estimated to date.
                </p>
                <h3 className="text-xl font-semibold mb-2">A Glimpse at the Numbers</h3>
                <p className="mb-4">
                    <strong>Skills:</strong> Major roadblocks are still holding companies back from the benefits of AI. Amongst respondents, 37% cite limited AI expertise or knowledge as a hindrance to successful AI adoption, followed by increasing data complexities and siloed data (31%) and lack of tools for developing AI models (26%).
                </p>
                <p className="mb-4">
                    <strong>Trust:</strong> Trust is part of the bedrock of AI’s deployment. Globally, 78% of respondents say it is very or critically important that they can trust their AI’s output is fair, safe, and reliable. Additionally, being able to explain how AI arrived at a decision is universally important (83%).
                </p>
                <p className="mb-4">
                    <strong>Data:</strong> Companies currently deploying AI technologies are more likely to use a hybrid cloud (38% adopted) or hybrid multicloud (17% adopted), as AI success is fed by data, which is pervasive across all clouds.
                </p>
            </div>

            <Footer/>
        </>
    );
}

export default Blog1;