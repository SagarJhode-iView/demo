import { Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { Box } from "@mui/system";
import { setCategory, setCategoryValue } from "../../store/categoriesSlice";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = React.useState(0);
  
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data );
        dispatch(setCategory(data));
      });
  
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    console.log("log", newValue);
    setValue(newValue);
    dispatch(setCategoryValue(newValue));
  };

  return (
    <Box sx={{ display: "block" }}>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 320, sm: 500 },
          bgcolor: "background.paper",
          margin: "0 auto",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          {/* <Tab label="All" key={4} /> */}
          {categories.map((category, index) => (
            <Tab label={category} key={index} />
          ))}          
        </Tabs>
      </Box>
    </Box>
  );
};

export default Categories;
