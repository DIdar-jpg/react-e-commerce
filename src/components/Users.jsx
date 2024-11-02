import React from 'react'

import { Table } from 'react-bootstrap'

export default function Users() {

  const users = [
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
    {
      first_name: 'Aboba',
      last_name: 'Jackson',
      username: 'weefwrgev'
    },
  ]

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map( user => (
            <tr>
              <td>1</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.username}</td>
            </tr>
          ))
        }

      </tbody>
    </Table>
  )
}
