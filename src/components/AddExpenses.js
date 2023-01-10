import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const AddExpenses = () => {
    const [name  , setName] = useState("")
    const [cost  , setCost] = useState("")

    const {dispatch} = useContext(AppContext)

    const onSubmit = (e) =>{
        e.preventDefault()
        
        const expense = {
            name : name,
            cost : parseInt(cost)
        }

        dispatch({
            type: "Add_Expenses",
            payload: expense,
        })
    }
    
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm">
                <label htmlFor="name">name</label>
                <input type="text" id="name" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="col-sm">
                <label htmlFor="cost">cost</label>
                <input type="cost" id="cost" className='form-control' value={cost} onChange={(e)=>setCost(e.target.value)} />
            </div>
            <div className="row mt-3"></div>
            <div className="col-sm">
                <button type='submit' className='btn btn-primary'>Save</button>
            </div>
        </div>
      </form>
    </>
  )
}

export default AddExpenses;
