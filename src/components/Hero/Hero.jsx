import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-content">
        <div className="hero-copy">
          <h1>
            Познавайте мир
            <span>вместе с Muse Renewal</span>
          </h1>
          <p>
            Мы бесплатно знакомим участников с историей, культурой и языками
            разных стран. Выберите интересное направление и начните изучать его
            вместе с нашей командой.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://t.me/anketsmuserenewal_bot"
              target="_blank"
              rel="noreferrer"
            >
              Стать учеником
            </a>
            <a className="button button-secondary" href="#volunteer">
              Стать волонтёром
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Логотип Muse Renewal">
          <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Muse Renewal" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
