import "./Volunteer.css";

const roles = [
  {
    title: "Менеджер",
    icon: "bi-chat-dots",
    text: "Связывается с участниками, которые прошли отбор, и помогает им разобраться с организационными вопросами. Для каждой страны нужен один менеджер.",
  },
  {
    title: "Волонтёр по эвентам",
    icon: "bi-calendar-event",
    text: "Готовит и проводит занятия о культуре и языке одной из стран.",
  },
  {
    title: "SMM",
    icon: "bi-megaphone",
    text: "Ведёт социальные сети Muse Renewal и рассказывает о проекте будущим участникам.",
  },
  {
    title: "Дизайнер",
    icon: "bi-palette",
    text: "Оформляет публикации и готовит другие визуальные материалы для проекта.",
  },
  {
    title: "Программист",
    icon: "bi-code-slash",
    text: "Следит за сайтом, обновляет информацию и добавляет новые возможности.",
  },
];

function Volunteer() {
  return (
    <section className="section volunteer-section" id="volunteer">
      <div className="container">
        <div className="volunteer-intro">
          <div className="section-heading">
            <span className="eyebrow">Команда</span>
            <h2>Как стать волонтёром</h2>
          </div>
          <p>
            В команде есть несколько направлений, и у каждого своя задача.
            Выберите то, которое вам интересно и в котором вы хотите попробовать
            себя.
          </p>
        </div>

        <div className="roles-list">
          {roles.map((role) => (
            <article className="role" key={role.title}>
              <h3>
                <i className={`bi ${role.icon}`} aria-hidden="true" />
                {role.title}
              </h3>
              <p>{role.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
