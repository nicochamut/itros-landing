import { useEffect, useMemo, useRef, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* Bloquear scroll mientras está la intro */
const NoScroll = createGlobalStyle` body { overflow: hidden; } `;

/* Blink del cursor */
const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

/* Fullscreen overlay */
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 9999;
  display: grid;
  place-items: center;
  pointer-events: none;
`;

const Row = styled(motion.div)`
  display: inline-flex;
  align-items: baseline;
`;

const Char = styled(motion.span)`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 3rem;
  font-size: clamp(40px, 8vw, 96px);
`;

/* Cursor tipo “barra” */
const Caret = styled.span`
  display: inline-block;
  width: 0.18em;
  height: 1em;
  margin-left: 0.12em;
  background: #fff;
  transform: translateY(0.06em);
  animation: ${blink} 1s steps(1) infinite;
  border-radius: 1px;
`;

export default function Intro({
  text = "ITROS",
  bg = "#000",
  preDelay = 0.2, // s antes de empezar
  charDelay = 0.08, // s entre letras
  hold = 0.6, // s al finalizar
  fadeOut = 0.4, // s del fundido de salida
  forceCloseAfter = 2, // s de seguridad
  onFinish,
  children,
}) {
  const [show, setShow] = useState(true);
  const [typingDone, setTypingDone] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const letters = useMemo(() => [...String(text)], [text]);
  const closeTimerRef = useRef(null);
  const safetyTimerRef = useRef(null);

  const writeTime = prefersReducedMotion
    ? 0
    : preDelay + letters.length * charDelay;
  const total = writeTime + hold + fadeOut;

  useEffect(() => {
    // marcar fin de escritura
    const t1 = setTimeout(() => setTypingDone(true), writeTime * 1000);

    // fade out y desmontar
    closeTimerRef.current = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, total * 1000);

    // seguridad
    safetyTimerRef.current = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, forceCloseAfter * 1000);

    return () => {
      clearTimeout(t1);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (safetyTimerRef.current) clearTimeout(safetyTimerRef.current);
    };
  }, [total, writeTime, onFinish, forceCloseAfter]);

  const containerVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: { delayChildren: preDelay, staggerChildren: charDelay },
        },
      };

  const charVariants = prefersReducedMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: "0.35em", filter: "blur(10px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.28, ease: "easeOut" },
        },
      };

  return (
    <>
      {children}

      <AnimatePresence>
        {show && (
          <>
            <NoScroll />
            <Overlay
              key="intro"
              style={{ background: bg }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: fadeOut, ease: "easeIn" },
              }}
            >
              <Row variants={containerVariants} initial="hidden" animate="show">
                {letters.map((ch, i) => (
                  <Char key={i} variants={charVariants}>
                    {ch}
                  </Char>
                ))}
                {!typingDone && <Caret />}
              </Row>
            </Overlay>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
