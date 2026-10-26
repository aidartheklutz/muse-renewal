import "./Format.css";

const steps = [
  {
    title: "Небольшая группа",
    text: "В одном потоке учатся от 10 до 15 человек. В такой группе удобно общаться и работать вместе.",
  },
  {
    title: "Не только теория",
    text: "На занятиях будут игры, небольшие челленджи и истории о выбранной стране.",
  },
  {
    title: "Новые знания",
    text: "К концу курса вы будете лучше знать страну и запомните несколько полезных слов на её языке.",
  },
  {
    title: "Сертификат",
    text: "После окончания курса мы подарим вам поздравительный сертификат. Это не официальный документ, а приятная память об участии.",
  },
];

function Format() {
  return (
    <section className="section format-section" id="format">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Как это проходит</span>
          <h2>Что будет на курсе</h2>
          <p>
            Мы стараемся не превращать занятия в обычные лекции. Сначала мы
            разбираемся в теме, а затем закрепляем её с помощью практики и игр.
          </p>
        </div>

        <div className="format-grid">
          {steps.map((step) => (
            <article className="format-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Format;
