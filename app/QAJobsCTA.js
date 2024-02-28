export const QAJobsCTA = () => (
    <div className="bg-blue-200 text-gray-800 pt-6 pb-6 px-6 rounded-lg flex flex-col items-center justify-center space-y-2">
        <h1 className="font-bold text-3xl text-center mb-4">
            Join Quality Assurance Jobs!
        </h1>
        <div className="text-center pb-5">
            <a className={`underline`} href={`https://www.qajobs.co/`}>qajobs.co</a> is the first job board for Quality Assurance, SDET, and all other Test
            Automation Engineer roles.
        </div>
        <a href="https://www.qajobs.co" style={{ border: `none` }}>
            <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-600 font-bold">
                Visit qajobs.co
            </button>
        </a>
    </div>
);
