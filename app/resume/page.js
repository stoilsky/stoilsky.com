import Image from 'next/image';
import Link from 'next/link';
import "../global.css";

export const metadata = {
    title: 'Stoil Stoychev: Resume',
    description: 'Resume of Stoil Stoychev, a software engineer and author of Stoilsky.com'
};

export default function ResumePage() {
    return (
        <div className="font-sans min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-4xl mx-auto p-5 pt-10">
                {/* Header Section */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-16"></div>
                    <div className="flex flex-col md:flex-row p-6 -mt-10">
                        <div className="md:ml-4 flex justify-center md:justify-start">
                            <Image
                                src="/Stoil.jpg"
                                alt="Stoil Stoychev"
                                width={150}
                                height={150}
                                className="rounded-full border-4 border-white shadow-lg"
                                priority
                            />
                        </div>
                        <div className="mt-5 md:mt-0 md:ml-10 text-center md:text-left">
                            <h1 className="text-4xl font-bold text-gray-800">Stoil Stoychev</h1>
                            <p className="text-xl text-gray-600 mt-1">Software Engineer</p>
                            <div className="mt-4 space-y-2">
                                <p className="flex justify-center md:justify-start items-center">
                                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <a href="mailto:stoilstoychev@example.com" className="text-blue-600 hover:underline">stoilstoychev@example.com</a>
                                </p>
                                <p className="flex justify-center md:justify-start items-center">
                                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                                    </svg>
                                    <Link href="https://www.stoilsky.com" className="text-blue-600 hover:underline">stoilsky.com</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        Experience
                    </h2>
                    <div className="space-y-6">
                        <div className="relative pl-8 border-l-2 border-blue-200 pb-4">
                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                            <h3 className="text-xl font-semibold text-gray-800">Senior Software Engineer at XYZ Corp</h3>
                            <p className="text-blue-600 font-medium">Jan 2020 - Present</p>
                            <p className="mt-2 text-gray-600">Worked on various frontend and backend projects using JavaScript, TypeScript, React, and Node.js.</p>
                        </div>
                        <div className="relative pl-8 border-l-2 border-blue-200">
                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                            <h3 className="text-xl font-semibold text-gray-800">Software Engineer at ABC Inc</h3>
                            <p className="text-blue-600 font-medium">Jun 2017 - Dec 2019</p>
                            <p className="mt-2 text-gray-600">Developed and maintained web applications using React and Redux.</p>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                        </svg>
                        Education
                    </h2>
                    <div className="pl-8 relative border-l-2 border-blue-200">
                        <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                        <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
                        <p className="text-blue-600 font-medium">University of Technology</p>
                        <p className="text-gray-600">2013 - 2017</p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                        </svg>
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 hover:shadow-md transition-shadow">JavaScript</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 hover:shadow-md transition-shadow">TypeScript</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 hover:shadow-md transition-shadow">React</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 hover:shadow-md transition-shadow">Node.js</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 hover:shadow-md transition-shadow">SQL</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 hover:shadow-md transition-shadow">Python</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 hover:shadow-md transition-shadow">Go</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full border border-blue-200 hover:shadow-md transition-shadow">C#</span>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center text-gray-500 text-sm mt-10 pb-5">
                    © {new Date().getFullYear()} Stoil Stoychev. All rights reserved.
                </footer>
            </div>
        </div>
    );
}