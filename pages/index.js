import React from 'react'
import stylesheet from '../styles/app.scss'

const style = <style jsx>{`
  p {
    color: red;
  }
`}</style>

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    {style}
    <p>Budget app!</p>
  </div>
