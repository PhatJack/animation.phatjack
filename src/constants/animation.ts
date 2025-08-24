export const animations = [
  {
    title: "Fade In",
    animationName: "animate-fade-in",
    code: `
--animate-fade-in: fadeIn var(--duration, 500ms) ease-in both;

@keyframes fadeIn {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}`,
  },
  {
    title: "Fade Out",
    animationName: "animate-fade-out",
    code: `
--animate-fade-out: fadeOut var(--duration, 500ms) ease-out both;

@keyframes fadeOut {
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
}`,
  },
  {
    title: "Slide In Up",
    animationName: "animate-slide-in-up",
    code: `
--animate-slide-in-up: slideInUp var(--duration, 600ms) ease-out both;

@keyframes slideInUp {
	0% {
		opacity: 0;
		transform: translateY(30px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}`,
  },
  {
    title: "Slide In Down",
    animationName: "animate-slide-in-down",
    code: `
--animate-slide-in-down: slideInDown var(--duration, 600ms) ease-out both;

@keyframes slideInDown {
	0% {
		opacity: 0;
		transform: translateY(-30px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}`,
  },
  {
    title: "Slide In Left",
    animationName: "animate-slide-in-left",
    code: `
--animate-slide-in-left: slideInLeft var(--duration, 600ms) ease-out both;

@keyframes slideInLeft {
	0% {
		opacity: 0;
		transform: translateX(-30px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}`,
  },
  {
    title: "Slide In Right",
    animationName: "animate-slide-in-right",
    code: `
--animate-slide-in-right: slideInRight var(--duration, 600ms) ease-out both;

@keyframes slideInRight {
	0% {
		opacity: 0;
		transform: translateX(30px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}`,
  },
  {
    title: "Scale In",
    animationName: "animate-scale-in",
    code: `
--animate-scale-in: scaleIn var(--duration, 400ms) ease-out both;

@keyframes scaleIn {
	0% {
		opacity: 0;
		transform: scale(0.9);
	}

	100% {
		opacity: 1;
		transform: scale(1);
	}
}`,
  },
  {
    title: "Scale Out",
    animationName: "animate-scale-out",
    code: `
--animate-scale-out: scaleOut var(--duration, 400ms) ease-in both;

@keyframes scaleOut {
	0% {
		opacity: 1;
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(0.9);
	}
}`,
  },
  {
    title: "Bounce In",
    animationName: "animate-bounce-in",
    code: `
--animate-bounce-in: bounceIn var(--duration, 800ms) ease-out both;

@keyframes bounceIn {
	0% {
		opacity: 0;
		transform: scale(0.3);
	}

	50% {
		opacity: 1;
		transform: scale(1.05);
	}

	70% {
		transform: scale(0.98);
	}

	100% {
		opacity: 1;
		transform: scale(1);
	}
}`,
  },
  {
    title: "Rotate In",
    animationName: "animate-rotate-in",
    code: `
--animate-rotate-in: rotateIn var(--duration, 600ms) ease-out both;

@keyframes rotateIn {
	0% {
		opacity: 0;
		transform: rotate(-180deg) scale(0.8);
	}

	100% {
		opacity: 1;
		transform: rotate(0deg) scale(1);
	}
}`,
  },
  {
    title: "Flip In X",
    animationName: "animate-flip-in-x",
    code: `
--animate-flip-in-x: flipInX var(--duration, 600ms) ease-out both;

@keyframes flipInX {
	0% {
		opacity: 0;
		transform: perspective(400px) rotateX(-90deg);
	}

	40% {
		transform: perspective(400px) rotateX(-10deg);
	}

	70% {
		transform: perspective(400px) rotateX(10deg);
	}

	100% {
		opacity: 1;
		transform: perspective(400px) rotateX(0deg);
	}
}`,
  },
  {
    title: "Flip In Y",
    animationName: "animate-flip-in-y",
    code: `
--animate-flip-in-y: flipInY var(--duration, 600ms) ease-out both;

@keyframes flipInY {
	0% {
		opacity: 0;
		transform: perspective(400px) rotateY(-90deg);
	}

	40% {
		transform: perspective(400px) rotateY(-10deg);
	}

	70% {
		transform: perspective(400px) rotateY(10deg);
	}

	100% {
		opacity: 1;
		transform: perspective(400px) rotateY(0deg);
	}
}`,
  },
  {
    title: "Zoom In",
    animationName: "animate-zoom-in",
    code: `
--animate-zoom-in: zoomIn var(--duration, 400ms) ease-out both;

@keyframes zoomIn {
	0% {
		opacity: 0;
		transform: scale(0);
	}

	100% {
		opacity: 1;
		transform: scale(1);
	}
}`,
  },
  {
    title: "Zoom Out",
    animationName: "animate-zoom-out",
    code: `
--animate-zoom-out: zoomOut var(--duration, 400ms) ease-in both;

@keyframes zoomOut {
	0% {
		opacity: 1;
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(0);
	}
}`,
  },
  {
    title: "Pulse",
    animationName: "animate-pulse",
    code: `
--animate-pulse: pulse var(--duration, 2000ms) ease-in-out infinite;

@keyframes pulse {
	0%, 100% {
		opacity: 1;
	}

	50% {
		opacity: 0.5;
	}
}`,
  },
  {
    title: "Heartbeat",
    animationName: "animate-heartbeat",
    code: `
--animate-heartbeat: heartbeat var(--duration, 1000ms) ease-in-out infinite;

@keyframes heartbeat {
	0% {
		transform: scale(1);
	}

	14% {
		transform: scale(1.3);
	}

	28% {
		transform: scale(1);
	}

	42% {
		transform: scale(1.3);
	}

	70% {
		transform: scale(1);
	}
}`,
  },
  {
    title: "Shake",
    animationName: "animate-shake",
    code: `
--animate-shake: shake var(--duration, 800ms) ease-in-out both;

@keyframes shake {
	0%, 100% {
		transform: translateX(0);
	}

	10%, 30%, 50%, 70%, 90% {
		transform: translateX(-10px);
	}

	20%, 40%, 60%, 80% {
		transform: translateX(10px);
	}
}`,
  },
  {
    title: "Wobble",
    animationName: "animate-wobble",
    code: `
--animate-wobble: wobble var(--duration, 1000ms) ease-in-out both;

@keyframes wobble {
	0% {
		transform: translateX(0%);
	}

	15% {
		transform: translateX(-25%) rotate(-5deg);
	}

	30% {
		transform: translateX(20%) rotate(3deg);
	}

	45% {
		transform: translateX(-15%) rotate(-3deg);
	}

	60% {
		transform: translateX(10%) rotate(2deg);
	}

	75% {
		transform: translateX(-5%) rotate(-1deg);
	}

	100% {
		transform: translateX(0%);
	}
}`,
  },
  {
    title: "Rubber Band",
    animationName: "animate-rubber-band",
    code: `
--animate-rubber-band: rubberBand var(--duration, 1000ms) ease-out both;

@keyframes rubberBand {
	0% {
		transform: scale(1);
	}

	30% {
		transform: scaleX(1.25) scaleY(0.75);
	}

	40% {
		transform: scaleX(0.75) scaleY(1.25);
	}

	50% {
		transform: scaleX(1.15) scaleY(0.85);
	}

	65% {
		transform: scaleX(0.95) scaleY(1.05);
	}

	75% {
		transform: scaleX(1.05) scaleY(0.95);
	}

	100% {
		transform: scale(1);
	}
}`,
  },
  {
    title: "Jello",
    animationName: "animate-jello",
    code: `
--animate-jello: jello var(--duration, 1000ms) ease-out both;

@keyframes jello {
	0%, 11.1%, 100% {
		transform: translate3d(0, 0, 0);
	}

	22.2% {
		transform: skewX(-12.5deg) skewY(-12.5deg);
	}

	33.3% {
		transform: skewX(6.25deg) skewY(6.25deg);
	}

	44.4% {
		transform: skewX(-3.125deg) skewY(-3.125deg);
	}

	55.5% {
		transform: skewX(1.5625deg) skewY(1.5625deg);
	}

	66.6% {
		transform: skewX(-0.78125deg) skewY(-0.78125deg);
	}

	77.7% {
		transform: skewX(0.390625deg) skewY(0.390625deg);
	}

	88.8% {
		transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
	}
}`,
  },
  {
    title: "Swing",
    animationName: "animate-swing",
    code: `
--animate-swing: swing var(--duration, 1000ms) ease-in-out both;

@keyframes swing {
	20% {
		transform: rotate(15deg);
	}

	40% {
		transform: rotate(-10deg);
	}

	60% {
		transform: rotate(5deg);
	}

	80% {
		transform: rotate(-5deg);
	}

	100% {
		transform: rotate(0deg);
	}
}`,
  },
  {
    title: "Tada",
    animationName: "animate-tada",
    code: `
--animate-tada: tada var(--duration, 1000ms) ease-in-out both;

@keyframes tada {
	0% {
		transform: scale(1);
	}

	10%, 20% {
		transform: scale(0.9) rotate(-3deg);
	}

	30%, 50%, 70%, 90% {
		transform: scale(1.1) rotate(3deg);
	}

	40%, 60%, 80% {
		transform: scale(1.1) rotate(-3deg);
	}

	100% {
		transform: scale(1) rotate(0);
	}
}`,
  },
  {
    title: "Flash",
    animationName: "animate-flash",
    code: `
--animate-flash: flash var(--duration, 1000ms) ease-in-out both;

@keyframes flash {
	0%, 50%, 100% {
		opacity: 1;
	}

	25%, 75% {
		opacity: 0;
	}
}`,
  },
  {
    title: "Light Speed In Right",
    animationName: "animate-light-speed-in-right",
    code: `
--animate-light-speed-in-right: lightSpeedInRight var(--duration, 1000ms) ease-out both;

@keyframes lightSpeedInRight {
	0% {
		transform: translate3d(100%, 0, 0) skewX(-30deg);
		opacity: 0;
	}

	60% {
		transform: skewX(20deg);
		opacity: 1;
	}

	80% {
		transform: skewX(-5deg);
	}

	100% {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
}`,
  },
  {
    title: "Light Speed In Left",
    animationName: "animate-light-speed-in-left",
    code: `
--animate-light-speed-in-left: lightSpeedInLeft var(--duration, 1000ms) ease-out both;

@keyframes lightSpeedInLeft {
	0% {
		transform: translate3d(-100%, 0, 0) skewX(30deg);
		opacity: 0;
	}

	60% {
		transform: skewX(-20deg);
		opacity: 1;
	}

	80% {
		transform: skewX(5deg);
	}

	100% {
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
}`,
  },
  {
    title: "Roll In",
    animationName: "animate-roll-in",
    code: `
--animate-roll-in: rollIn var(--duration, 1000ms) ease-out both;

@keyframes rollIn {
	0% {
		opacity: 0;
		transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
	}

	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}`,
  },
  {
    title: "Jack In The Box",
    animationName: "animate-jack-in-the-box",
    code: `
--animate-jack-in-the-box: jackInTheBox var(--duration, 1000ms) ease-in-out both;

@keyframes jackInTheBox {
	0% {
		opacity: 0;
		transform: scale(0.1) rotate(30deg);
		transform-origin: center bottom;
	}

	50% {
		transform: rotate(-10deg);
	}

	70% {
		transform: rotate(3deg);
	}

	100% {
		opacity: 1;
		transform: scale(1);
	}
}`,
  },
  {
    title: "Hinge",
    animationName: "animate-hinge",
    code: `
--animate-hinge: hinge var(--duration, 2000ms) ease-in-out both;

@keyframes hinge {
	0% {
		transform-origin: top left;
		animation-timing-function: ease-in-out;
	}

	20%, 60% {
		transform: rotate(80deg);
		transform-origin: top left;
		animation-timing-function: ease-in-out;
	}

	40%, 80% {
		transform: rotate(60deg);
		transform-origin: top left;
		animation-timing-function: ease-in-out;
		opacity: 1;
	}

	100% {
		transform: translate3d(0, 700px, 0);
		opacity: 0;
	}
}`,
  },
  {
    title: "Back In Up",
    animationName: "animate-back-in-up",
    code: `
--animate-back-in-up: backInUp var(--duration, 1000ms) ease-out both;

@keyframes backInUp {
	0% {
		transform: translateY(1200px) scale(0.7);
		opacity: 0.7;
	}

	80% {
		transform: translateY(0px) scale(0.7);
		opacity: 0.7;
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
}`,
  },
  {
    title: "Back In Down",
    animationName: "animate-back-in-down",
    code: `
--animate-back-in-down: backInDown var(--duration, 1000ms) ease-out both;

@keyframes backInDown {
	0% {
		transform: translateY(-1200px) scale(0.7);
		opacity: 0.7;
	}

	80% {
		transform: translateY(0px) scale(0.7);
		opacity: 0.7;
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
}`,
  },
  {
    title: "Back In Left",
    animationName: "animate-back-in-left",
    code: `
--animate-back-in-left: backInLeft var(--duration, 1000ms) ease-out both;

@keyframes backInLeft {
	0% {
		transform: translateX(-2000px) scale(0.7);
		opacity: 0.7;
	}

	80% {
		transform: translateX(0px) scale(0.7);
		opacity: 0.7;
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
}`,
  },
  {
    title: "Back In Right",
    animationName: "animate-back-in-right",
    code: `
--animate-back-in-right: backInRight var(--duration, 1000ms) ease-out both;

@keyframes backInRight {
	0% {
		transform: translateX(2000px) scale(0.7);
		opacity: 0.7;
	}

	80% {
		transform: translateX(0px) scale(0.7);
		opacity: 0.7;
	}

	100% {
		transform: scale(1);
		opacity: 1;
	}
}`,
  },
  {
    title: "Rotate In Down Left",
    animationName: "animate-rotate-in-down-left",
    code: `
--animate-rotate-in-down-left: rotateInDownLeft var(--duration, 1000ms) ease-out both;

@keyframes rotateInDownLeft {
	0% {
		transform-origin: left bottom;
		transform: rotate(-45deg);
		opacity: 0;
	}

	100% {
		transform-origin: left bottom;
		transform: rotate(0);
		opacity: 1;
	}
}`,
  },
  {
    title: "Rotate In Down Right",
    animationName: "animate-rotate-in-down-right",
    code: `
--animate-rotate-in-down-right: rotateInDownRight var(--duration, 1000ms) ease-out both;

@keyframes rotateInDownRight {
	0% {
		transform-origin: right bottom;
		transform: rotate(45deg);
		opacity: 0;
	}

	100% {
		transform-origin: right bottom;
		transform: rotate(0);
		opacity: 1;
	}
}`,
  },
  {
    title: "Rotate In Up Left",
    animationName: "animate-rotate-in-up-left",
    code: `
--animate-rotate-in-up-left: rotateInUpLeft var(--duration, 1000ms) ease-out both;

@keyframes rotateInUpLeft {
	0% {
		transform-origin: left bottom;
		transform: rotate(45deg);
		opacity: 0;
	}

	100% {
		transform-origin: left bottom;
		transform: rotate(0);
		opacity: 1;
	}
}`,
  },
  {
    title: "Rotate In Up Right",
    animationName: "animate-rotate-in-up-right",
    code: `
--animate-rotate-in-up-right: rotateInUpRight var(--duration, 1000ms) ease-out both;

@keyframes rotateInUpRight {
	0% {
		transform-origin: right bottom;
		transform: rotate(-90deg);
		opacity: 0;
	}

	100% {
		transform-origin: right bottom;
		transform: rotate(0);
		opacity: 1;
	}
}`,
  },
  {
    title: "Slide Out Up",
    animationName: "animate-slide-out-up",
    code: `
--animate-slide-out-up: slideOutUp var(--duration, 1000ms) ease-in both;

@keyframes slideOutUp {
	0% {
		transform: translate3d(0, 0, 0);
	}

	100% {
		visibility: hidden;
		transform: translate3d(0, -100%, 0);
	}
}`,
  },
  {
    title: "Slide Out Down",
    animationName: "animate-slide-out-down",
    code: `
--animate-slide-out-down: slideOutDown var(--duration, 1000ms) ease-in both;

@keyframes slideOutDown {
	0% {
		transform: translate3d(0, 0, 0);
	}

	100% {
		visibility: hidden;
		transform: translate3d(0, 100%, 0);
	}
}`,
  },
  {
    title: "Slide Out Left",
    animationName: "animate-slide-out-left",
    code: `
--animate-slide-out-left: slideOutLeft var(--duration, 600ms) ease-in both;

@keyframes slideOutLeft {
	0% {
		transform: translateX(0);
	}

	100% {
		visibility: hidden;
		transform: translateX(-100%);
	}
}`,
  },
  {
    title: "Slide Out Right",
    animationName: "animate-slide-out-right",
    code: `
--animate-slide-out-right: slideOutRight var(--duration, 600ms) ease-in both;

@keyframes slideOutRight {
	0% {
		transform: translateX(0);
	}

	100% {
		visibility: hidden;
		transform: translateX(100%);
	}
}`,
  },
  {
    title: "Bounce Out",
    animationName: "animate-bounce-out",
    code: `
--animate-bounce-out: bounceOut var(--duration, 750ms) ease-in both;

@keyframes bounceOut {
	20% {
		transform: scale3d(0.9, 0.9, 0.9);
	}

	50%, 55% {
		opacity: 1;
		transform: scale3d(1.1, 1.1, 1.1);
	}

	100% {
		opacity: 0;
		transform: scale3d(0.3, 0.3, 0.3);
	}
}`,
  },
  {
    title: "Flip Out X",
    animationName: "animate-flip-out-x",
    code: `
--animate-flip-out-x: flipOutX var(--duration, 750ms) ease-in both;

@keyframes flipOutX {
	0% {
		transform: perspective(400px);
	}

	30% {
		transform: perspective(400px) rotateX(-20deg);
		opacity: 1;
	}

	100% {
		transform: perspective(400px) rotateX(90deg);
		opacity: 0;
	}
}`,
  },
  {
    title: "Flip Out Y",
    animationName: "animate-flip-out-y",
    code: `
--animate-flip-out-y: flipOutY var(--duration, 750ms) ease-in both;

@keyframes flipOutY {
	0% {
		transform: perspective(400px);
	}

	30% {
		transform: perspective(400px) rotateY(-15deg);
		opacity: 1;
	}

	100% {
		transform: perspective(400px) rotateY(90deg);
		opacity: 0;
	}
}`,
  },
  {
    title: "Float",
    animationName: "animate-float",
    code: `
--animate-float: float var(--duration, 3000ms) ease-in-out infinite;

@keyframes float {
	0%, 100% {
		transform: translateY(0px);
	}

	50% {
		transform: translateY(-20px);
	}
}`,
  },
  {
    title: "Blur In",
    animationName: "animate-blur-in",
    code: `
--animate-blur-in: blurIn var(--duration, 600ms) ease-out both;

@keyframes blurIn {
	0% {
		filter: blur(12px);
		opacity: 0;
	}

	100% {
		filter: blur(0px);
		opacity: 1;
	}
}`,
  },
  {
    title: "Blur Out",
    animationName: "animate-blur-out",
    code: `
--animate-blur-out: blurOut var(--duration, 600ms) ease-in both;

@keyframes blurOut {
	0% {
		filter: blur(0px);
		opacity: 1;
	}

	100% {
		filter: blur(12px);
		opacity: 0;
	}
}`,
  },
  {
    title: "Spiral In",
    animationName: "animate-spiral-in",
    code: `
--animate-spiral-in: spiralIn var(--duration, 800ms) ease-out both;

@keyframes spiralIn {
	0% {
		transform: rotate(0deg) scale(0);
		opacity: 0;
	}

	100% {
		transform: rotate(360deg) scale(1);
		opacity: 1;
	}
}`,
  },
  {
    title: "Spiral Out",
    animationName: "animate-spiral-out",
    code: `
--animate-spiral-out: spiralOut var(--duration, 800ms) ease-in both;

@keyframes spiralOut {
	0% {
		transform: rotate(0deg) scale(1);
		opacity: 1;
	}

	100% {
		transform: rotate(-360deg) scale(0);
		opacity: 0;
	}
}`,
  },
  {
    title: "Matrix",
    animationName: "animate-matrix",
    code: `
--animate-matrix: matrix var(--duration, 2000ms) linear infinite;

@keyframes matrix {
	0%, 100% {
		transform: translateY(-100%) rotateX(0deg);
	}

	50% {
		transform: translateY(0%) rotateX(180deg);
	}
}`,
  },
  {
    title: "Glitch",
    animationName: "animate-glitch",
    code: `
--animate-glitch: glitch var(--duration, 1000ms) ease-in-out infinite;

@keyframes glitch {
	0%, 100% {
		transform: translate(0);
	}

	20% {
		transform: translate(-2px, 2px);
	}

	40% {
		transform: translate(-2px, -2px);
	}

	60% {
		transform: translate(2px, 2px);
	}

	80% {
		transform: translate(2px, -2px);
	}
}`,
  },
  {
    title: "Morphing",
    animationName: "animate-morphing",
    code: `
--animate-morphing: morphing var(--duration, 2000ms) ease-in-out infinite;

@keyframes morphing {
	0%, 100% {
		border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	}

	25% {
		border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
	}

	50% {
		border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
	}

	75% {
		border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
	}
}`,
  },
  {
    title: "Wave",
    animationName: "animate-wave",
    code: `
--animate-wave: wave var(--duration, 2000ms) ease-in-out infinite;

@keyframes wave {
	0%, 100% {
		transform: rotate(0deg);
	}

	10%, 30% {
		transform: rotate(14deg);
	}

	20%, 40% {
		transform: rotate(-8deg);
	}

	50%, 70% {
		transform: rotate(14deg);
	}

	60%, 80% {
		transform: rotate(-4deg);
	}
}`,
  },
  {
    title: "Tilt",
    animationName: "animate-tilt",
    code: `
--animate-tilt: tilt var(--duration, 1000ms) ease-in-out infinite;

@keyframes tilt {
	0%, 100% {
		transform: rotate(0deg);
	}

	25% {
		transform: rotate(5deg);
	}

	75% {
		transform: rotate(-5deg);
	}
}`,
  },
  {
    title: "Squeeze",
    animationName: "animate-squeeze",
    code: `
--animate-squeeze: squeeze var(--duration, 1000ms) ease-in-out infinite;

@keyframes squeeze {
	0%, 100% {
		transform: scaleX(1);
	}

	50% {
		transform: scaleX(0.8);
	}
}`,
  },
];
