import { useEffect, useRef, useState } from "react";
import countryInformation from "../../data/countries.txt?raw";
import italy0 from "../../assets/italy/italy0.jpg";
import italy1 from "../../assets/italy/italy1.jpg";
import france0 from "../../assets/france/france0.jpg";
import france1 from "../../assets/france/france1.jpg";
import spain0 from "../../assets/spain/spain0.jpg";
import spain1 from "../../assets/spain/spain1.jpg";
import usa0 from "../../assets/usa/usa0.jpg";
import usa1 from "../../assets/usa/usa1.jpg";
import austria0 from "../../assets/austria/austria0.jpg";
import austria1 from "../../assets/austria/austria1.jpg";
import germany0 from "../../assets/germany/germany0.jpg";
import germany1 from "../../assets/germany/germany1.jpg";
import china0 from "../../assets/china/china0.jpg";
import china1 from "../../assets/china/china1.jpg";
import korea0 from "../../assets/southkorea/korea0.jpg";
import korea1 from "../../assets/southkorea/korea1.jpg";
import turkey0 from "../../assets/turkey/turkey0.jpg";
import turkey1 from "../../assets/turkey/turkey1.jpg";
import "./About.css";

const countryNames = [
  "Италия",
  "Франция",
  "Испания",
  "США",
  "Австрия",
  "Германия",
  "Китай",
  "Южная Корея",
  "Турция",
];

const factLabels = new Set([
  "Полное название",
  "Официальное название",
  "Столица",
  "Официальный язык",
  "Официальный язык на федеральном уровне",
  "Валюта",
  "Население",
  "Площадь",
  "Форма правления",
  "Государственный флаг",
  "Расположение",
  "Религия",
  "Количество штатов",
  "Количество федеральных земель",
  "Крупные города",
]);

const informationByCountry = countryInformation
  .trim()
  .split(/\r?\n/)
  .reduce((entries, line) => {
    if (countryNames.includes(line)) {
      entries[line] = [];
      entries.currentCountry = line;
    } else if (entries.currentCountry) {
      entries[entries.currentCountry].push(line);
    }
    return entries;
  }, {});

delete informationByCountry.currentCountry;

function CountryInformation({ countryName }) {
  return informationByCountry[countryName]
    .filter(Boolean)
    .map((line, index) => {
      if (line === "Основные сведения" || line === "История и культура") {
        return <h3 key={`${line}-${index}`}>{line}</h3>;
      }

      const separatorIndex = line.indexOf(":");
      const label = separatorIndex === -1 ? "" : line.slice(0, separatorIndex);

      if (factLabels.has(label)) {
        return (
          <p className="country-sheet-fact" key={`${line}-${index}`}>
            <strong>{line.slice(0, separatorIndex + 1)}</strong>
            {line.slice(separatorIndex + 1)}
          </p>
        );
      }

      return (
        <p
          className={index === 0 ? "country-sheet-lead" : undefined}
          key={`${line}-${index}`}
        >
          {line}
        </p>
      );
    });
}

const countries = [
  { name: "Италия", image: "countries/italy.svg", photos: [italy0, italy1] },
  { name: "Франция", image: "countries/france.svg", photos: [france0, france1] },
  { name: "Испания", image: "countries/spain.svg", photos: [spain0, spain1] },
  { name: "США", image: "countries/usa.svg", photos: [usa0, usa1] },
  { name: "Австрия", image: "countries/austria.svg", photos: [austria0, austria1] },
  { name: "Германия", image: "countries/germany.svg", photos: [germany0, germany1] },
  { name: "Китай", image: "countries/china.svg", photos: [china0, china1] },
  { name: "Южная Корея", image: "countries/korea.svg", photos: [korea0, korea1] },
  { name: "Турция", image: "countries/turkey.svg", photos: [turkey0, turkey1] },
];

function About() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!selectedCountry) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedCountry(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      triggerRef.current?.focus();
    };
  }, [selectedCountry]);

  return (
    <>
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
                <button
                  className="country"
                  key={country.name}
                  type="button"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setSelectedCountry(country);
                  }}
                  aria-haspopup="dialog"
                >
                  <span>{country.name}</span>
                  <img
                    src={`${import.meta.env.BASE_URL}${country.image}`}
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedCountry && (
        <div
          className="country-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedCountry(null);
          }}
        >
          <article
            className="country-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="country-sheet-title"
          >
            <div className="country-sheet-handle" aria-hidden="true" />
            <div className="country-sheet-header">
              <h2 id="country-sheet-title">{selectedCountry.name}</h2>
              <button
                ref={closeButtonRef}
                className="country-sheet-close"
                type="button"
                onClick={() => setSelectedCountry(null)}
                aria-label="Закрыть"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="country-sheet-grid">
              <div className="country-sheet-photos">
                {selectedCountry.photos.map((photo, index) => (
                  <img
                    key={photo}
                    src={photo}
                    alt={`${selectedCountry.name}, фотография ${index + 1}`}
                  />
                ))}
              </div>
              <div className="country-sheet-copy">
                <CountryInformation countryName={selectedCountry.name} />
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
}

export default About;
