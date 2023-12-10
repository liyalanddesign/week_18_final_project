import React, { useEffect } from "react";

export default function Favorites({ favs }) {
  // CREATE STATE
  // const [allLists, setAllLists] = useState([]);
  // CREATE FUNCTION WHICH WILL GET ALL MOVIES AND PIT THEM TO STATE
  const getList = async () => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGM1ZDk2MTUwMTFiMjBiZjFlOWJlODMyZjljZWVkMiIsInN1YiI6IjY1NDFiYWYxNDFhNTYxMDBkZGE5OTQ0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cs-hLzpgSxBq6pbKA5WJFn4fCUZrpMYuds1kRmamG-U",
      },
      // body: JSON.stringify(12345),
    };

    const res = await fetch(
      "https://api.themoviedb.org/3/list?session_id=sess123",
      options
    );
    const fetchRes = await res.json();
    console.log(fetchRes);

    // setAllLists(fetchRes.results);
  };

  useEffect(() => {
    getList();
  }, []);

  // {
  //   console.log(allLists);
  // }
  return (
    <>
      <div>Favorites</div>
    </>
  );
}
