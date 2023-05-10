// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import InfiniteScroll from 'react-infinite-scroll-component';
// // import './App.css';


// // const Home = () => {
// //   const [pokemons, setPokemons] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(0);
// //   const [hasMore, setHasMore] = useState(true);

// //   const fetchPokemons = async (page) => {
// //     try {
// //       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`);
// //       setPokemons((prevPokemons) => [...prevPokemons, ...response.data.results]);
// //       setTotalPages(Math.ceil(response.data.count / 20));
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
  

// //   const handleSearch = (event) => {
// //     setSearchTerm(event.target.value);
// //     setCurrentPage(1);
// //     setPokemons([]);
// //     setHasMore(true);
// //   };

// //   const handlePageChange = (page) => {
// //     setCurrentPage(page);
// //   };

// //   useEffect(() => {
// //     fetchPokemons(currentPage);
// //   }, [currentPage]);

// //   const filteredPokemons = pokemons.filter((pokemon) =>
// //     pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const loadMore = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage(currentPage + 1);
// //     } else {
// //       setHasMore(false);
// //     }
// //   };


// //   //css 

  
  
// //   return (
// //     <div className='search-bar'>
// //       <h1>Pokemon List</h1>
// //       <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
// //       <InfiniteScroll dataLength={filteredPokemons.length} next={loadMore} hasMore={hasMore}>
// //         {filteredPokemons.map((pokemon) => (
// //           <div key={pokemon.name}>{pokemon.name}</div>
// //         ))}
// //       </InfiniteScroll>
// //       {/* <div>
// //         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
// //           <button key={page} onClick={() => handlePageChange(page)}>
// //             {page}
// //           </button>
// //         ))}
// //       </div> */}
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import './App.css';


// const Home = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchPokemons = async (page, searchTerm = '') => {
//     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`);
//     const results = response.data.results.filter((pokemon) =>
//       pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setPokemons((prevPokemons) => [...prevPokemons, ...results]);
//     setTotalPages(Math.ceil(response.data.count / 20));
//   };
  
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setCurrentPage(1);
//     setPokemons([]);
//     setHasMore(true);
//     fetchPokemons(1, event.target.value);
//   };
  
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   useEffect(() => {
//     fetchPokemons(currentPage);
//   }, [currentPage]);

//   const filteredPokemons = searchTerm
//     ? pokemons.filter((pokemon) =>
//         pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : pokemons;

//   const loadMore = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     } else {
//       setHasMore(false);
//     }
//   };

//   return (
//     <div >
//       <h1 className='heading'>Pokemon List</h1>
//       <input type="text" placeholder="Enter your Pokemon name" value={searchTerm} onChange={handleSearch} className='search-bar' />
//       <InfiniteScroll dataLength={filteredPokemons.length} next={loadMore} hasMore={hasMore}>
//         {filteredPokemons.map((pokemon,index) => (
//           <div className='nameDiv' key={pokemon.name}>{index+1}  :  {pokemon.name}</div>
//         ))}
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemons = async (page, searchTerm = '') => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`);
    const results = response.data.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPokemons((prevPokemons) => [...prevPokemons, ...results]);
    setTotalPages(Math.ceil(response.data.count / 20));
  };
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
    setPokemons([]);
    setHasMore(true);
    fetchPokemons(1, event.target.value);
  };
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setPokemons([]);
    setHasMore(true);
    fetchPokemons(page, searchTerm);
  };

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [currentPage]);

  const filteredPokemons = searchTerm
    ? pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pokemons;

  const loadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      
    } else {
      setHasMore(false);
    }
  };

  return (<>
  <div className='pagination'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          
          <button key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? 'active' : ''}>
            {page}
          </button>
        ))}
      </div>
    <div >
      <h1 className='heading'>Pokemon List</h1>
      <input type="text" placeholder="Enter your Pokemon name" value={searchTerm} onChange={handleSearch} className='search-bar' />
      <InfiniteScroll dataLength={filteredPokemons.length} next={loadMore} hasMore={hasMore}>
        {filteredPokemons.map((pokemon,index) => (
          <div className='nameDiv' key={pokemon.name}>{index+1}  :  {pokemon.name}</div>
        ))}
      </InfiniteScroll>
      
    </div>
    </>
  );
};

export default Home;
