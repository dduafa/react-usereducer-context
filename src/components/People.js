import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./styles.css";

const fetchData = () => {
  return axios
    .get("https://randomuser.me/api/?results=20")
    .then((res) => {
      const { results } = res.data;
      // console.log(results);
      return results;
    })
    .catch((err) => {
      console.error(err);
    });
};

const flattenLocations = (locations) => {
  const data = [];
  for (const { street, coordinates, timezone, ...rest } of locations) {
    data.push({
      ...rest,
      number: street.number,
      name: street.name,
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    });
  }

  const flattenedLocationHeaders = extractObjectKeys(data[0]);
  return { headers: flattenedLocationHeaders, data };
};

const extractObjectKeys = (object) => {
  let objectKeys = [];

  Object.keys(object).forEach((objectKey) => {
    const value = object[objectKey];
    if (typeof value !== "object") {
      objectKeys.push(objectKey);
    } else {
      objectKeys = [...objectKeys, ...extractObjectKeys(value)];
    }
  });

  return objectKeys;
};

export default function App() {
  const [people, setPeople] = useState([]);
  const [flattenedLocations, setFlattenedLocations] = useState({
    headers: [],
    data: [],
  });
  const [inputFieldValue, setInputFieldValue] = useState("");

  useEffect(() => {
    fetchData().then((apiPeople) => {
      setPeople(apiPeople);
      const ourFlattenedLocations = flattenLocations(
        apiPeople.map(({ location }) => location)
      );
      setFlattenedLocations(ourFlattenedLocations);
    });
  }, []);

  return (
    <div className="App" style={styles.wrapper}>
      <h1>Flatten Location & Render</h1>
      <input
        value={inputFieldValue}
        onChange={(e) => {
          setInputFieldValue(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            {flattenedLocations.headers.map((locationString, locationIdx) => (
              <th
                key={locationIdx}
                onClick={() => {
                  // sortColumn(locationString);
                }}
              >
                {locationString}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {flattenedLocations.data.map((location, locationIdx) => (
            <tr key={locationIdx}>
              {flattenedLocations.headers.map((header, headerIdx) => (
                <td key={headerIdx}>{location[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}
