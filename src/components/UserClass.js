import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      email: "",
      avatar_url: "",
      node_id: "",
      login: "",
      id: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SIMRAN5-CS");
    const json = await data.json();
    this.setState({
      name: json.name,
      location: json.location,
      email: json.email,
      avatar_url: json.avatar_url,
      node_id: json.node_id,
      login: json.login,
      id: json.id,
    });
  }

  render() {
    const { name, login, id, avatar_url, node_id, email, location } =
      this.state;
    return (
      <div className="flex items-center justify-center  bg-gray-50 p-4 h-fu;;">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-center bg-blue-200 py-4">
            <img
              className="rounded-full border-4 border-white w-32 h-32"
              src={avatar_url}
              alt={`${name}'s avatar`}
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
            <ul className="text-gray-700 space-y-2">
              <li>
                <strong>GitHub ID:</strong> {id}
              </li>
              <li>
                <strong>Username:</strong> {login}
              </li>
              <li>
                <strong>Node ID:</strong> {node_id}
              </li>
              <li>
                <strong>Email:</strong> {email || "Not available"}
              </li>
              <li>
                <strong>Location:</strong> {location || "Not specified"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
