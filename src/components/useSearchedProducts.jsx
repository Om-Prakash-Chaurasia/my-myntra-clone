// // useSearchedProducts.js (Custom Hook)
// import { useState, useMemo } from "react";
// import data from "../data";
// import useSelector from "react-redux";

// const useSearchedProducts = (searchTerm) => {
//   const [searchedTerm, setSearchedTerm] = useState(searchTerm);

//   const searchTerm = useSelector((state) => state.searchReducer.searchTerm);

//   const Allproducts = data;

//   // Compute the searchedProducts array using useMemo to avoid re-computation on every render
//   const searchedProducts = useMemo(() => {
//     return Allproducts.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [Allproducts, searchTerm]);

//   console.log("custom hook rendered", searchedProducts);

//   //   Return the searchedProducts array and the setsearchTerm function to update it
//   return [searchTerm, setSearchedTerm];
// };

// export default useSearchedProducts;
