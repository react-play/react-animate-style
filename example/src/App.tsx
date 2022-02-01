import React from 'react'

import { Animation } from 'react-animate-css'
import 'react-animate-css/dist/index.css'

const App = () => {
  const [animate, setAnimate] = React.useState(true)
  return (<div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
    <Animation animationIn='bounceIn' animationInDuration={5000} animationOut='bounceOut' animationInDelay={1000} animationOutDelay={5000} isVisible={animate}><div>Test</div></Animation><br />
    <button onClick={() => setAnimate(!animate)}>{animate ? 'Exit' : 'in'}</button>
  </div>)
}

export default App
