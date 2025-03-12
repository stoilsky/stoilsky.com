import Image from 'next/image';
import Link from 'next/link';
import "../global.css";

export const metadata = {
    title: 'Stoil Stoychev: Resume',
    description: 'Software Engineer building Syncgrip.com and QAJobs.co'
};

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-8">
            <div className="max-w-6xl mx-auto p-5 pt-8">
                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column - Info, Contact, Skills, etc */}
                    <div className="lg:w-1/3">
                        <div className="rounded-xl shadow-sm overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-20 h-20 bg-indigo-100 rounded-full opacity-20 -translate-x-10 -translate-y-10"></div>
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 rounded-full opacity-20 translate-x-10 translate-y-10"></div>
                            <div className="absolute top-1/4 right-0 w-16 h-16 bg-blue-100 rounded-full opacity-20 translate-x-8"></div>
                            <div className="absolute bottom-1/3 left-0 w-12 h-12 bg-indigo-100 rounded-full opacity-20 -translate-x-6"></div>

                            {/* Subtle patterns */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{
                                backgroundImage: `radial-gradient(circle at 25px 25px, indigo 2px, transparent 0), 
                                                 radial-gradient(circle at 75px 75px, purple 2px, transparent 0)`,
                                backgroundSize: '100px 100px'
                            }}></div>

                            <div className="p-6 space-y-8 relative z-10">
                                {/* Profile Section */}
                                <div className="flex flex-col items-center">
                                    <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-md border-2 border-white mb-4 relative">

                                        <Image
                                            src="/Stoil.jpg"
                                            alt="Stoil Stoychev"
                                            width={128}
                                            height={128}
                                            className="object-cover relative z-0"
                                            priority
                                        />
                                    </div>
                                    <h1 className="text-2xl font-bold text-center text-gray-800">Stoil Stoychev</h1>
                                    <p className="text-lg font-medium text-center mt-1 text-indigo-500">I build Custom Marketing Websites with AI for a $1,000 Flat Fee</p>
                                    <p className="text-gray-500 mt-1 text-center">United Kingdom</p>

                                    <div className="w-1/3 h-0.5 bg-gradient-to-r from-transparent via-indigo-200 to-transparent mt-4"></div>
                                </div>

                                {/* Summary Section */}
                                <div className="relative">
                                    <div className="absolute -left-2 -top-2 w-14 h-14 bg-indigo-100 rounded-full opacity-20 z-0"></div>
                                    <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3 text-gray-800 relative z-10 flex items-center">
                                        <span>Summary</span>
                                        <span className="ml-auto w-6 h-0.5 bg-gradient-to-r from-indigo-200 to-transparent"></span>
                                    </h2>
                                    <p className="text-gray-700 relative z-10">Software Engineer building Syncgrip.com (two-way data syncing between your SaaS apps) and QaJobs.co (the premier job board for QA and Test Automation pros)</p>
                                </div>

                                {/* Top Skills Section - Moved here */}
                                <div className="relative">
                                    <div className="absolute -right-2 -top-2 w-16 h-16 bg-purple-50 rounded-full opacity-20 z-0"></div>
                                    <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3 text-gray-800 relative z-10 flex items-center">
                                        <span>Top Skills</span>
                                        <span className="ml-auto w-6 h-0.5 bg-gradient-to-r from-indigo-200 to-transparent"></span>
                                    </h2>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Next.js</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Node.js</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">SQLite</span>
                                    </div>
                                </div>

                                {/* Contact Section */}
                                <div className="relative">
                                    <div className="absolute right-0 top-10 w-12 h-12 bg-blue-100 rounded-full opacity-20 z-0"></div>
                                    <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3 text-gray-800 relative z-10 flex items-center">
                                        <span>Contact</span>
                                        <span className="ml-auto w-6 h-0.5 bg-gradient-to-r from-indigo-200 to-transparent"></span>
                                    </h2>
                                    <ul className="space-y-2 relative z-10">
                                        <li>
                                            <a href="mailto:stoilstoychev@gmail.com" className="text-indigo-500 hover:underline flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                </svg>
                                                stoilstoychev@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/stoil-stoychev" className="text-indigo-500 hover:underline flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                                LinkedIn
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.qajobs.co" className="text-indigo-500 hover:underline flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                                                </svg>
                                                QAJobs.co (Company)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.syncgrip.com" className="text-indigo-500 hover:underline flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                                                </svg>
                                                SyncGrip.com (Company)
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Languages Section */}
                                <div className="relative">
                                    <div className="absolute -left-2 top-6 w-10 h-10 bg-indigo-100 rounded-full opacity-20 z-0"></div>
                                    <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3 text-gray-800 relative z-10 flex items-center">
                                        <span>Languages</span>
                                        <span className="ml-auto w-6 h-0.5 bg-gradient-to-r from-indigo-200 to-transparent"></span>
                                    </h2>
                                    <ul className="space-y-1 text-gray-700 relative z-10">
                                        <li className="flex items-center">
                                            <span className="w-1.5 h-1.5 bg-indigo-300 rounded-full mr-2"></span>
                                            Bulgarian
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-1.5 h-1.5 bg-indigo-300 rounded-full mr-2"></span>
                                            English
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-1.5 h-1.5 bg-indigo-300 rounded-full mr-2"></span>
                                            German
                                        </li>
                                    </ul>
                                </div>

                                {/* Education Section */}
                                <div className="relative">
                                    <div className="absolute right-0 top-1/2 w-16 h-16 bg-purple-100 rounded-full opacity-20 z-0"></div>
                                    <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3 text-gray-800 relative z-10 flex items-center">
                                        <span>Education</span>
                                        <span className="ml-auto w-6 h-0.5 bg-gradient-to-r from-indigo-200 to-transparent"></span>
                                    </h2>
                                    <div className="border-l-2 border-indigo-400 pl-3 relative z-10">
                                        <h3 className="font-bold text-gray-800">Technical University Sofia</h3>
                                        <p className="text-gray-600 text-sm">Bachelor's Degree, Computer Science · (2007 - 2011)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Experience */}
                    <div className="lg:w-2/3">
                        {/* Experience Section */}
                        <section className="bg-white rounded-xl shadow-sm p-6 h-full relative overflow-hidden">
                            {/* Subtle decorative elements */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-full opacity-20 translate-x-20 -translate-y-20"></div>
                            <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-50 rounded-full opacity-10 -translate-x-20 translate-y-20"></div>

                            {/* Subtle pattern overlay */}
                            <div className="absolute inset-0 opacity-[0.02]" style={{
                                backgroundImage: `linear-gradient(135deg, indigo 0%, indigo 25%, transparent 25%, transparent 50%, indigo 50%, indigo 75%, transparent 75%, transparent 100%)`,
                                backgroundSize: '60px 60px'
                            }}></div>

                            <div className="relative z-10">
                                <h2 className="text-xl font-bold mb-6 flex items-center">
                                    <span>Experience</span>
                                    <span className="ml-4 w-20 h-0.5 bg-gradient-to-r from-indigo-200 to-transparent"></span>
                                </h2>
                                <div className="space-y-6">
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">Syncgrip</h3>
                                        <p className="text-gray-600 text-sm">Co-Founder</p>
                                        <p className="text-gray-500 text-sm">March 2024 - Present (1 year 1 month)</p>
                                        <p className="mt-2">Sync your data between Airtable, Asana, Mailchimp and more — no coding required</p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Next.js</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">TypeScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Tailwind CSS</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Supabase</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">QAJobs.co</h3>
                                        <p className="text-gray-600 text-sm">Co-Founder</p>
                                        <p className="text-gray-500 text-sm">January 2024 - Present (1 year 3 months)</p>
                                        <p className="mt-2">The premier job board for Quality Assurance, SDET, and all other Test Automation Engineer opportunities</p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">React</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Node.js</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">PostgreSQL</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">AWS</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">Lune</h3>
                                        <p className="text-gray-600 text-sm">Software Engineer</p>
                                        <p className="text-gray-500 text-sm">May 2021 - February 2024 (2 years 10 months)</p>
                                        <p className="text-gray-500 text-sm">London, United Kingdom</p>
                                        <p className="mt-2">Making every product and service climate positive by default</p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">TypeScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">React</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">GraphQL</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">REST APIs</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">tray.io</h3>
                                        <p className="text-gray-600 text-sm">Front-End Software Engineer</p>
                                        <p className="text-gray-500 text-sm">January 2017 - May 2021 (4 years 5 months)</p>
                                        <p className="text-gray-500 text-sm">London, England, United Kingdom</p>
                                        <p className="mt-2">Tray.io is ushering in the era of the automated organization. We believe that any organization can and should automate. With Tray.io, citizen automators throughout organizations can easily automate complex processes through a powerful, flexible platform, and can connect their entire cloud stack thanks to APIs.</p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">JavaScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">React</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Redux</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">CSS-in-JS</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">GraphQL</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">Self-Employed</h3>
                                        <p className="text-gray-600 text-sm">Freelance Automation and Front End Developer</p>
                                        <p className="text-gray-500 text-sm">May 2015 - January 2017 (1 year 9 months)</p>
                                        <p className="text-gray-500 text-sm">Sofia, Bulgaria</p>
                                        <p className="mt-2">As a freelance developer and consultant I focus on web development and test automation. I help teams and individuals succeed with things as simple as building a portfolio website or as complex as designing the architecture of a test automation framework.</p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">JavaScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">React</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Selenium</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">CSS</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">HTML</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">OrderDynamics</h3>
                                        <p className="text-gray-600 text-sm">Software Development Engineer In Test</p>
                                        <p className="text-gray-500 text-sm">May 2014 - July 2015 (1 year 3 months)</p>
                                        <p className="text-gray-500 text-sm">Sofia</p>
                                        <p className="mt-2">My responsibility is to assure that each DynamicAction release lives up to the company's high quality standards. DynamicAction is an AngularJS/NodeJS-based business intelligence web app. I take part in designing and expanding the extensive, Selenium-based automation suite that assures the stability of the application.</p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Java</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Selenium</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">TestNG</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">JavaScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">AngularJS</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">Telerik</h3>
                                        <p className="text-gray-600 text-sm">3 years 5 months</p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">C#</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">.NET</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">JavaScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">WPF</span>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-3 pl-3 border-l border-indigo-200 relative">
                                            <h4 className="font-semibold">Sales engineer</h4>
                                            <p className="text-gray-500 text-sm">January 2012 - March 2014 (2 years 3 months)</p>
                                            <p className="text-gray-500 text-sm">Sofia</p>
                                            <p className="mt-1">As a Sales Engineer I was expected to have a working knowledge of the entire stack of products offered by my company. I analyzed and responded to technical queries by our customers and prepared sample projects to serve as POC for prospective/existing customers.</p>
                                            <p className="mt-1">I worked closely with the sales team in order to identify each customer's requirements and how they can be addressed. Additionally I led some basic technical training sessions for the sales team.</p>
                                        </div>
                                        
                                        <div className="mt-3 pl-3 border-l border-indigo-200 relative">
                                            <h4 className="font-semibold">Technical Support Engineer - web-based UI automation</h4>
                                            <p className="text-gray-500 text-sm">November 2010 - January 2012 (1 year 3 months)</p>
                                            <p className="mt-1">As a support engineer for the Test Studio product I worked closely with our customers in order to resolve their complex test automation challenges. I contributed to the documentation and roadmap planning for the product. Additionally I led training sessions (including onsite) for existing and prospective customers.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">SAP</h3>
                                        <p className="text-gray-600 text-sm">Intern</p>
                                        <p className="text-gray-500 text-sm">July 2009 - October 2010 (1 year 4 months)</p>
                                        <p className="mt-2">Develop internal tools around unit test reports</p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Java</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">JUnit</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">XML</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Eclipse</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                
                {/* Footer */}
                <footer className="text-center text-gray-500 text-sm mt-8">
                    © {new Date().getFullYear()} Stoil Stoychev
                </footer>
            </div>
        </div>
    );
}