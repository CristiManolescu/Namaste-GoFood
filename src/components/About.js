import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is about page</h1>
      <h2>This is a page created for the Routing</h2>
      <User name={"Cristi Manolescu (function)"} />

      <UserClass
        name={"Cristi Manolescu (class)"}
        location={"Bucharest"}
        contact={"@cristimanolescu"}
      />
    </div>
  );
};

export default About;
