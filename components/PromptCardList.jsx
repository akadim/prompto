import React from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
  console.log(data)
  return (
    <div className='mt-16 prompt_layout'>
      {data.map(prompt => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

export default PromptCardList
