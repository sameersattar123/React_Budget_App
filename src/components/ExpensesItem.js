import React, { useContext } from 'react'
import {TiDelete} from "react-icons/ti"
import { AppContext } from '../context/AppContext'

const ExpensesItem = ({name , cost , id}) => {

    const { dispatch } = useContext(AppContext)

    const handleDeleteClick = () => {
        // console.log("wsfdff")
        dispatch({
            type : "Add_Delete",
            payload : id,
        })
    }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center '>
        {name}
        <div>
            <span className='btn btn-primary'>{cost}rs</span>
                <TiDelete size="1.5rem" onClick={handleDeleteClick}/>
        </div>
    </li>
  )
}

export default ExpensesItem
