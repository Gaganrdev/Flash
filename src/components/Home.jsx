import Button from './UI/button';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='landing-page'>
        <h1>Start Organizing Your Life</h1>
        <p>Flash helps you declutter your mind and focus on what's truly important. Manage tasks, set priorities, and achieve your goals with ease.</p>
        <Link to="/tasks"><Button text="Get Started - It's Free" /></Link>
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