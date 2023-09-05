import useUserData from "../utils/useUserData";

const User = () => {
  const user = useUserData();
  console.log(user);
  const { name, location, login } = user;
  return (
    <div className="user-card">
      <img
        alt="Profile photo"
        src="https://avatars.githubusercontent.com/u/40199080?v=4"
      />
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @{login}</h4>
    </div>
  );
};

export default User;
