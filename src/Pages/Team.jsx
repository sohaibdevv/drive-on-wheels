import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.jpg";
import Person2 from "../images/team/2.jpg";
import Person3 from "../images/team/3.jpg";
import Person4 from "../images/team/4.jpg";
import Person5 from "../images/team/5.jpg";
import Person6 from "../images/team/6.jpg";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "brian jones", job: "Photographer" },
    { img: Person4, name: "John Doe", job: "Car Detailist" },
    { img: Person5, name: "Mark Smith", job: "Mechanic" },
    { img: Person6, name: "tim henderson", job: "Manager" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <IconPhone width={40} height={40} />
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
