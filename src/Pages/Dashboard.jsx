import React from 'react'
import Header from '../components/Header'
import '../css/Dashboard.css'

const Dashboard = () => {
    return (
        <>
            <Header role="User" />

            <div className='dashboard-container'>
                <div className='dashboard-content' style={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{textAlign:'center'}}>Welcome to Dashboard</h1>
                </div>
            </div>
            

        </>
    )
}

export default Dashboard