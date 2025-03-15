import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'All-in-One Support',
    Svg: require('@site/static/img/all_in_one.svg').default,
    description: (
      <>
        Nodecp support multiple os including ubuntu, debian (x86_64 and arm64)
      </>
    ),
  },
  {
    title: 'More Powerfull ControlPanel',
    Svg: require('@site/static/img/nodecp_panelnew.svg').default,
    description: (
      <>
        Nodecp provides multiple functions and more powerfull control panel better security.
      </>
    ),
  },
  {
    title: 'Multiple Security',
    Svg: require('@site/static/img/secureserver.svg').default,
    description: (
      <>
        Nodecp offer multiple security like firewall, multifactor authentication, and more.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
