import React from 'react'
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.min.css';
import classes from './Animation.module.css';

type CssAnimation = 'bounce' | 'flash' | 'pulse' | 'rubberBand' | 'shakeX' | 'shakeY' | 'headShake' | 'swing' | 'tada' | 'wobble' | 'jello' | 'heartBeat' | 'backInDown' | 'backInLeft' | 'backInRight' | 'backInUp' | 'backOutDown' | 'backOutLeft' | 'backOutRight' | 'backOutUp' | 'bounceIn' | 'bounceInDown' | 'bounceInLeft' | 'bounceInRight' | 'bounceInUp' | 'bounceOut' | 'bounceOutDown' | 'bounceOutLeft' | 'bounceOutRight' | 'bounceOutUp' | 'fadeIn' | 'fadeInDown' | 'fadeInDownBig' | 'fadeInLeft' | 'fadeInLeftBig' | 'fadeInRight' | 'fadeInRightBig' | 'fadeInUp' | 'fadeInUpBig' | 'fadeInTopLeft' | 'fadeInTopRight' | 'fadeInBottomLeft' | 'fadeInBottomRight' | 'fadeOut' | 'fadeOutDown' | 'fadeOutDownBig' | 'fadeOutLeft' | 'fadeOutLeftBig' | 'fadeOutRight' | 'fadeOutRightBig' | 'fadeOutUp' | 'fadeOutUpBig' | 'fadeOutTopLeft' | 'fadeOutTopRight' | 'fadeOutBottomRight' | 'fadeOutBottomLeft' | 'flip' | 'flipInX' | 'flipInY' | 'flipOutX' | 'flipOutY' | 'lightSpeedInRight' | 'lightSpeedInLeft' | 'lightSpeedOutRight' | 'lightSpeedOutLeft' | 'rotateIn' | 'rotateInDownLeft' | 'rotateInDownRight' | 'rotateInUpLeft' | 'rotateInUpRight' | 'rotateOut' | 'rotateOutDownLeft' | 'rotateOutDownRight' | 'rotateOutUpLeft' | 'rotateOutUpRight' | 'hinge' | 'jackInTheBox' | 'rollIn' | 'rollOut' | 'zoomIn' | 'zoomInDown' | 'zoomInLeft' | 'zoomInRight' | 'zoomInUp' | 'zoomOut' | 'zoomOutDown' | 'zoomOutLeft' | 'zoomOutRight' | 'zoomOutUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideOutDown' | 'slideOutLeft' | 'slideOutRight' | 'slideOutUp'

export interface Props {

  /**
   * The component to animate.
   * @type {React.ReactNode}
   * @required
   * @example <div>Test</div>
   */
  children: React.ReactNode,

  /**
   * The animation to use when the component mounts or when isVisible change to true.
   * If not set or set to null, No animation will be applied. 
   * Use the animate.css classes.
   * @type {string}
   * @default null
   * @see https://animate.style/
   * @example 'fadeIn'
   * @example 'fadeInDown'
   */
  animationIn?: CssAnimation | null,

  /**
   * The animation to use when the component unmounts or when isVisible change to false.
   * If not set or set to null, No animation will be applied. 
   * Use the animate.css classes.
   * @type {string}
   * @default null
   * @see https://animate.style/
   * @example 'fadeOut'
   * @example 'fadeOutDown'
   */
  animationOut?: CssAnimation | null,

  /**
   * The delay in miliseconds to wait before start the entrance animation.
   * @type {number}
   * @default 0
   * @example 500
   * @example 1000
   */
  animationInDelay?: number,

  /**
   * The delay in miliseconds to wait before start the exit animation.
   * @type {number}
   * @default 0
   * @example 500
   * @example 1000
   */
  animationOutDelay?: number,

  /**
   * The duration in miliseconds of the entrance animation.
   * @type {number}
   * @default 0
   * @example 500
   * @example 1000
   */
  animationInDuration?: number,

  /**
   * The duration in miliseconds of the exit animation.
   * @type {number}
   * @default 0
   * @example 500
   * @example 1000
   */
  animationOutDuration?: number,

  /**
   * Set this to TRUE to start the entrance animation (if defined) and display this component.
   * Set this to FALSE to start the exit animation (if defined) and hide this component.
   * @type {boolean}
   * @default false
   * @example true
   */
  isVisible?: boolean,

  /**
   * The JSS style applied to the component.
   * @type {object}
   * @default null
   * @example { backgroundColor: '#ff0000' }
   */
  style?: object | null,

  /**
   * The complementar class to apply to animation container.
   * @type {string}
   * @default null
   * @example 'my-class'
   */
  className?: string | null,

  /**
   * The ref to attach to the animation container.
   * @type {React.Ref<any>}
   * @default null
   */
  ref?: React.Ref<any> | null,
}

const Animation = ({
  animationIn = null,
  animationOut = null,
  animationInDelay = 0,
  animationOutDelay = 0,
  animationInDuration = 1000,
  animationOutDuration = 1000,
  isVisible = false,
  style = null,
  className = null,
  children,
  ref = undefined
}: Props) => {
  style = {
    ...style,
    animationDelay: `${isVisible ? animationInDelay : animationOutDelay}ms`,
    animationDuration: `${isVisible ? animationInDuration : animationInDuration}ms`,
  }

  const nodeRef = React.useRef<HTMLDivElement>(null)

  return (
    <CSSTransition
      in={isVisible}
      className={className}
      appear={true}
      enter={Boolean(animationIn)}
      exit={Boolean(animationOut)}
      style={style}
      data-delay-in={animationInDelay}
      data-delay-out={animationOutDelay}
      mountOnEnter
      unmountOnExit
      ref={ref}
      nodeRef={nodeRef}
      timeout={{
        enter: animationInDelay + animationInDuration,
        exit: animationOutDelay + animationOutDuration,
      }}
      classNames={{
        appear: isVisible ? `animate__animated` : 'react_animate_css_hide',
        appearActive: isVisible ? `animate__animated animate__${animationIn} ${animationInDelay ? classes.delay_in : ''}` : 'react_animate_css_hide',
        appearDone: isVisible ? `animate__animated animate__${animationIn} ${animationInDelay ? classes.delay_in : ''}` : 'react_animate_css_hide',
        enter: `animate__animated`,
        enterActive: `animate__animated animate__${animationIn} ${animationInDelay ? classes.delay_in : ''}`,
        enterDone: `animate__animated animate__${animationIn} ${animationInDelay ? classes.delay_in : ''}`,
        exit: `animate__animated`,
        exitActive: `animate__animated animate__${animationOut} ${animationInDelay ? 'animate__delay-out' : ''}`,
        exitDone: `animate__animated animate__${animationOut} ${animationInDelay ? 'animate__delay-out' : ''}`,
      }}
    ><div ref={nodeRef}>{children}</div></CSSTransition>
  )
}

export default Animation 