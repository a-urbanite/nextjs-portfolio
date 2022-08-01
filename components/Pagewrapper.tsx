import React from 'react'

const Pagewrapper = ({contents}:any) => {
  return (
    <article className='page'>
        {contents}
    </article>
  )
}

export default Pagewrapper