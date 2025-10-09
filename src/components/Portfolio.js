import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();

  const projects = [
    {
      image: "/images/paddle.png",
      path: "/portfolio/paddle",
    },
    {
      image: "/images/watch.png",
      path: "/portfolio/watch",
    },
    {
      image: "/images/patio3d.png",
      path: "/portfolio/patio3d",
    },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="work-section">
      <div className="container p-5 pt-0 pb-0">
        <h2 className="work-title">Work</h2>

        <div className="work-grid">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="work-item"
              onClick={() => handleClick(proj.path)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
                className="work-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
