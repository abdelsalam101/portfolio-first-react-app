const portfolioItems = [
  {
    title: "To-Do List Project",
    link: "https://github.com/abdelsalam101/simple-to-do-list",
    bgColor: "bg-info text-white",
  },
  {
    title: "Weather Project",
    link: "https://github.com/Mahmoud-Hanyy/WindyX",
    bgColor: "bg-primary text-white",
  },
  {
    title: "Movie Guide App",
    link: "https://github.com/abdelsalam101/movie-guide-app",
    bgColor: "bg-warning text-white",
  },
  {
    title: "Bash CRUD DB",
    link: "https://github.com/abdelsalam101/bash-crud-db",
    bgColor: "bg-dark text-white",
  },
  {
    title: "Bash User Management",
    link: "https://github.com/abdelsalam101/bash-user-management",
    bgColor: "bg-success text-white",
  },
  {
    title: "YouTube Channel",
    link: "https://www.youtube.com/@NerdAflam",
    bgColor: "bg-danger text-white",
  },
];
function Projects() {
  return (
    <div
      className="container my-5 bg-secondary "
      style={{
        maxWidth: "100vw",
        minHeight: "60vh",
        padding: "50px 0",
      }}
    >
      <h2
        className="mb-4 fw-bold text-white"
        style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}
      >
        Portfolio
      </h2>
      <div className="row g-4 m-2">
        {portfolioItems.map((item, index) => (
          <div className="col-md-4" key={index}>
            <a
              href={item.link}
              target="_blank"
              className={`d-flex justify-content-center align-items-center p-5 rounded shadow text-decoration-none ${item.bgColor}`}
              style={{ height: "150px", transition: "transform 0.3s" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h5 className="text-center m-0">{item.title}</h5>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
