import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  womenShoes: [
    {
      id: 1,
      name: "shoe 1",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",

      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 2,
      name: "shoe 2",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 3,
      name: "shoe 3",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 4,
      name: "shoe 4",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 5,
      name: "shoe 5",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 6,
      name: "shoe 6",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 7,
      name: "shoe 7",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 8,
      name: "shoe 8",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 9,
      name: "shoe 9",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 10,
      name: "shoe 10",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 11,
      name: "shoe 11",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 12,
      name: "shoe 12",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 13,
      name: "shoe 13",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 14,
      name: "shoe 14",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "women-shoe",
      description: "cool shoe",
    },
    {
      id: 15,
      name: "shoe 15",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "women-shoe",
      description: "cool shoe",
    },
  ],
  menShoes: [
    {
      id: 1,
      name: "shoe 1",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      type: "men-shoe",
      description: "cool shoe",
    },
    {
      id: 2,
      name: "shoe 2",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      type: "men-shoe",
      description: "cool shoe",
    },
    {
      id: 3,
      name: "shoe 3",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      type: "men-shoe",
      description: "cool shoe",
    },
    {
      id: 4,
      name: "shoe 4",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1586882829491-b81178aa622e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbiUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "men-shoe",
      description: "cool shoe",
    },
    {
      id: 5,
      name: "shoe 5",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1lbiUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "men-shoe",
      description: "cool shoe",
    },
    {
      id: 6,
      name: "shoe 6",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lbiUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "men-shoe",
      description: "cool shoe",
    },
    {
      id: 7,
      name: "shoe 7",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1621996659546-b0dd8b7e57af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1lbiUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "men-shoe",
      description: "cool shoe",
    },
  ],
  shirts: [
    {
      id: 1,
      name: "shirt 1",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1608234807905-4466023792f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "shirt",
      description: "cool shirt",
    },
    {
      id: 2,
      name: "shirt 2",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "shirt",
      description: "cool shirt",
    },
    {
      id: 3,
      name: "shirt 3",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      type: "shirt",
      description: "cool shirt",
    },
    {
      id: 4,
      name: "shirt 4",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1612031283705-cbc4e1480c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      type: "shirt",
      description: "cool shirt",
    },
    {
      id: 5,
      name: "shirt 5",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1559334417-a57bd929f003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY3fHxzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      type: "shirt",
      description: "cool shirt",
    },
    {
      id: 6,
      name: "shirt 6",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1604994183234-a311cba28474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      type: "shirt",
      description: "cool shirt",
    },
    {
      id: 7,
      name: "shirt 7",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1595828204607-0d09afb58a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      type: "shirt",
      description: "cool shirt",
    },
    {
      id: 8,
      name: "shirt 8",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      type: "shirt",
      description: "cool shirt",
    },
    {
      id: 9,
      name: "shirt 9",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1591911894784-84dbae55cd4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb3VzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      image2:
        "https://images.unsplash.com/photo-1611899419417-b74dae040a40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb3VzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      type: "shirt",
      description: "cool shirt",
    },
  ],
  dresses: [
    {
      id: 1,
      name: "dress 1",
      price: 20000,
      image:
        "https://i.pinimg.com/236x/9a/41/6e/9a416e1c4332019b282d2452d645c147.jpg",
      type: "dress",
      description: "cool dress",
    },
    {
      id: 2,
      name: "dress 2",
      price: 20000,
      image: "https://i.pinimg.com/236x/4f/da/7c/4fda7c943b8edb6515171a1bcf3d0097.jpg",
      type: "dress",
      description: "cool dress",
    },
    {
      id: 3,
      name: "dress 3",
      price: 20000,
      image: "https://i.pinimg.com/236x/1d/0b/d7/1d0bd7b25e7ed7513c6c733b9420df67.jpg",
      type: "dress",
      description: "cool dress",
    },
    {
      id: 4,
      name: "dress 4",
      price: 20000,
      image: "https://i.pinimg.com/236x/d9/61/2b/d9612be878349692ef5f82980460ff80.jpg",
      type: "dress",
      description: "cool dress",
    },
    {
      id: 5,
      name: "dress 5",
      price: 20000,
      image: "https://i.pinimg.com/236x/dd/79/c4/dd79c4e28810d6e7f0e93449efb99940.jpg",
      type: "dress",
      description: "cool dress",
    },
    {
      id: 6,
      name: "dress 6",
      price: 20000,
      image: "https://i.pinimg.com/236x/b2/d8/62/b2d862a4c20bec2576d8c3e1e44c694a.jpg",
      type: "dress",
      description: "cool dress",
    },
    {
      id: 7,
      name: "dress 7",
      price: 20000,
      image: "https://i.pinimg.com/236x/1a/b5/eb/1ab5eba6435c01073adcb4e03470800e.jpg",
      type: "dress",
      description: "cool dress",
    },
    {
      id: 8,
      name: "dress 8",
      price: 20000,
      image: "https://i.pinimg.com/236x/e7/ab/6a/e7ab6aeba2fded4ad6ae2b792a32565b.jpg",
      type: "dress",
      description: "cool dress",
    },
    {
      id: 9,
      name: "dress 9",
      price: 20000,
      image: "https://i.pinimg.com/236x/12/61/df/1261dfb1bccfa89468a03bb8af7bf525.jpg",
      type: "dress",
      description: "cool dress",
    },
    {
      id: 10,
      name: "dress 10",
      price: 20000,
      image: "https://i.pinimg.com/236x/e7/ab/6a/e7ab6aeba2fded4ad6ae2b792a32565b.jpg",
      type: "dress",
      description: "cool dress",
    },
  ],
  selectedProduct: null,
  activeCategoryType: null,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setActiveCategoryType: (state, action) => {
      state.activeCategoryType = action.payload;
    },
  },
});
export const { setProducts, setSelectedProduct, setActiveCategoryType } =
  productSlice.actions;

export default productSlice.reducer;
