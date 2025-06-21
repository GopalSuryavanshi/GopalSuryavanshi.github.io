// import React, { useState } from 'react';
// import '../src/styles/style.css';

// const App = () => {
//   const mockData = Array.from({ length: 50 }, (_, i) => ({
//     id: i + 1,
//     firstName: `John ${i + 1}`,
//     lastName: `Doe ${i + 1}`,
//     email: `john.doe${i + 1}@example.com`,
//     age: 20 + (i % 30),
//     country: i % 2 === 0 ? 'USA' : 'Canada',
//     occupation: i % 3 === 0 ? 'Engineer' : i % 3 === 1 ? 'Designer' : 'Developer',
//   }));

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const totalPages = Math.ceil(mockData.length / itemsPerPage);

//   const currentTableData = mockData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <button
//           key={i}
//           onClick={() => goToPage(i)}
//           className={`pagination-button ${currentPage === i ? 'active' : ''}`}
//           onMouseOver={(e) => {
//             if (currentPage !== i) e.currentTarget.classList.add('hover');
//           }}
//           onMouseOut={(e) => {
//             if (currentPage !== i) e.currentTarget.classList.remove('hover');
//           }}
//         >
//           {i}
//         </button>
//       );
//     }
//     return pageNumbers;
//   };

//   return (
//     <div className="app-container">
//       <div className="table-wrapper">
//         <h2 className="table-title">
//           User Data Table
//         </h2>

//         <div className="table-content">
//           <div className="table-scroll">
//             <table className="data-table">
//               <thead className="table-head">
//                 <tr>
//                   <th scope="col" className="header-cell">ID</th>
//                   <th scope="col" className="header-cell">First Name</th>
//                   <th scope="col" className="header-cell">Last Name</th>
//                   <th scope="col" className="header-cell">Email</th>
//                   <th scope="col" className="header-cell">Age</th>
//                   <th scope="col" className="header-cell">Country</th>
//                   <th scope="col" className="header-cell">Occupation</th>
//                 </tr>
//               </thead>
//               <tbody className="table-body">
//                 {currentTableData.map((row, index) => (
//                   <tr
//                     key={row.id}
//                     className={`table-row ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}
//                     onMouseOver={(e) => e.currentTarget.classList.add('hover-row')}
//                     onMouseOut={(e) => e.currentTarget.classList.remove('hover-row')}
//                   >
//                     <td className="cell">{row.id}</td>
//                     <td className="cell">{row.firstName}</td>
//                     <td className="cell">{row.lastName}</td>
//                     <td className="cell">{row.email}</td>
//                     <td className="cell">{row.age}</td>
//                     <td className="cell">{row.country}</td>
//                     <td className="cell">{row.occupation}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {mockData.length > itemsPerPage && (
//           <div className="pagination-controls">
//             <button
//               onClick={() => goToPage(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`pagination-button prev-button ${currentPage === 1 ? 'disabled' : ''}`}
//               onMouseOver={(e) => {
//                 if (currentPage !== 1) e.currentTarget.classList.add('hover');
//               }}
//               onMouseOut={(e) => {
//                 if (currentPage !== 1) e.currentTarget.classList.remove('hover');
//               }}
//             >
//               Previous
//             </button>
//             {renderPageNumbers()}
//             <button
//               onClick={() => goToPage(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`pagination-button next-button ${currentPage === totalPages ? 'disabled' : ''}`}
//               onMouseOver={(e) => {
//                 if (currentPage !== totalPages) e.currentTarget.classList.add('hover');
//               }}
//               onMouseOut={(e) => {
//                 if (currentPage !== totalPages) e.currentTarget.classList.remove('hover');
//               }}
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../src/styles/style.css';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Use async/await inside useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // const response = await axios.get('https://tenders.guru/api/es/tenders');
      const response = await axios.get('/api/es/tenders');
      console.log('res', response.data.data);

      setUserData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const totalPages = Math.ceil(userData.length / itemsPerPage);

  const currentTableData = userData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const goToPage = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`pagination-button ${currentPage === i ? 'active' : ''}`}
          onMouseOver={e => {
            if (currentPage !== i) e.currentTarget.classList.add('hover');
          }}
          onMouseOut={e => {
            if (currentPage !== i) e.currentTarget.classList.remove('hover');
          }}>
          {i}
        </button>,
      );
    }
    return pageNumbers;
  };

  return (
    <div className="app-container">
      <div className="table-wrapper">
        <h2 className="table-title">User Data Table</h2>

        <div className="table-content">
          <div className="table-scroll">
            <table className="data-table">
              <thead className="table-head">
                <tr>
                  <th className="header-cell">ID</th>
                  <th className="header-cell">Title</th>
                  <th className="header-cell">suppliers Name</th>
                  <th className="header-cell">Deadline</th>
                  <th className="header-cell">Value</th>
                </tr>
              </thead>
              {/* <tbody className="table-body">
                {currentTableData.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`table-row ${
                      index % 2 === 0 ? 'even-row' : 'odd-row'
                    }`}
                    onMouseOver={e =>
                      e.currentTarget.classList.add('hover-row')
                    }
                    onMouseOut={e =>
                      e.currentTarget.classList.remove('hover-row')
                    }>
                    <td className="cell">{row.id || 'N/A'}</td>
                    <td className="cell">{row.title || 'N/A'}</td>
                    <td className="cell">{row.awarded[0]?.suppliers_name || 'N/A'}</td>
                    <td className="cell">{row.deadline_date || 'N/A'}</td>
                    <td className="cell">{row.awarded[0]?.value || 'N/A'}</td>
                  </tr>
                ))}
              </tbody> */}
              <tbody className="table-body">
                {currentTableData.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`table-row ${
                      index % 2 === 0 ? 'even-row' : 'odd-row'
                    }`}
                    onMouseOver={e =>
                      e.currentTarget.classList.add('hover-row')
                    }
                    onMouseOut={e =>
                      e.currentTarget.classList.remove('hover-row')
                    }>
                    <td className="cell">{row.id || 'N/A'}</td>
                    <td className="cell title" title={row.title}>
                      {row.title || 'N/A'}
                    </td>
                    <td
                      className="cell supplier"
                      title={row.awarded?.[0]?.suppliers_name}>
                      {row.awarded?.[0]?.suppliers_name || 'N/A'}
                    </td>
                    <td className="cell">{row.deadline_date || 'N/A'}</td>
                    <td className="cell">
                      €{' '}
                      {parseFloat(
                        row.awarded?.[0]?.value || 0,
                      ).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {userData.length > itemsPerPage && (
          <div className="pagination-controls">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`pagination-button prev-button ${
                currentPage === 1 ? 'disabled' : ''
              }`}
              onMouseOver={e => {
                if (currentPage !== 1) e.currentTarget.classList.add('hover');
              }}
              onMouseOut={e => {
                if (currentPage !== 1)
                  e.currentTarget.classList.remove('hover');
              }}>
              Previous
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`pagination-button next-button ${
                currentPage === totalPages ? 'disabled' : ''
              }`}
              onMouseOver={e => {
                if (currentPage !== totalPages)
                  e.currentTarget.classList.add('hover');
              }}
              onMouseOut={e => {
                if (currentPage !== totalPages)
                  e.currentTarget.classList.remove('hover');
              }}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
