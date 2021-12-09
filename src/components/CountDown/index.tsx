/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "./styles";
import { useEffect, useRef, useState } from "react";
import { start } from "repl";

export function CountDown() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval: any = useRef();

  const startTimer = () => {
    const countdownDate = new Date("jan 1, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <Container>
      <section>
        <p>{timerDays < 10 ? `0${timerDays}` : `${timerDays}`}</p>
        <p>
          <small>DAYS</small>
        </p>
      </section>
      <section>
        <p>{timerHours < 10 ? `0${timerHours}` : `${timerHours}`}</p>
        <p>
          <small>HOURS</small>
        </p>
      </section>
      <section>
        <p>{timerMinutes < 10 ? `0${timerMinutes}` : `${timerMinutes}`}</p>
        <p>
          <small>MINUTES</small>
        </p>
      </section>
      <section>
        <p>{timerSeconds < 10 ? `0${timerSeconds}` : `${timerSeconds}`}</p>
        <p>
          <small>SECONDS</small>
        </p>
      </section>
    </Container>
  );
}
