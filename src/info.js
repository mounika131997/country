import React from "react";

const Countrylist = ({ List }) => {

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>CountryName</th>
                        <th>Capital</th>
                        <th>Region</th><span>{" "}</span>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody >
                    {List.map(e => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.capital}</td>
                            <td>{e.region}</td><span>{" "}</span>
                            <td>{e.population} </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default Countrylist;