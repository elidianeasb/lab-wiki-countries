
import { Link } from 'react-router-dom'


function CountriesList(props) {

    const { countries } = props

    return (
        <div>
            <div className="col-5" style={{height: '90vh', overflow: 'scroll'}}>
                <div className="list-group" >
                    {
                        countries.map(country => (
                            <Link
                                key={country.alpha3Code}
                                to={`/${country.alpha3Code}`}
                                className="list-group-item list-group-item-action">
                                {country.name.common}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CountriesList