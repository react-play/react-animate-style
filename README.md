# react-animate-style

> Easy animate react app with animate.css library

[![Release](https://img.shields.io/github/v/release/react-play/react-animate-style?style=for-the-badge)](https://github.com/react-play/react-animate-style/releases) [![Node](https://img.shields.io/node/v/react-play/react-animate-style?style=for-the-badge)](https://www.npmjs.com/package/react-play/react-animate-style) ![TypeScript](https://img.shields.io/npm/types/typescript?style=for-the-badge) ![Build for React](https://img.shields.io/badge/Build%20for-React-61dafb?style=for-the-badge) [![Test](https://img.shields.io/appveyor/tests/react-play/react-animate-style?style=for-the-badge)](https://github.com/react-play/react-animate-style/actions/)

## Install
**With npm :**
```bash
npm install --save react-animate-style
```

**With yarn :**
```bash
yarn add react-animate-style
```

## Usage

Import `Animation` component from `react-animate-style` and wrap your content with `<Animation>[...]</Animation>` tags. Availables props to configure animation are described in [Props](#props) section


```tsx
import {Animation} from 'react-animate-style'


class Example extends Component {
  render() {
    return <Animation animationIn="bounceIn" animationOut="bounceOut" >
      <div>My animated content</div>
    </Animation>
  }
}
```

## Props
### `animationIn`
The animation to use when the component mounts or when isVisible change to true.
If not set or set to null, No animation will be applied. 
You need to use the [animate.css](https://animate.style) animation name. You can also read [Available animations](#available-animations) section to get the complete liste

### `animationOut`
The animation to use when the component unmounts or when isVisible change to false.
If not set or set to null, No animation will be applied. 
You need to use the [animate.css](https://animate.style) animation name. You can also read [Available animations](#available-animations) section to get the complete liste
   
### `animationInDelay`
  The delay in miliseconds to wait before start the entrance animation. For example, to wait 1 second before start animation, you need to set this props to `1000`

### `animationOutDelay`
  The delay in miliseconds to wait before start the exit animation. For example, to wait 1 second before start animation, you need to set this props to `1000`

### `animationInDuration`
The duration in miliseconds of the entrance animation. By default it set to `1000` or 1 second

### `animationOutDuration`
The duration in miliseconds of the exit animation. By default it set to `1000` or 1 second
  
### `isVisible`
  Display or not the content. Set this to `true` to start the entrance animation (if defined) and display this component.
  Set this to `false` to start the exit animation (if defined) and hide this component.
  By default, this parameter is set to `true`. In this way, if you not provide this props, content of `Animation` is automatically animated and displayed on render.
> **Note :** Exit animation is started when `isVisible` is set to `false` only if `isVisible` was set to `true` in a previous state. If `isVisible` receive `false` as initial state, content is hidden but not animation was launched on render.

### `style`
   The JSS style object applied to the component.
   for example, you can set this value to `{ backgroundColor: '#ff0000' }`

### `className`
The complementary classes to apply to animation container.
For exemple, you can set this to `'my-class'`
   
### `ref`
The ref to attach to the animation container.

## Available animation
Available animations are all animations available on **[Animate.style](https://animate.style)** webstie. You can try each of them on their website

 - bounce
 - flash
 - pulse
 - rubberBand
 - shakeX
 - shakeY
 - headShake
 - swing
 - tada
 - wobble
 - jello
 - heartBeat
 - backInDown
 - backInLeft
 - backInRight
 - backInUp
 - backOutDown
 - backOutLeft
 - backOutRight
 - backOutUp
 - bounceIn
 - bounceInDown
 - bounceInLeft
 - bounceInRight
 - bounceInUp
 - bounceOut
 - bounceOutDown
 - bounceOutLeft
 - bounceOutRight
 - bounceOutUp
 - fadeIn
 - fadeInDown
 - fadeInDownBig
 - fadeInLeft
 - fadeInLeftBig
 - fadeInRight
 - fadeInRightBig
 - fadeInUp
 - fadeInUpBig
 - fadeInTopLeft
 - fadeInTopRight
 - fadeInBottomLeft
 - fadeInBottomRight
 - fadeOut
 - fadeOutDown
 - fadeOutDownBig
 - fadeOutLeft
 - fadeOutLeftBig
 - fadeOutRight
 - fadeOutRightBig
 - fadeOutUp
 - fadeOutUpBig
 - fadeOutTopLeft
 - fadeOutTopRight
 - fadeOutBottomRight
 - fadeOutBottomLeft
 - flip
 - flipInX
 - flipInY
 - flipOutX
 - flipOutY
 - lightSpeedInRight
 - lightSpeedInLeft
 - lightSpeedOutRight
 - lightSpeedOutLeft
 - rotateIn
 - rotateInDownLeft
 - rotateInDownRight
 - rotateInUpLeft
 - rotateInUpRight
 - rotateOut
 - rotateOutDownLeft
 - rotateOutDownRight
 - rotateOutUpLeft
 - rotateOutUpRight
 - hinge
 - jackInTheBox
 - rollIn
 - rollOut
 - zoomIn
 - zoomInDown
 - zoomInLeft
 - zoomInRight
 - zoomInUp
 - zoomOut
 - zoomOutDown
 - zoomOutLeft
 - zoomOutRight
 - zoomOutUp
 - slideInDown
 - slideInLeft
 - slideInRight
 - slideInUp
 - slideOutDown
 - slideOutLeft
 - slideOutRight
 - slideOutU

## License

MIT © [fabienlege](https://github.com/fabienlege)
