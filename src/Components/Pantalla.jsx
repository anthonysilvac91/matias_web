import React, { useState, useEffect } from 'react';

const Pantalla = () => {
  const [tamaño, setTamaño] = useState({
    ancho: window.innerWidth,
    alto: window.innerHeight
  });

  useEffect(() => {
    const actualizarTamaño = () => {
      setTamaño({
        ancho: window.innerWidth,
        alto: window.innerHeight
      });
    };

    // Escuchar el evento de redimensionar
    window.addEventListener('resize', actualizarTamaño);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', actualizarTamaño);
    };
  }, []);

  return (
    <div className='padding-general'>
      <h2>Tamaño de pantalla</h2>
      <p>Ancho: {tamaño.ancho}px</p>
      <p>Alto: {tamaño.alto}px</p>
    </div>
  );
};

export default Pantalla;
