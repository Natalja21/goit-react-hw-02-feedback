import React from 'react'; 

const Statistics = ({  goodCounter, neutralgoodCounter, badCounter }) => {
    return (
        <div className='statistics'>
            <h2 className='title'>Statistics</h2>
            <div>
                <span className='counter'>Good: {goodCounter}</span>
                <span className='counter'>Neutral: {neutralgoodCounter}</span>
                <span className='counter'>Bad: {badCounter}</span>
            </div>
        </div>
    )
};

export default Statistics;