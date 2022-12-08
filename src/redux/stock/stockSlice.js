import { createSlice } from "@reduxjs/toolkit";

export const stockSlice = createSlice({
    name : "stock",
    initialState : {
        stocks : [
            {
                name:"Tesla",
                price:300,
                quantity:0,
                img : "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/06/1200/675/TESLA-LOGO.jpg?ve=1&tl=1"
            },
            {
                name:"Apple",
                price:360,
                quantity:0,
                img:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
            },
            {
                name:"Meta",
                price:120,
                quantity:0,
                img:"https://static.vecteezy.com/system/resources/previews/004/263/114/original/meta-logo-meta-by-facebook-icon-editorial-logo-for-social-media-free-vector.jpg",
            },
            {
                name:"Google",
                price:200,
                quantity:0,
                img:"https://1000logos.net/wp-content/uploads/2016/11/google-logo.jpg",
            },
        ],
        ownedStocks : [],
    },
    reducers:{
        buyStock : () => {
            if(this.item === undefined) {return}
            console.log('buyStock');
        }
    }
});

export const { buyStock } = stockSlice.actions;
export default stockSlice.reducer;