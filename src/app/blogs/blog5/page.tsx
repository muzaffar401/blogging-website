import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Blog5 = () => {
    return (
        <>
            <Navbar />

            <div className="relative w-full h-[300px]">
                <Image
                    src="/blog5.jpg"
                    alt="AI in 2020: From Experimentation to Adoption"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                />
                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-40">
                    <h1 className="text-4xl font-bold text-center">
                    Scaling the AI Ladder
                    </h1>
                </div>
            </div>

            {/* Responsive text and image section */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                {/* Text content */}
                <div className="md:w-1/2 space-y-4">
                    <p className="text-lg leading-relaxed text-gray-800">
                        The evolution of the auto industry is similar in form to the currently nascent world of artificial intelligence (AI). And like the auto industry, in order for AI to flourish, organizations must adopt and embrace a prerequisite set of conditions, or building blocks.

                        For example, AI requires machine learning; machine learning requires analytics; and analytics requires the right data and information architecture. In other words, there is no AI without IA (information architecture). These capabilities form the solid rungs of what we call the AI Ladder – the increasing levels of analytic sophistication that lead to, and buttress, a thriving AI environment.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800">
                        AI is about mimicking and improving the human function; said another way, bringing human features to technology. In the consumer world, that is mimicking speech, vision, and daily interactions. In the enterprise, it is mimicking and improving enterprise functions, such as Logistics, Marketing, Finance, Operations, and HR. While it is similar in concept, the difference is as stark as the Cugnot Steam Trolley and a Tesla.
                    </p>
                </div>

                {/* Image next to text */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Image
                        src="/blog5.jpg"
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
                        Hybrid Data Management, provides a platform to manage all data types across all sources and destinations. It incorporates all forms of data management (SQL, NoSQL) and all flavors of techniques (row store, column store, document store, Hadoop), collectively optimized with rich SQL access. An effective data strategy has to be singular in approach and that starts with hybrid data management.
                    </li>
                    <li>
                        Unified Governance & Integration provides the components that make data easily and securely available across cloud platforms, by enabling robust data preparation, policy creation, authorization, auditing, and more.
                    </li>
                    <li>
                        Data Science & Business Analytics combine to provide holistic and collaborative analysis of all data types, and empower people to economically extract meaning from, and interpret, complex data sets. Key components of this platform includes analytics tools, advanced statistical models and machine learning.
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

export default Blog5;
