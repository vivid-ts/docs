import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Homepage for Vivid.ts"
    >
      <main className='container'>
        <section className='flex flex-col items-center pt-16'>
          <img src="/img/logo.svg" alt="Logo" className='w-24 mb-8' />

          <h1 className='font-semibold text-4xl'>{siteConfig.title}</h1>
          <p>{siteConfig.tagline}</p>
        </section>

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
