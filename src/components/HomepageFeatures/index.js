import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Haz amigos',
    imgUrl: require('@site/static/img/landing-page-friends.jpg').default,
    description: (
      <>
        Cada joven que entra al Movimiento Scout comparte de forma única con sus amigos en un ambiente seguro y motivante. Hacer amigos es una destreza fundamental en el desarrollo personal de cada miembro y reafirma una actitud positiva hacia el mundo exterior.
      </>
    ),
  },
  {
    title: 'Vida al aire libre',
    imgUrl: require('@site/static/img/landing-page-nature.jpg').default,
    description: (
      <>
      Estar en contacto con la naturaleza permite a niños, niñas y jóvenes potenciar sus habilidades, adquirir nuevas destrezas, equilibrar su cuerpo, fortalecer su salud, y desarrollar vínculos con el mundo exterior, con los demás y consigo mismos. Además de maravillarse con la creación y valorar el mundo que les rodea para preservarlo.
      </>
    ),
  },
  {
    title: 'Presencia de adultos voluntarios',
    imgUrl: require('@site/static/img/landing-page-adult.jpg').default,
    description: (
      <>
        En el proceso de crecimiento de niños, niñas y jóvenes, el educador adulto o voluntario scout, se incorpora alegremente al dinamismo juvenil, y es un testimonio ejemplar de los valores scout. Su papel es el de guiar y ayudar a niños, niñas y jóvenes a descubrir nuevos puntos de vista, que tal vez no se habían planteado o imaginado, desde una estilo de comunicación horizontal y de cooperación.
      </>
    ),
  },
];

function Feature({ title, description, imgUrl }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className='rounded-sm object-cover w-full md:w-[348px] h-full md:max-h-[261px]' src={imgUrl} alt={title} />
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
