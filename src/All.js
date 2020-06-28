import React, { useState, useEffect } from 'react';
import axios from 'axios';

function All() {
  const [data, setData] = useState({ results: [] });
  const [url, setUrl] = useState(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
      <ul>
        {data.count}
      </ul>
      )}
    </>
  );
}

export default All;