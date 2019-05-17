import React from 'react'
import { Link } from "react-router-dom";


export default function Detail() {
  return (
    <div>
      <h2>topic-detail --- </h2>
      <p><Link to={`/list`}>返回列表</Link></p>
    </div>
  )
}
