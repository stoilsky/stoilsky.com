export const metadata = {
    title: `Stoilsky: About`,
    description: 'About Stoil Stoychev, a software engineer and author of Stoilsky.com'
}
export default async function PostPage({ params }) {
    return (
        <div>
            Hi, I'm Stoil Stoychev, a JavaScript enthusiast and Software Engineer.
            <br/><br/>
            Mostly on the Frontend side of things, but I enjoy dabbling elsewhere...
            <br/><br/>
            JavaScript, TypeScript, React, State Managers, Responsive Design. These are some of the things I know well.
        </div>
    );
}
