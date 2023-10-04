import './ResultsPage.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ResultsPage = () => {
  const { id } = useParams(); // Obtener el parámetro de la URL

  const [results, setResults] = useState(null); // Estado para almacenar los resultados

  useEffect(() => {
    // Realizar una solicitud para obtener los resultados con el ID proporcionado
    fetch(`http://localhost:3000/respuestas/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Actualizar el estado con los resultados obtenidos
        setResults(data);
      })
      .catch((error) => {
        console.error('Error al obtener los resultados:', error);
      });
  }, [id]);

  // Renderizar los resultados cuando estén disponibles
  return (
    <div className="results-page">
      <h2>Resultados del Test</h2>
      {results ? (
        <div>
          <p>Arte y Creatividad: {results['Arte y Creatividad']}</p>
          <p>Ciencias Sociales: {results['Ciencias Sociales']}</p>
          <p>Economía, Administración y Finanzas: {results['Economía, Administración y Finanzas']}</p>
          <p>Ciencia y Tecnología: {results['Ciencia y Tecnologia']}</p>
          <p>Ciencias de la Salud: {results['Ciencias de la Salud']}</p>
          <p>Ciencias Ecológicas y Ambientales: {results['Ciencias Ecológicas y Ambientales']}</p>
          <p>Fecha: {results.date}</p>
          {/* Puedes agregar más campos aquí según sea necesario */}
        </div>
      ) : (
        <p>Cargando resultados...</p>
      )}
    </div>
  )
}

export default ResultsPage;