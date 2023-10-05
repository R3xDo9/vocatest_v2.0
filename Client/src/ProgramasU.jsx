import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useFetch } from './useFetch';

import './ResultsPage.css';

const ProgramasU = () => {
  const { data, loading, error } = useFetch('http://localhost:3000/programas');
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(5); // Número de resultados por página

  // Función para manejar el cambio de página
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calcula el índice del primer y último elemento en la página actual
  const indexOfLastResult = (currentPage + 1) * perPage;
  const indexOfFirstResult = indexOfLastResult - perPage;
  const currentResults = data ? data.slice(indexOfFirstResult, indexOfLastResult) : [];

  return (
    <div className='result-data'>
      <h2>Programas universitarios</h2>
      {error && <div className="error"><h2>X..Error:{error}..X</h2></div>}
      {loading && <div className="question-header"><h2>Loading...</h2></div>}
      <table>
        <thead>
          <tr>
            <th>CÓDIGO_INSTITUCIÓN</th>
            <th>NOMBRE_INSTITUCIÓN</th>
            <th>ESTADO_INSTITUCIÓN</th>
            <th>CARÁCTER_ACADÉMICO</th>
            <th>SECTOR</th>
            <th>CÓDIGO_SNIES_DEL_PROGRAMA</th>
            <th>NOMBRE_DEL_PROGRAMA</th>
            <th>ESTADO_PROGRAMA</th>
            <th>ÁREA_DE_CONOCIMIENTO</th>
            <th>NIVEL_ACADÉMICO</th>
            <th>MODALIDAD</th>
            {/* Agrega más encabezados de columnas según tus datos */}
          </tr>
        </thead>
        <tbody>
          {currentResults.map((response) => (
            <tr key={response['CÓDIGO_SNIES_DEL_PROGRAMA']}>
              <td>{response['CÓDIGO_INSTITUCIÓN']}</td>
              <td>{response['NOMBRE_INSTITUCIÓN']}</td>
              <td>{response['ESTADO_INSTITUCIÓN']}</td>
              <td>{response['CARÁCTER_ACADÉMICO']}</td>
              <td>{response['SECTOR']}</td>
              <td>{response['CÓDIGO_SNIES_DEL_PROGRAMA']}</td>
              <td>{response['NOMBRE_DEL_PROGRAMA']}</td>
              <td>{response['ESTADO_PROGRAMA']}</td>
              <td>{response['ÁREA_DE_CONOCIMIENTO']}</td>
              <td>{response['NIVEL_ACADÉMICO']}</td>
              <td>{response['MODALIDAD']}</td>
              {/* Agrega más celdas de datos según tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
      {data && data.length > perPage && (
        <ReactPaginate
          pageCount={Math.ceil(data.length / perPage)}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      )}
      </div>
      
    </div>
  );
};

export default ProgramasU;
