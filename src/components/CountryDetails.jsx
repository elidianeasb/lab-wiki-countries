import { Link } from 'react-router-dom'
import { Routes, Route, useParams } from 'react-router-dom'

function CountryContent(props) {

  const { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <h1>Country</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>Capital</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  551695 km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li><Link to="id">Andorra</Link></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

function CountryDetails() {
  return (
    <div className="col-7">
      <Routes>
        <Route path="/:id" element={<CountryContent />} />
      </Routes>
    </div>
  )
}

export default CountryDetails