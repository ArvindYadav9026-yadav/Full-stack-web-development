import React from 'react'
import withAuth from '../utils/withAuth'

function Profile(Name,Role) {
  return (
    <div>
      profile page
      <p>Name:{Name}</p>
      <p>Role:{Role}</p>
    </div>
  )
}

export const AuthProfile =withAuth(Profile);
