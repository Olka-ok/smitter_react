import {configureStore} from "@reduxjs/toolkit";
import user from "../features/user/userSlice.js"
import stats from "../features/stats/statsSlice.js"


export const store = configureStore({
    reducer: {
        user, stats
    },
})

//   user: {
//         name:'Monster',
//         avatar: 'https://gravatar.com/avatar/000?d=monsterid'
//     },
//     stats:{
//         followers: 0,
//         following: 0
//     }