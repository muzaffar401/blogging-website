import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Blog3 = () => {
    return (
        <>
            <Navbar />

            <div className="relative w-full h-[300px]">
                <Image
                    src="/blog4.jpg"
                    alt="AI in 2020: From Experimentation to Adoption"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-4xl font-bold text-center">
                        A New Way to Accelerate Your AI Plans
                    </h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div className="md:w-1/2 space-y-4">
                    <p className="text-lg leading-relaxed text-gray-800">
                        Building artificial intelligence (AI) systems involves more than learning how to perform a specific task from data; it requires a strong data foundation and infrastructure architecture. This foundation, as my colleagues have said on this blog many times, assists organizations large and small as they scale the Ladder to AI.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800">
                        As CDO of this great company, I spend a lot of time architecting data plans for our expansive global enterprise that spans 170 countries. As we grow, and as our data volumes grow, it was only natural that we would increasingly rely on the predictive, automated, and truly cognitive capabilities of AI to help manage and extract as much value from these volumes as we could. And we’re doing just that.
                    </p>
                </div>

                {/* Image next to text */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src="/blog4.jpg"
                        alt="AI adoption image"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="p-6 space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                    The Accelerator melds three critical components to accelerate the journey to becoming an AI enterprise:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>
                        The invaluable feedback garnered from Chief Data Officers (CDOs) at our CDO Summits and other industry events. At its core, this initiative is designed by CDOs, for CDOs;
                    </li>
                    <li>
                        IBM’s own experience across technology, data, organization, and business process transformation;
                    </li>
                    <li>
                        IBM’s extensive investments in AI, global deployment resources, and competencies to streamline and accelerate transformation.
                    </li>
                </ul>

                <p className="text-lg leading-relaxed">
                    The AI Enterprise Accelerator offers foundational models for clients to replicate. These models serve as examples of where and how AI-transformed business processes can generate value and zero in on these five topics:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>Data strategy: We start with understanding the business strategy, then align AI and data resources accordingly.</li>
                    <li>
                        AI Enterprise Data Architecture: A multi-cloud architecture offering seamless integration and movement of data.
                    </li>
                    <li>
                        Automated Metadata Generation: Deep learning and natural language understanding to generate metadata automatically.
                    </li>
                    <li>
                        Data Privacy: Deploying AI resources and automation to meet data privacy regulations.
                    </li>
                    <li>
                        AI Applications: AI Sales Enablement, Contractual Insights, and Risk Insights using advanced AI technologies.
                    </li>
                </ul>
            </div>

            <Footer />
        </>
    );
}

export default Blog3;
