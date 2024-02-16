import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';



function App() {

  const[amount,setAmount] = useState('');
  const[discount,setDiscount] = useState('');

  const[total,setTotal] = useState(0);

  const calculate=(e)=>{
    const output = amount-(amount*discount/100);
    console.log(output);
    setTotal(output)
  }


  const reset=(e)=>{
    setAmount(0)
    setDiscount(0)
    setTotal(0)
  }

  
  

  return (
    <>
      <Row>
        <Col lg={6}>
        <img className='img-fluid mt-3' src="https://static.vecteezy.com/system/resources/previews/020/716/975/original/3d-minimal-special-discount-offer-icon-flash-sale-special-big-sale-offer-calendar-with-a-bell-icon-and-sale-tag-3d-illustration-png.png" alt="player" style={{width:'700px'}} />
        </Col>
        <Col lg={6} className='mt-5'>
          <Form>
            <h1 style={{textAlign:'center',color:'green'}}>Discount Calculator</h1>
            <Form.Group className="mb-3 me-5 mt-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Amount</Form.Label>
              <Form.Control size="lg" type="text"  placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3 me-5" controlId="exampleForm.ControlInput1">
              <Form.Label>Discount</Form.Label>
              <Form.Control size="lg" type="text" placeholder="Discount" value={discount}  onChange={(e)=>setDiscount(e.target.value)}/>
            </Form.Group>
          </Form>
          <h3 style={{color:'black',textAlign:'center'}}>Total Amount : {total}</h3>
          <div className='d-flex justify-content-between'>
            <Button variant="primary" className='ms-5 me-5' onClick={e=>calculate(e)}>Calculate</Button>{' '}  <Button variant="outline-success" className='ms-5 me-5' onClick={e=>reset(e)}>Reset</Button>{' '}
          </div>
        </Col>
      </Row>
    </>
  );
}

export default App;
