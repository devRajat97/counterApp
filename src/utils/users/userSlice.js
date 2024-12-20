import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = []
const userSlice = createSlice({
    name : "userSlice",
    initialState : initialStateValues,
    reducers:{
        getuser : (state,action)=>{
            state.userList = action.payload
        }
    }

})
export const {getuser} = userSlice.actions
export default userSlice.reducer

// **********************ACTIONS************************************************ */
//  get messageList
export const getuserList = () => async (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
    dispatch(getuser(data));
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
    
};


// const  getUsertOrderFunction = async() =>{
//     try {
      
//       const response = await fetch(`${API_KEY}getOrdersInUser`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           token: token,
//             user_id: user_id,
//         }),
//       })
  
//       result = await response.json()
//       setUserOrder(result)
//       // console.log(result,"This is resutl");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }