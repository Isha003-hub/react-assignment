import './About.css';
import profileImg from '../../assets/isha1.jpg';

export default function About() {
  return (
    <section id="about">
      <div className="about-image">
        <img src={profileImg} alt="Isha's portrait" height={200} width={200}/>
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi! I'm Isha, a passionate web developer focused on crafting beautiful and functional digital experiences.
          I enjoy building clean, responsive interfaces and solving real-world problems through code.
        </p>
      </div>
    </section>
  );
}
