import React from 'react';

const PropsComponent = (props) => {
  console.log('props',props.dataArr)
  const phBookList = props.dataArr.map((ele, idx) => {
    console.log('??');
    return(
      <li key={idx}>{ele.lastName}</li>
    )
  })
  return(
    <div>
      <h1>Phone book list</h1>
        <ul>
          {phBookList}
        </ul>
    </div>
  )
}

export default PropsComponent
