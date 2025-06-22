import React from 'react'

function About() {
    return (
        <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16'>

            <div className='max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 animate-slideDown'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500'>
                        About
                    </p>
                </div>

                <div className='bg-gray-900 rounded-xl shadow-lg p-8 mt-6 hover:shadow-blue-400/10 transition-all duration-300 animate-fadeIn'>
                    <p className='text-xl mt-20'>
                        Hello! I'm <span className='font-bold text-blue-400'>Chandru A</span>, a Computer Science and Engineering student at Kongu Engineering College with a CGPA of 8.69. I'm passionate about technology and innovation, always eager to learn new skills and stay updated with emerging trends in the tech world.
                    </p>
                    <br />

                    <p className='text-xl'>
                        I specialize in full-stack development using tools and frameworks like ReactJS, NodeJS, MongoDB, and PostgreSQL. I also have a strong interest in Machine Learning and SQL and I'm certified as a MongoDB Associate Developer. With leadership roles like <span className='font-bold text-blue-400'>Joint Secretary</span> and <span className='font-bold text-blue-400'>Newsletter Team Head</span> of the CSE Association at KEC and internship experience in AI/ML, I thrive in collaborative environments that help me grow both technically and personally.
                    </p>

                    <div className='mt-8'>
                        <h3 className='text-2xl font-bold text-blue-400 mb-4'>Areas of Interest</h3>
                        <div className='flex flex-wrap gap-4'>
                            <div className='bg-blue-500/10 border border-blue-500/30 rounded-lg px-6 py-3 text-blue-300 font-medium hover:bg-blue-500/20 transition-colors duration-300'>
                                Database Management Systems (DBMS)
                            </div>
                            <div className='bg-blue-500/10 border border-blue-500/30 rounded-lg px-6 py-3 text-blue-300 font-medium hover:bg-blue-500/20 transition-colors duration-300'>
                                Computer Networks (CN)
                            </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h3 className='text-2xl font-bold text-blue-400 mb-4'>Achievements</h3>
                        <div className='space-y-4'>
                            <div className='bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500 hover:bg-gray-800/80 transition-colors duration-300'>
                                <p className='text-lg font-medium'>
                                    <span className='text-blue-300'>Best Presenter Team Award</span> – Won 1st Prize for Xenobots presentation at IIT Madras.
                                </p>
                            </div>
                            <div className='bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500 hover:bg-gray-800/80 transition-colors duration-300'>
                                <p className='text-lg font-medium'>
                                    <span className='text-blue-300'>Academic Excellence Award</span> – Recognized for outstanding performance (2022-2023) at KEC.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
