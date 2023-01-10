import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import ExpensesItem from './ExpensesItem'

const ExpensesList = () => {
    const {expenses} = useContext(AppContext)

    const [filterExpenses , setFilterExpenses] = useState(expenses || [])

    useEffect(()=>{
        setFilterExpenses(expenses)
    }, [expenses])

    const handleChange = (event) =>{
        
        const serachResult = expenses.filter((filterExpenses)=>
             filterExpenses.name.toLowerCase().includes(event.target.value)
        )

        setFilterExpenses(serachResult)
    }
        
  return (
   <>
   <input type="text" onChange={handleChange}  placeholder="Type to serach" className='form-control mb-4 mr-sm-2'/>
   <ul className='list-group'>
    {
        filterExpenses.map((item)=>{
            return <ExpensesItem key={item.id} id={item.id} name={item.name} cost={item.cost}/>
        })
    }
   </ul>
   </>
  )
}

export default ExpensesList
