import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div id="container">
    <div id="header-3" className="header">
      <h1>Over six years of innovation and collaboration.</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>

    <div className="clear">
      <p>Just getting more UXers assigned to projects that use ML won’t be enough. It’ll be essential that they understand certain core ML concepts, unpack preconceptions about AI and its capabilities, and align around best-practices for building and maintaining trust. Every stage in the ML lifecycle is ripe for innovation, from determining which models will be useful to build, to data collection, to annotation, to novel forms of prototyping and testing.</p>

      <p>We developed the following truths as anchors for why it’s so important to take a human-centered approach to building products and systems powered by ML:</p>

      <p>Machine learning won’t figure out what problems to solve. If you aren’t aligned with a human need, you’re just going to build a very powerful system to address a very small—or perhaps nonexistent—problem.</p>

      <p>If the goals of an AI system are opaque, and the user’s understanding of their role in calibrating that system are unclear, they will develop a mental model that suits their folk theories about AI, and their trust will be affected.</p>

      <p>In order to thrive, machine learning must become multi-disciplinary. It's as much–if not more so—a social systems challenge as it's a technical one. Machine learning is the science of making predictions based on patterns and relationships that've been automatically discovered in data. The job of an ML model is to figure out just how wrong it can be about the importance of those patterns in order to be as right as possible as often as possible. But it doesn't perform this task alone. Every facet of ML is fueled and mediated by human judgement; from the idea to develop a model in the first place, to the sources of data chosen to train from, to the sample data itself and the methods and labels used to describe it, all the way to the success criteria for the aforementioned wrongness and rightness. Suffice to say, the UX axiom “you are not the user” is more important than ever.</p>
    </div>
  </div>
)

export default SecondPage
