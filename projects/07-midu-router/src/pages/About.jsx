import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: 'Estoy creando un React Router'
  },
  en : {
    title: 'About us',
    button: 'Go to home page',
    description: 'Im making a ReacRouter'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

    return (
      <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="https://cdn.vox-cdn.com/thumbor/_CV9Kj8soWGHPaDe48Jd2qvab4o=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61264809/Spider_Man_Screen_Shot_9_10_18__1.03_PM.0.png" alt="Foto Spidey" />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
      </>
    )
  }