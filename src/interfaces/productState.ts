import Product from "./product";

interface ProductState {
    loading: boolean;
    data: Product[];
    product: Product | null;
    error: Error | null;
}

export default ProductState;