import React from 'react'

const Rank = ({ name, entries }) => {
    return (
        <div>
          <div className='white f4'>
            {`${name}, Your Rank is... `}
            {entries}
          </div>
        </div>
    )
}

export default Rank;