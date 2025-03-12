import React from 'react';
import './Team.css';

const leadershipData = [
  {
    name: "Ismael Martinez",
    title: "Team Leadership",
    bio: "Ismael Martinez, originally from Buffalo, New York, brings a strong sense of community and dedication to sustainability. He is passionate about making gardening and sustainable living accessible to everyone, and works to inspire others to grow their own food for a healthier, more sustainable future.",
    linkedin: "https://www.linkedin.com/in/ismael-martinez-776986270/",
  
  },
  {
    name: "Khalia Howard",
    title: "Frontend Leadership",
    bio: "Khalia blends her passion for gardening with tech expertise. Inspired by her family’s emphasis on growing fresh food at home, she is committed to sustainability and empowering others to grow their own food through accessible tools and resources.",
    linkedin: "https://www.linkedin.com/in/khaliahoward/",

  },
  {
    name: "Efren Laris",
    title: "Integration Leadership",
    bio: "Efren Laris, with a background in construction, gained firsthand insight into the environmental impact of building practices. This fueled his passion for sustainability, which he now applies to promote eco-friendly gardening and resource-conscious living at Community Gardens.",
    linkedin: "https://www.linkedin.com/in/efren-laris-5605a7312/",

  },
  {
    name: "Catalina Perez",
    title: "Team Member",
    bio: "Catalina Perez, originally from Colombia, brings a unique perspective to Community Gardens. Passionate about sustainable agriculture, she’s dedicated to sharing her knowledge of growing fresh food and making gardening accessible to all.",
    linkedin: "https://www.linkedin.com/in/pperezhe/",
  
  },
  {
    name: "Darrell Cooper",
    title: "Cybersecurity Leadership",
    bio: "Darrell Cooper works with youth as a coach and is deeply committed to the future of our planet, driven by his desire to create a better world for the kids he coaches. He is passionate about sustainability and empowering the next generation to take care of the environment.",
    linkedin: "https://www.linkedin.com/in/darrell-cooper-b77822246/",

  },
  {
    name: "Justin McNeil",
    title: "Project Manager",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ut quas necessitatibus quam dignissimos laboriosam modi, id numquam itaque ipsam illum sed, suscipit incidunt doloremque saepe cupiditate, excepturi commodi non.",
    linkedin: "https://www.linkedin.com/in/mcneiljustin/",

  }
];
const valuesData = [
  {
    title: "Integrity",
    description: "We believe in honesty and transparency in all aspects of our work. Our commitment to integrity ensures that we build trust with our community and partners."
  },
  {
    title: "Collaboration",
    description: "We recognize the power of working together. Through collaboration, we foster strong partnerships that amplify our impact on the community."
  },
  {
    title: "Innovation",
    description: "We encourage creative solutions to the challenges of sustainable living. Our approach to gardening and food production is constantly evolving to meet the needs of our community."
  },
  {
    title: "Inclusivity",
    description: "We strive to create an inclusive environment where everyone, regardless of background, feels empowered to grow their own food and participate in our programs."
  }
];
const LeadershipCard = ({ leader }) => (
  <div className="leader-card">
    <div className="leader-image">
      <img src={leader.imgSrc} alt={leader.name} />
    </div>
    <div className="leader-info">
      <h3>{leader.name}</h3>
      <div className="leader-title">{leader.title}</div>
      <p className="leader-bio">{leader.bio}</p>
      <div className="leader-contact">
        <a href={leader.linkedin} className="read-more-link">LinkedIn</a>
      </div>
    </div>
  </div>
);
const ValueCard = ({ value }) => (
  <div className="value-card">
    <h3>{value.title}</h3>
    <p>{value.description}</p>
  </div>
);
const App = () => {
  return (
    <div>
      <main>
        <section className="intro">
          <h2>Meet the People Behind Our Mission</h2>
          <p>
            At Community Gardens, we are passionate about promoting the importance
            of growing your own food. Our leadership team is dedicated to
            empowering individuals with the knowledge and tools to grow fresh,
            healthy produce right at home, contributing to a more sustainable
            future.
          </p>
        </section>
        <section className="leadership container">
          <div className="leadership-grid">
            {leadershipData.map((leader, index) => (
              <LeadershipCard key={index} leader={leader} />
            ))}
          </div>
        </section>
        <section className="values-section">
          <div className="container">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              {valuesData.map((value, index) => (
                <ValueCard key={index} value={value} />
              ))}
            </div>
          </div>
        </section>
        <section className="join-section">
          <h2>Join Our Team</h2>
          <p>
            At Community Gardens, we’re always looking for passionate individuals to
            help us grow. If you’re interested in supporting our mission to teach
            sustainable food practices, we’d love to hear from you!
          </p>
          <button className="btn">Join Today!</button>
        </section>
      </main>
    </div>
  );
};
export default App;