import React from 'react'

function page({params}) {
  return (
    <div>
      Slug: {params.slug}
    </div>
  )
}

export default page
