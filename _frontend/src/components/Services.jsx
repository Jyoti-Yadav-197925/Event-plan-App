import React from "react";

export default function Services() {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/camping.jpg",
      title: "Camping Travel Plan",
    },
    {
      id: 3,
      url: "/event_design.jpg",
      title: "Event Plan",
    },
    {
      id: 4,
      url: "/haldi_ceremony.jpg",
      title: "Haldi Ceremony Plan",
    },
    {
      id: 5,
      url: "/plan.jpg",
      title: "Wedding Plan",
    },
    {
      id: 6,
      url: "/ring_ceremony.jpg",
      title: "Ring Ceremony Plan",
    },
    {
      id: 7,
      url: "/wedding.jpg",
      title: "Wedding Shoot",
    },
    {
      id: 8,
      url: "/pool_party.jpg",
      title: "Pool Party Plan",
    },
    {
      id: 9,
      url: "/restaurant.jpg",
      title: "Get-to-Gather Plan",
    },
  ];

  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
