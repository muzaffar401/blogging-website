import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Blog6 = () => {
    return (
        <>
            <Navbar />

            <div className="relative w-full h-[300px]">
                <Image
                    src="https://www.ibm.com/blogs/think/wp-content/themes/ibmNorthstar/assets/img/default-leadspace-1440x320.jpg"
                    alt="AI in 2020: From Experimentation to Adoption"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-4xl font-bold text-center">
                        Winning with AI
                    </h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div className="md:w-1/2 space-y-4">
                    <p className="text-lg leading-relaxed text-gray-800">
                        Since the year 2000, 52% of the companies that make up the Fortune 500 have disappeared. They have been acquired, succumbed to performance atrophy, or declared bankruptcy. In this hyper-competitive marketplace, winners and losers are being declared every day. And while artificial intelligence (AI) can be the valve to these pressures, for many, drafting a playbook for actually winning with AI remains daunting.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800">
                        Also, consider a recent IDC Cloud and AI Adoption Survey[1] in which more than 80% of respondents said they plan to move, or repatriate, data and workloads from public cloud environments to private clouds or on-premises locations over the next year, as the initial expectations of a single public cloud provider were not realized. These dynamics add to the confusion that every CEO, CIO, CTO, and CDO faces on a daily basis.
                    </p>
                </div>

                {/* Image next to text */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src="https://www.ibm.com/blogs/think/wp-content/uploads/2018/09/winning-with-ai-x-and-os.jpg"
                        alt="AI adoption image"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="p-6 space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                    So, what precisely is dragging down projects and preventing companies from delivering measurable business value? I see three recurring patterns:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li>
                        Companies have been accumulating data at an amazing pace for years, but are still challenged with how to store, manage, and control access. They need a new, modern approach;
                    </li>
                    <li>
                        The pressure to innovate is mounting. Companies create a chief data office or a data science center of excellence, but do not always have the right model for organizational success;
                    </li>
                    <li>
                        Small successes only scale when models are put into production and companies adapt their business processes, but unfortunately, this doesn’t occur very often. Scale requires platform thinking and technology.
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

export default Blog6;
