import { createContext, useReducer } from "react";

const AppReducer = (state , action) =>{
        switch (action.type) {
            case "Add_Expenses" :
            return{
                ...state,
                expenses : [...state.expenses , action.payload]
            };
            case "Add_Delete" :
            return{
                ...state,
                expenses : state.expenses.filter((expense)=> expense.id !== action.payload),
            }
            default:
               return  state;
        }
}


const initialState = {
    budget : 2000,
    expenses : [
        {id : 21 , name : "shopping" , cost : 300},
        {id : 22, name : "fuel" , cost : 380},
        {id : 23 , name : "food" , cost : 320},
    ]
}


export const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [state , dispatch] = useReducer(AppReducer , initialState)

    return(
        <AppContext.Provider value={{
            budget : state.budget,
            expenses : state.expenses,
            dispatch,
        }}>{children}</AppContext.Provider>
    )
}