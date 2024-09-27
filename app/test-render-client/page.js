'use client'
import React, { useEffect, useState } from 'react';
import { submitForm } from './action';

async function getBlogs() {
  const response = await fetch('https://66c5ba55134eb8f434955f3e.mockapi.io/blogs')

  if (!response.ok) {
    throw new Error("cannot fetch blogs");
  }

  return response.json();
}

function page() {
  const [blogs, setBlogs] = useState([]);

  

  const initBlog = async () => {
    try {
      const result = await getBlogs();
      setBlogs(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    initBlog();
  }, [])

  console.log(blogs);

  return (
    <div>
      Test page Rendering

      {
        blogs.map((b, index) => {
          return (
            <div key={b.id}>
              {b.id} {b.name}
            </div>
          )
        })
      }
      <form action={submitForm}>
        <input type="text" name="email" id="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default page
