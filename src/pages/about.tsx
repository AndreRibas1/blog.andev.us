import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/about"} />
      <OpenGraphMeta url={"/about"} />
      <TwitterCardMeta url={"/about"} />
      <div className="container">
        <div>
          <h1>
            André Ribas
          </h1>
          <span className="handle">Web Developer</span>
          <h2>
            A little bit about me<span className="fancy">.</span>
          </h2>
          <p>I am a 16-year-old web developer from Brazil. I have a passion for exploring new trends and innovative technologies, always seeking knowledge in various areas.</p> 
          <p>My specialty is JavaScript, and I love creating innovative and diverse designs.</p> 
          <p>Furthermore, I am a reflective person, interested in contemplating the world, human nature, our way of life, and behavior.</p>
          <br/>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          overflow: auto;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: blue;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
