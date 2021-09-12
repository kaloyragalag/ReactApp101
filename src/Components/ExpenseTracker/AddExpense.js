import {useState} from 'react'

const AddExpense = (props) => {    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    const submitExpense = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please add Text');
            return;
        }

        if(!amount){
            alert('Please add Amount');
            return;
        }

        props.addExpense({text, amount: +amount});

        setText('');
        setAmount(0);
    }

    return (
        <form className='add-form' onSubmit={submitExpense}>
            <h1>Add New Transaction</h1>
            <div className='form-control'>
                <label>Text</label>
                <input type='text' placeholder='Enter Text...' value={text} onChange={(e)=>setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Amount</label>
                <input type='text' placeholder='Enter Amount...' value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
            </div>
            <input type='submit' value='Add Transaction' className='btn btn-block'></input>
        </form>
    )
}

export default AddExpense
