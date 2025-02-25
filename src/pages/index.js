import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container text-center">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="https://github.com/gustavo-losch"
          >
            GitHub
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="https://www.linkedin.com/in/gustavo-losch"
          >
            LinkedIn
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="https://drive.google.com/file/d/13ANpJc4xBQA38je2tTnnJfq8nC4P09Hw/view?usp=sharing"
          >
            Currículo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Gustavo Lösch do Amaral ${siteConfig.title}`}
      description="Portfólio e informações sobre Gustavo Lösch do Amaral."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}