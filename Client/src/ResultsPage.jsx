import { useParams } from 'react-router-dom';
import { useFetch } from './useFetch';

import './ResultsPage.css';

const ResultsPage = () => {
  const { id } = useParams(); // Obtener el parámetro de la URL
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useFetch(`http://localhost:3000/respuestas/${id}`);
  // Función para obtener las dos áreas con mayor puntaje
  const getTopTwoAreas = (responseData) => {
    // Obtener las áreas y puntajes como pares clave-valor
    const areaScores = Object.entries(responseData)
      // eslint-disable-next-line no-unused-vars
      .filter(([key, value]) => typeof value === 'number'); // Filtrar solo pares con valores numéricos

    // Ordenar las áreas por puntaje en orden descendente
    areaScores.sort((a, b) => b[1] - a[1]);

    // Tomar las dos primeras áreas después de ordenar
    const topTwoAreas = areaScores.slice(0, 2);

    return topTwoAreas;
  };

  const topTwoAreas = data ? getTopTwoAreas(data) : [];

  // Renderizar los resultados cuando estén disponibles
  return (
    <div className="results-page">
      <h2>Resultados del Test</h2>
      {data ? (
        <div>
          <p>Arte y Creatividad: {data['Arte y Creatividad']}</p>
          <p>Ciencias Sociales: {data['Ciencias Sociales']}</p>
          <p>Economía, Administración y Finanzas: {data['Economía, Administración y Finanzas']}</p>
          <p>Ciencia y Tecnología: {data['Ciencia y Tecnologia']}</p>
          <p>Ciencias de la Salud: {data['Ciencias de la Salud']}</p>
          <p>Ciencias Ecológicas y Ambientales: {data['Ciencias Ecológicas y Ambientales']}</p>
          <p>Fecha: {data.date}</p>
          <h3>Las dos áreas con mayor puntaje:</h3>
          <div className='top-areas'>
          {topTwoAreas.map(([area, score]) => (
              <div key={area}>
                <p>{area}: {score}</p>
              </div>
            ))}
          </div>
            
  
          {/* Puedes agregar más campos aquí según sea necesario */}
        </div>
      ) : (
        <p>Cargando resultados...</p>
      )}
    </div>
  );
}

export default ResultsPage;
