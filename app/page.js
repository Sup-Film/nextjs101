import React from 'react'

async function getBlogs() {
  const response = await fetch('https://66c5ba55134eb8f434955f3e.mockapi.io/blogs')
  
  if (!response.ok) {
    throw new Error("cannot fetch blogs");
  }

  return response.json();
}

async function page() {

  const blog  = await getBlogs();
  console.log(blog);
  return (
    <div>
      <h1>Blog List</h1>

      {
        blog.map((b, index) => {
          return (
            <div key={b.index}>
              {b.id} {b.name}
            </div>
          )
        })
      }
    </div>
  )
}

export default page