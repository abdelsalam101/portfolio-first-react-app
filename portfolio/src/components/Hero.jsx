
function Hero() {
  return (
    <div
    className="text-white text-center"
    style={{background:"url('./src/assets/wd.jpg') no-repeat center center/cover",
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        backgroundBlendMode: 'darken', 
    }}
    >
      <div>
        <h1 className="display-4" style={{ fontWeight: 'bold' }}>
          AbdElSalam Hassan
        </h1>
        <p className="lead" style={{ fontWeight: 'bold' }}>Full Stack Developer & Content Creator</p>
        <a href="#contact" className="btn  btn-outline-primary">
          Contact Me
        </a>
      </div>
    </div>
  );
}
export default Hero;
