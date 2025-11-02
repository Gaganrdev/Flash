import React from 'react'
import Button from './UI/button';

function Home() {
  return (
    <div className='landing-page'>
        <h1>Start Organizing Your Life</h1>
        <p>Flash helps you declutter your mind and focus on what's truly important. Manage tasks, set priorities, and achieve your goals with ease.</p>
        <Button text="Get Started - It's Free" />
        <div className='glance'>
            <div>
                <p>Task today</p>
                <h2>4</h2>
            </div>
            <div>
                <p>Overdue</p>
                <h2>1</h2>
            </div>
            <div>
                <p>Completed</p>
                <h2>12</h2>
            </div>
        </div>
    </div>
  );
}

export default Home