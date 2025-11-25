import { Check } from "lucide-react";

import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/image26.jpg",
      title: "QUARTERLY",
      price: 6000,
      length: 3
    },
    {
      imgUrl: "/image26.jpg",
      title: "HALF YEARLY",
      price: 10000,
      length: 6
    },
    {
      imgUrl: "/image26.jpg",
      title: "YEARLY",
      price: 15000,
      length: 12
    },
  ];
  return (
    <section className="pricing">
      <h1>IRON PARADISE PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGES</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipment
                </p>
                <p>
                  <Check /> 24/7 OPEN
                </p>
                <p>
                  <Check /> Free Restroom
                </p>
                <p>
                  <Check /> PERSONAL TRAINER
                </p>
                <p>
                  <Check /> 10 Days Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;