import useUserData from "../utils/useUserData";

const User = () => {
  const user = useUserData();
  const { name, location, login } = user;
  return (
    <div className="flex border border-solid">
      <div className="mx-4">
        <img
          className="w-56"
          alt="Profile photo"
          src="https://avatars.githubusercontent.com/u/40199080?v=4"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{login}</h4>
      </div>
    </div>
  );
};

export default User;
