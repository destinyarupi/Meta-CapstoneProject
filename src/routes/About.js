import React from 'react';
import Header from '../components/Header'

const About = () => {
  const styles = {
    textAlign: "center",
    paddingTop: "15%"
  }
  return (
    <div>
      <Header />
      <h1 style={styles}>About</h1>
    </div>
  )
}

export default About
