import Image from 'next/image';
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
                                    <p className="text-lg font-medium text-center mt-1 text-indigo-500">Frontend Software Engineer</p>
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
                                    <p className="text-gray-700 relative z-10">
                                        A Software Engineer with broad experience across the entire development lifecycle, working with both startups and large enterprises.
                                    </p>
                                </div>

                                {/* Top Skills Section - Moved here */}
                                <div className="relative">
                                    <div className="absolute -right-2 -top-2 w-16 h-16 bg-purple-50 rounded-full opacity-20 z-0"></div>
                                    <h2 className="text-lg font-bold border-b border-gray-200 pb-2 mb-3 text-gray-800 relative z-10 flex items-center">
                                        <span>Top Skills</span>
                                        <span className="ml-auto w-6 h-0.5 bg-gradient-to-r from-indigo-200 to-transparent"></span>
                                    </h2>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">JavaScript</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">TypeScript</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">React</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Node.js</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Next.js</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Vite</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Express</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Playwright</span>
                                        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm shadow-sm hover:shadow-md transition-shadow">Tailwind</span>
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
                                            <a href="https://github.com/stoilsky" className="text-indigo-500 hover:underline flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                                GitHub
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
                                        <h3 className="font-bold">Syncgrip.com</h3>
                                        <p className="text-gray-600 text-sm">Co-Founder</p>
                                        <p className="text-gray-500 text-sm">Apil 2024 - Present (1 year 1 month)</p>
                                        <p className="mt-2">
                                            - Syncgrip is bootstrapped SaaS we built together with a partner <br/>
                                            - synchronization of data between different SaaS tools like Airtable, Asana and Mailchimp,
                                            allowing you to avoid data-silos and have a single source of truth<br/>
                                            - A complex distributed system capable of ingesting thousand of events in real time<br/>
                                            - NextJS Dashboard allows for configuring the syncs, monitoring the status and troubleshooting<br/>
                                            - Backend is an Amazon Queue Service (SQS) that triggers AWS Lambdas to process the data <br/>
                                            - As a co-founder also performed marketing, sales and support <br/>
                                        </p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Next.js</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">TypeScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Tailwind CSS</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Node.js</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">AWS SQS</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">AWS Lambda</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Drizzle</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Turso</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">Lune</h3>
                                        <p className="text-gray-600 text-sm">Senior Software Engineer</p>
                                        <p className="text-gray-500 text-sm">May 2021 - February 2024 (2 years 10 months)</p>
                                        <p className="text-gray-500 text-sm">London, United Kingdom</p>
                                        <p className="mt-2">
                                            - Lune.co provides businesses with tools and an API to measure, manage, and offset their carbon footprint
                                            <br/>
                                            - joined as a Founding Engineer on a mission to build out their client-side Dashboard and Marketing Website
                                            <br/>
                                            - created the initial versions of the Website and the Dashboard from
                                            scratch using Gatsby and Create-React-App with TypeScript, React, TanStack Query respectively.  <br/>
                                            - contributed on the backend, working with Node.js, Express and PostgreSQL
                                        <br/>
                                            - planned and led implementation of complex features across the entire stack (e.g. Carbon Offset Calculator) <br/>
                                            - migrated Marketing Website from Gatsby to Next.js <br/>
                                            - involved in hiring, helping to grow the team and ramp up new hires.
                                        </p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">TypeScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">React</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">REST APIs</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">PostgreSQL</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Node.js</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Express</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Vite</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Gatsby</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Next.js</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Storybook</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">CSS-in-JS</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">tray.io</h3>
                                        <p className="text-gray-600 text-sm">Front-End Software Engineer</p>
                                        <p className="text-gray-500 text-sm">January 2017 - May 2021 (4 years 5 months)</p>
                                        <p className="text-gray-500 text-sm">London, England, United Kingdom</p>
                                        <p className="mt-2">
                                            - Tray.io (now Tray.ai) is a low-code automation platform (iPaaS) with a React-based
                                            frontend and a Scala backend. (Think Zapier but more for the Enterprise.)
                                            <br/>
                                            - joined Tray.io in London as employee #12.
                                            <br/>
                                            - originally hired
                                            as a Test Engineer, shifted gears into a Frontend Engineer position.
                                            <br/>
                                            - worked on many different parts of their client-side
                                        dashboard including to Enterprise features like User Roles, Permissions etc
                                        as well as the Marketing Website.
                                            <br/>
                                            - Worked extensively with React and NodeJS <br/>
                                            - Wrote extensive component tests with Jest and React Testing Library <br/>
                                            - Designed and implemented architecture of new features (e.g. client-side permissions, interactive logs) <br/>
                                            - involved with the hiring process, interviewing and mentoring junior engineers.
                                        </p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">JavaScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">TypeScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">React</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Redux</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">CSS-in-JS</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">GraphQL</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Apollo Client</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">Self-Employed</h3>
                                        <p className="text-gray-600 text-sm">Test Automation Consultant</p>
                                        <p className="text-gray-500 text-sm">May 2015 - January 2017 (1 year 9 months)</p>
                                        <p className="text-gray-500 text-sm">Sofia, Bulgaria</p>
                                        <p className="mt-2">
                                            - freelance consultant for companies looking to improve
                                            their test automation strategy and bring automation to a previously
                                            fully-manual testing processes. <br/>
                                            - an official partner to my first employer, Telerik (now Progress)  <br/>
                                            - worked with companies in the UK and US, mostly on integrating Telerik Test Studio (an automation tool)
                                            into existing QA teams.
                                        </p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">C#</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Telerik Test Studio</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Selenium</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">OrderDynamics</h3>
                                        <p className="text-gray-600 text-sm">Software Development Engineer In Test</p>
                                        <p className="text-gray-500 text-sm">May 2014 - July 2015 (1 year 3 months)</p>
                                        <p className="text-gray-500 text-sm">Sofia</p>
                                        <p className="mt-2">
                                            - DynamicAction is an
                                            AngularJS/NodeJS-based business intelligence web app. <br/>
                                            - worked on
                                            designing and expanding the extensive, Selenium-based automation suite
                                            that allowed the devs to make changes with confidence.
                                            <br/>
                                            - assure each DynamicAction release met the company's quality
                                            standards.
                                            </p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">JavaScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Selenium</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">Jasmine</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">WebStorm</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">AngularJS</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="border-l-2 border-indigo-500 pl-4 relative">
                                        <h3 className="font-bold">Telerik</h3>
                                        <p className="text-gray-600 text-sm">Sales Engineer</p>
                                    <p className="text-gray-500 text-sm">Jan 2011 - March 2014 (3 years 7 months)</p>
                                        <p className="text-gray-600 text-sm">3 years 5 months</p>
                                        <p className="mt-2">
                                            - Telerik (now Progress) offers software tools for web, mobile, desktop application development.
                                            <br/>

                                            - working knowledge of the
                                            entire stack of products offered by Telerik.
                                            <br/>
                                            - analyzed and responded to
                                            technical queries by customers and prepared sample projects to serve as
                                            POC for prospective/existing customers.
                                            <br/>
                                            - worked closely with the sales team identify
                                            requirements and how they can be addressed.
                                            <br/>
                                            - led technical training sessions for the sales team and customers.
                                        </p>
                                        <div className="mt-3">
                                            <p className="text-sm font-medium text-gray-700">Tech Stack:</p>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">C#</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">.NET</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">JavaScript</span>
                                                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-xs">WPF</span>
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