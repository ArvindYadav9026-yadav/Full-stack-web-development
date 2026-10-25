import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export const AuthDashboard =withAuth(Dashboard);


