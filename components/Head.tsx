import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Subhash B S is an AI/ML Engineer specializing in LLM Systems & Agent Architectures, MLOps & Scalable ML"
      />
      <meta
        name="keywords"
        content="subhash b s, subhash, ai ml engineer, llm systems, agent architectures, mlops, scalable ml, subhash portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Subhash B S's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Subhash B S',
};
