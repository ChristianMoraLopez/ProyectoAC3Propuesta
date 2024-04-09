import React, { useState, useEffect } from 'react';
import { Play } from '@components/SVGIcons';
import { Button } from 'semantic-ui-react'

type PlayIconProps = {
  name: string;
};

const StartCall = ({ name }: PlayIconProps) => {
  const [seconds, setSeconds] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const remainingSeconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleClick = () => {
    setSeconds(0); // Reiniciar el contador de segundos a cero
    setClicked(true); // Cambiar el estado de clicked a true

    // Después de 1 segundo, resetea el estado de clicked a false
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <div className="container" onClick={handleClick}>
     
        <Button className={`play-container ${clicked ? 'clicked' : ''}`} circular style={{ padding: 0 }}  >
        <Play/>
        </Button>
    
      <div className="text">
        {` ${name} `}
        <span>{formatTime(seconds)}</span>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          
          cursor: pointer; // Hacer que el cursor cambie al pasar sobre el componente
        }

        .play-container {
          padding: 0;
          border-radius: 50%; // Hacer que el contenedor del ícono sea un círculo
          transition: fill 0.5s; // Transición suave del color de relleno
        }

        .play-container.clicked  {
          fill:#E6C870 ; // Cambia el color de relleno del ícono al hacer clic
          background-color: #E5E8E1; // Cambia el color de fondo del ícono al hacer clic
        }

        .text {
          margin-left: 0.5rem;
        }
        .text span {
          font-size: smaller;
        }
      `}</style>
    </div>
  );
};

export default StartCall;
