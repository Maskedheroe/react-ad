import React from 'react'
import { Button } from 'antd'
import { getUrlParam } from '../../utils/index';

export const Login = () => {
  console.log(getUrlParam('id'))
  return (
    <div>
      login
      <Button type='primary'>11</Button>
    </div>
  )
}
