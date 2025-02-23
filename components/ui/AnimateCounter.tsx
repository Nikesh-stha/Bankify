'use client';
import CountUp from 'react-countup'

const AnimateCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp end={amount} 
            decimal=','
            decimals={2}
            prefix='$'
            duration={2}
        />
    </div>
  )
}

export default AnimateCounter