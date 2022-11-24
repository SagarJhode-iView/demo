import Products from "../../Components/Products/index";
import { Divider } from "@mui/material";
import Categories from "../../Components/Categories/index";
import Header from "../../Components/Header/index";

const Home = () => {
  return(
    <>
    <Header />
    <Divider />
    <Categories />
   <Products/>
   </>
  )
}
export default Home;
