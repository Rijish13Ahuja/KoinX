import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      image: "https://img.freepik.com/free-photo/young-adult-man-wearing-hoodie-beanie_23-2149393636.jpg", 
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww", 
    },
    {
      name: "John Smith",
      designation: "Designation here",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
      image: "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww", 
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-10">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Team</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
      </div>

      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-gray-100 rounded-lg p-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.designation}</p>
              <p className="text-xl text-gray-700 leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
