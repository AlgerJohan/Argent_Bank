import React from "react";

/**
 * The image, title
 * @param props - This is the object that contains all the data that is passed to the component.
 */
const Features = (props) =>
  props.data.map((feature, index) => (
    <div key={index} className="feature-item">
      <img className="feature-icon" src={feature.icon} alt="Chat Icon" />
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
    </div>
  ));
export default Features;
