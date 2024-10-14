import React from 'react';
import Image from 'next/image';
import boy from "../images/boy.png";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Navbar />

            <div
                className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50"
                style={{
                    backgroundImage: "url('https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?w=740&t=st=1728942745~exp=1728943345~hmac=ab8bdaae73724d6667ceaecbe46c90588162899a05d65fb93987d6ff6035307d')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Container with low opacity */}
                <div className="max-w-4xl w-full rounded-lg shadow-lg p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <div className="flex flex-col md:flex-row items-center gap-6">

                        {/* Profile Image */}
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-200">
                            <Image
                                src={boy}
                                alt="About Me"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        {/* Bio Text */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                About Me
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Hi! I’m Muzaffar Ahmed, the mind behind this blog. As a passionate technologist and avid writer, I created this platform to share my knowledge about the world of artificial intelligence, web development, and the latest trends in technology. My goal is to make even the most complex tech concepts understandable and engaging for everyone—from beginners to tech enthusiasts.
                            </p>
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                                With years of experience in front-end development, I specialize in creating dynamic, responsive, and user-friendly web interfaces. I’ve built this blog using Next.js and Tailwind CSS, tools that enable me to craft efficient and visually appealing sites that perform well across all devices. Through this blog, I hope to provide value, whether you’re looking for AI insights, coding tutorials, or a deeper understanding of emerging technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
