import "./About.css";

const countries = [
  { name: "Италия", image: "countries/italy.svg" },
  { name: "Франция", image: "countries/france.svg" },
  { name: "Испания", image: "countries/spain.svg" },
  { name: "США", image: "countries/usa.svg" },
  { name: "Австрия", image: "countries/austria.svg" },
  { name: "Германия", image: "countries/germany.svg" },
  { name: "Китай", image: "countries/china.svg" },
  { name: "Южная Корея", image: "countries/korea.svg" },
  { name: "Турция", image: "countries/turkey.svg" },
];

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="section-heading about-heading">
            <span className="eyebrow">О проекте</span>
            <h2>С какой страны вы хотите начать?</h2>
            <p>
              Для каждого потока мы выбираем одну страну и знакомимся с ней
              поближе. Говорим о её истории, языке, культуре и людях. На
              занятиях всегда можно задать вопрос или обсудить тему с другими
              участниками.
            </p>
          </div>

          <div className="countries" aria-label="Страны на выбор">
            {countries.map((country) => (
              <div className="country" key={country.name}>
                <p>{country.name}</p>
                <img
                  src={`${import.meta.env.BASE_URL}${country.image}`}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
