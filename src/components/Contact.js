const Contact=()=>{
    const name = "Diya";
    const skills = ["React.Js","JavaScript","SQL"]; // Example skills
    const email = "diyacse15@gmail.com";
    const contactNo = "91-9588165884";
    const university = "Guru Jambheshwar University , Hisar";
  
    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="bg-gray-100 rounded-md p-4 mb-4">
          <p className="font-bold">Name:</p>
          <p>{name}</p>
        </div>
        <div className="bg-gray-100 rounded-md p-4 mb-4">
          <p className="font-bold">Skills:</p>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 rounded-md p-4 mb-4">
          <p className="font-bold">Email:</p>
          <p>{email}</p>
        </div>
        <div className="bg-gray-100 rounded-md p-4 mb-4">
          <p className="font-bold">Contact No:</p>
          <p>{contactNo}</p>
        </div>
        <div className="bg-gray-100 rounded-md p-4 mb-4">
          <p className="font-bold">University:</p>
          <p>{university}</p>
        </div>
      </div>);
}
export default Contact