import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useParams } from "react-router-dom";
import Item from "../../components/Item"

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [ value, setValue ] = useState("description");
  const [ count, setCount ] = useState(1); // how many we want to add in the cart
  const [ item, setItem ] = useState(null); // data taken from the database using itemId
  const [ items, setItems ] = useState([]); // related products array

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  async function getItem() {
    const item = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET "}
    );
    const itemJson = await item.json();
    setItem(itemJson.data)
  }

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image", // '?populate=image' gets images from each of the items along with the items data
      { method: "GET" }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]) // eslint-disable-line react-hooks/exhaustive-deps

  return <>
    <Box></Box>
  </>
}

export default ItemDetails;