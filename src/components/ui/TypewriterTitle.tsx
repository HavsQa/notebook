"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("prochain projet ?")
          .pauseFor(1000)
          .deleteAll()
          .typeString("réunion ?")
          .pauseFor(1000)
          .deleteAll()
          .typeString("liste de courses ?")
          .pauseFor(1000)
          .deleteAll()
          .typeString("rendez-vous médical ?")
          .pauseFor(1000)
          .deleteAll()
          .typeString("prochain voyage ?")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
