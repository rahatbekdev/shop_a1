
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// export interface Product {
//   id: number;
//   image: string;
//   name: string;
//   price: number;
// }

// interface ProductState {
//   products: Product[];
//   loading: boolean;
//   error: string | null; // Добавлено для обработки ошибок (опционально)
//   searchTerm: string;
//   filteredData: Product[];
// }

// const initialState: ProductState = {
//   products: [],
//   loading: false,
//   error: null,
//   searchTerm: "",
//   filteredData: [],
// };

// const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     startLoading: (state) => {
//       state.loading = true;
//       state.error = null; // Сбрасываем ошибку при новой загрузке
//     },
//     setProducts: (state, action: PayloadAction<Product[]>) => {
//       state.products = action.payload;
//       state.loading = false;
//     },
//     setError: (state, action: PayloadAction<string>) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     setSearchTerm: (state, action) => {
//       state.searchTerm = action.payload;
//       state.filteredData = state.products.filter((item) =>
//         item.name
//           .toLocaleLowerCase()
//           .includes(state.searchTerm.toLocaleLowerCase())
//       );
//     },
//   },
// });

// export const { startLoading, setProducts, setError, setSearchTerm } =
//   productSlice.actions;

// export default productSlice.reducer;




import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  filteredData: Product[];
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  searchTerm: "",
  filteredData: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null; // Сбрасываем ошибку при новой загрузке
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
      state.filteredData = action.payload; // Обновляем отфильтрованные данные
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;

      if (action.payload.trim() === "") {
        // Если строка поиска пуста, возвращаем все продукты
        state.filteredData = state.products;
      } else {
        state.filteredData = state.products.filter((item) =>
          item.name?.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
  },
});

export const { startLoading, setProducts, setError, setSearchTerm } =
  productSlice.actions;

export default productSlice.reducer;
