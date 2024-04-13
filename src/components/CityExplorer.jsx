
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Inputs from "./Inputs";

const CityExplorer = () => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=99"
        );
        const data = await response.json();
        setCities(data.results);
        setFilteredCities(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = cities.filter((city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="flex justify-center text-3xl font-bold mb-4">Weather Forecast</h1>

      <Inputs onSearch={handleSearch} />
          <div className="flex justify-center">
      <table className="w-[1000px] divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider bg-black text-white">
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium bg-black text-white uppercase tracking-wider">
              Country
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium bg-black text-white uppercase tracking-wider">
              Timezone
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredCities.map((city) => (
            <tr key={city.geoname_id} className="hover:bg-gray-50">
              <td className="px-3 py-4 whitespace-nowrap">
                <Link
                  to={`/weather/${encodeURIComponent(city.name)}/${city.geoname_id}`}
                  className="text-blue-600 hover:underline"
                >
                  {city.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{city.cou_name_en}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{city.timezone}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CityExplorer;
