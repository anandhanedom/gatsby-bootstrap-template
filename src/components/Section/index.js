import React from "react";
import Container from "react-bootstrap/Container";

const Section = ({ children, variant = "light", fluid = false }) => {
  const styles = {
    backgroundColour: "",
    textColour: "",
  };

  switch (variant) {
    case "dark":
      styles.backgroundColour = "bg-dark";
      styles.textColour = "text-white";
      break;

    default:
      styles.backgroundColour = "bg-white";
      styles.textColour = "text-dark";
      break;
  }

  return (
    <section
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      className={`${styles.backgroundColour} ${styles.textColour}`}
    >
      <Container fluid={fluid}>{children}</Container>
    </section>
  );
};

export default Section;
