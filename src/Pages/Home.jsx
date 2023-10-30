import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestuarant } from '../redux/restuarantSlice'

function Home() {

    const allrestuarant = useSelector((state)=>state.restuarantSlice.allRestuarant)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRestuarant())
    },[])

  return (
    <>


    <Row className='mt-5'>
      {
        allrestuarant?.length>0?allrestuarant.map(restauarnt=>(
            <Col className='px-5 py-3' sm={12} md={6} lg={4} xl={3}>
            <RestCard restauarnt={restauarnt} />
        </Col>
        )):null
      }
    </Row>
        
    </>
  )
}

export default Home