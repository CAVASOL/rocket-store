import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDoc, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { db } from '../firebase.config'

function Category() {
  return (
    <div>
      Category
    </div>
  )
}

export default Category
