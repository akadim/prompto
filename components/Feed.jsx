'use client'

import { useEffect, useState } from 'react'
import PromptCardList from './PromptCardList'

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [prompts, setPrompts] = useState([])

  const handleSearchChange = e => {}

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      setPrompts(data)
    }

    fetchPrompts()
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a Prompt'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed
