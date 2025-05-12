
const skills = [
    {name:'python', level: 80, color: 'success'},
    {name:'javascript', level: 85, color: 'success'},
    {name:'HTML, CSS, Bootstrap', level: 90, color: 'success'},
    {name:'PostgresSQL', level: 95, color: 'success'},
    {name:'Git & GitHub', level: 75, color: 'success'},
    {name:'Video Editing & Content Creation', level: 95, color: 'success'},
    {name:'Communication & Teamwork', level: 95, color: 'success'},

];

function Skills() {
  return (
    <div
      className="container text-white align-items-center"
      style={{
        maxWidth: "100vw",
        minHeight: "60vh",
        padding: "50px 0",
      }}
    >
        <div>
      <h1 className="text-center ">Skills</h1>
      <p className="text-center mt-3 p-2 col-10 mx-auto">
        A well-rounded blend of technical expertise and creative expression.
        From building full-stack applications with Python to crafting compelling
        film analysis content, I continuously strive to learn, build, and share
        with impact.
      </p>
      </div>
      <div>
          {skills.map((skill, index) => (
        <div key={index} className="row align-items-center mb-3">
          <div className="col-md-4 text-end fw-semibold">{skill.name}</div>
          <div className="col-md-5">
            <div
              className="progress"
              role="progressbar"
              aria-label={`${skill.name} skill level`}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className={`progress-bar bg-${skill.color}`}
                style={{ width: `${skill.level}%` }}
              >
                {skill.level}%
              </div>
            </div>
          </div>
        </div>
      ))}

      </div>

    </div>
  );
}
export default Skills;
