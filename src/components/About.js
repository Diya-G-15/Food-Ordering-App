import UserClass from "./UserClass";
// import { Component } from "react";
// import UserContext from "../utils/UserContext";
// class About extends Component {
//   constructor(props) {
//     super(props);
//     // console.log("parent constructor")
//   }
//   componentDidMount() {
//     // console.log("parent component did mount")
//   }
//   render() {
//     // console.log("parent render")
//     return (
//       <div>
//         <h1 className="font-semibold text-4xl text-center w-full p-4">
//           About{" "}
//         </h1>
//         <UserClass />
//         {/* <div className="bg-slate-200 text-center font-medium text-lg p-2 shadow-md m-4">
//           User Info

//           <ul>
//             <UserContext.Consumer>
//               {(data) => {
//                 console.log(data);
//                 return <li className="m-2">UserName:{data.loggedInUser}</li>;
//               }}
//             </UserContext.Consumer>
//           </ul>
//         </div> */}
//       </div>
//     );
//   }
// }
// export default About;

import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-white w-full min-h-screen p-6">
        {/* About Us Section */}
        <h1 className="font-bold text-5xl text-center text-orange-500 mb-4">
          ABOUT US
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          We are a passionate team dedicated to bringing the best services to
          our customers. Our journey is fueled by innovation, excellence, and a
          commitment to making a difference in people's lives.
        </p>

        {/* Get to Know Us Section */}
        <h2 className="font-bold text-4xl text-center text-orange-500 mb-4">
          GET TO KNOW US
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Our actions are strongly defined by our mission, vision, and values.
          These principles inspire us to excel and create a positive impact on
          our customers and communities every day.
        </p>

        {/* Mission, Vision, Values Section */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
  {/* Mission Section */}
  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
    <h3 className="text-orange-500 text-lg font-medium uppercase md:w-1/4 relative">
      Mission
      <span className="absolute left-0 bottom-[-4px] w-16 h-[2px] bg-orange-300"></span>
    </h3>
    <p className="text-gray-600 md:w-3/4">
      To provide unparalleled convenience and excellent customer experiences,
      ensuring that every interaction reflects our commitment to innovation and
      quality.
    </p>
  </div>

  {/* Vision Section */}
  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
    <h3 className="text-orange-500 text-lg font-medium uppercase md:w-1/4 relative">
      Vision
      <span className="absolute left-0 bottom-[-4px] w-12 h-[2px] bg-orange-300"></span>
    </h3>
    <p className="text-gray-600 md:w-3/4">
      To revolutionize the way the world experiences delivery and redefine
      standards for speed, quality, and reliability in every service we provide.
    </p>
  </div>

  {/* Values Section */}
  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
    <h3 className="text-orange-500 text-lg font-medium uppercase md:w-1/4 relative">
      Values
      <span className="absolute left-0 bottom-[-4px] w-14 h-[2px] bg-orange-300"></span>
    </h3>
    <p className="text-gray-600 md:w-3/4">
      Our values are centered around teamwork, customer focus, and a passion for
      excellence. We strive to create a positive impact on our customers and
      communities every day.
    </p>
  </div>
</div>


      </div>
    );
  }
}

export default About;
