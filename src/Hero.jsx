import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed animi
            qui laudantium quidem veniam ea commodi recusandae, eos possimus.
            Beatae eligendi magni assumenda, id nulla molestiae maxime illo
            voluptatum impedit.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser"></img>
        </div>
      </div>
    </section>
  )
}
export default Hero
