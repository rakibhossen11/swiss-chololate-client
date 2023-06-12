import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(trending);

  // const [trendingFromloader,loading] = useLoaderData();
  // console.log(trendingFromloader);

  useEffect(() => {
    setLoading(true)
    fetch("http://localhost:5000/trending")
      .then((res) => res.json())
      .then((data) => {
        setTrending(data.slice(0,3))
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, []);

  
  return (
    <div className="grid grid-cols-3 gap-3 my-10 mx-10">
      {
        loading ? <><p>loading...</p></> : <>{trending.map((trend) => 
          (
          <div key={trend.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={trend.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{trend.productName}</h2>
              <p>{trend.price}</p>
            </div>
          </div>
        )
        )}</>
      }
    </div>
  );
};

export default Trending;
