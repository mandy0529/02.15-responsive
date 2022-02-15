import { ProductWrapper } from "../styles/product";
import { ProductList } from "../utils/helper";

function Product() {
  return (
    <ProductWrapper>
      {ProductList.map((item) => {
        const { id, img, title } = item;
        return (
          <div key={id}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
          </div>
        );
      })}
    </ProductWrapper>
  );
}

export default Product;
