import Product from "./product";

interface RootState {
  products: {
    loading: boolean;
    data: Product[];
    product: Product | null;
    error: Error | null;
  }
}

export default RootState;
