import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { selectCategory } from "../../store/categoriesSlice";
import Tooltip from "@mui/material/Tooltip";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [readm, setReadM] = useState(false);
  const [readmore, setReadMore] = useState(0);
  const categoryValue = useSelector(selectCategory);
  console.log(readm);
  useEffect(() => {
    console.log(categoryValue);
    if (categoryValue) {
      fetch(`https://fakestoreapi.com/products/category/${categoryValue}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } else {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [categoryValue]);
  
  const ReadMore = (id) => {
    setReadM(true);

    setReadMore(id);
  };

  const Less = () => {
    setReadMore(0);
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          margin: "2rem 5rem",
        }}
      >
        {products.map((product, index) => (
          <Card
            sx={{ maxWidth: 345, marginTop: "2rem", position: "relative" }}
            key={index}
            className="top-content"
          >
            <CardActions
              disableSpacing
              sx={{ position: "absolute", top: "0", right: 0 }}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
            <CardMedia
              component="img"
              height="194"
              image={product?.image}
              alt="Paella dish"
              sx={{
                objectFit: "cover",
                objectPosition: "center",
                display: "flex",
              }}
            />
            <CardHeader />

            <Tooltip title={product?.title}>
              <p className="title-mui">{product?.title.slice(0, 50)}... </p>
            </Tooltip>

            <CardHeader />
            <p className="price-mui"> {`$ ${product?.price}`}</p>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {readmore !== product.id
                  ? product.description.slice(0, 130)
                  : product.description}
                .....
                {readmore !== product.id ? (
                  <button
                    className="btn_readmore"
                    onClick={() => ReadMore(product.id)}
                  >
                    Read More
                  </button>
                ) : (
                  <button className="btn_readmore" onClick={Less}>
                    Less
                  </button>
                )}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};
export default Products;
