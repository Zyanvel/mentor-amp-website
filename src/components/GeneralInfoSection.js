import React from "react";
import "./GeneralInfoSection.css";

//Here we created a basic component dividing to main containers where some text content was added.
// We storaged all the styling for this component under the GeneralInfoSection.css file.
function GeneralInfoSection() {
  return (
    <div id="container-container">
      <div className="first-part">
        <p className="first-part-p">
          Do you really know how well each person in your circle is doing?
        </p>
        <p className="first-part-p">
          Would you like to see your people rise to new heights?
        </p>
        <p className="first-part-p">
          Here are some stories that illustrate how MentorAmp can bring your
          circle to new levels of happiness, connection and success...
        </p>
      </div>

      <div id="container">
        <h2 className="headers blue-text">Who we serve</h2>
        <p className="p1">
          MentorAmp is designed for influencers of every kind of circle, small
          or large<span className="orange-text">...</span> from{" "}
          <span className="light-blue-text">community groups</span>
          <span className="orange-text"> to</span>
          <span className="light-blue-text"> sales teams</span>
          <span className="orange-text"> to</span>
          <span className="light-blue-text"> entire organizations</span>.
        </p>
        <h2 className="headers blue-text about-people">
          Mentor<span className="orange-text">Amp</span> is about people
        </h2>
        <p className="p2">
          Do you really know how well each person in your circle is doing?
        </p>
        <p className="p2">
          Would you like to see your people rise to new heights?
        </p>
        <p className="p3 blue-text">
          Here are some stories that illustrate how MentorAmp can bring your
          circle to new levels of happiness, connection and success
          <span className="orange-text">...</span>
        </p>
      </div>
    </div>
  );
}

export default GeneralInfoSection;
