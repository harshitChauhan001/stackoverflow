import React from 'react'
function WidgetTags() {
  const tags=['c','css','express','firebase','html','java','javascript','mern','mongodb','mysql','next.js','node.js','php','python','reactjs']
  return (
    <div>
      <h3>Watched tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map((tag) =>( 
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags