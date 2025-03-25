import { useEffect, useState } from "react";
import { MAIN_DATA_API } from "../assets/api";
import axios from "axios";

const useProductData = () => {
  const [resList, setResList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchMainData() {
      try {
        const response = await axios.get(MAIN_DATA_API);
        console.log(
          response.data.data.cards[1].card.card.gridElements.infoWithStyle
            .restaurants
        );
        setResList(
          response.data.data.cards[1].card.card.gridElements.infoWithStyle
            .restaurants
        );
      } catch (error) {
        setError(error || "something went wrong");
      } finally {
        setLoading(false);
      }
    }
    fetchMainData();
  }, []);
  console.log(resList);
  return { resList, error, loading };
};
export default useProductData;
