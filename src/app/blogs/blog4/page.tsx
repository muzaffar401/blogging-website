import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Blog4 = () => {
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
                        AI is Not Magic: It’s Time to Demystify and Apply
                    </h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div className="md:w-1/2 space-y-4">
                    <p className="text-lg leading-relaxed text-gray-800">
                        For centuries, electricity was thought to be the domain of sorcerers – magicians who left audiences puzzled about where it came from and how it was generated. And although Benjamin Franklin and his contemporaries were well aware of the phenomena when he proved the connection between electricity and lightning, he had difficulty envisioning a practical use for it in 1752. In fact, his most prized invention had more to do with avoiding electricity – the lightning rod. All new innovations go through a similar evolution: dismissal, avoidance, fear, and perhaps finally acceptance.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800">
                        Almost two hundred years after Franklin’s lightning experiment, man was routinely harnessing electricity, even though we still lacked a deep understanding of its origins. The Lineman’s Handbook of 1928 begins with the line: “What is electricity? – No one knows.” But according to this field guide for early electrical linemen, understanding the make-up of electricity wasn’t important. The more significant aspect was knowing how electricity could be generated and safely used for light, heat and power.
                    </p>
                </div>

                {/* Image next to text */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src="https://www.ibm.com/blogs/think/wp-content/uploads/2019/03/lightening-image-600x536.jpg"
                        alt="AI adoption image"
                        layout="fill"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className="p-6 space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                    Much like electricity was driven by basic components such as resistors, capacitors, diodes, etc., AI is being driven by modern software componentry:
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

export default Blog4;
