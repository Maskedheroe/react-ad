import React from 'react'
import './style.scss'
import { useState } from 'react'
import { Button } from 'antd'
import { useEffect } from 'react'
interface IStates {
    status: number
    balance: number
    credit: number
}

const Account = () => {
    const [state, setState] = useState<IStates>({
        status: 0,
        balance: 0,
        credit: 0
    })
    useEffect(() => {
        setTimeout(() => {
            setState({
                status: 1,
                balance: 220,
                credit: 220
            })
        }, 3000)
    }, [])
    return (
        <div className='account-component-box'>
            <div>
                你好，
                {name}
            </div>
            <div className='examine'>
                {state.status === 0 ? (
                    <div className='status'>开户金未到</div>
                ) : (
                    <div className='status-ok'>开户金已到</div>
                )}
            </div>
            <div className='balance'>
                <div>
                    <div className='text'>推广余额</div>
                    <div className='value'>{state.balance}</div>
                </div>
                <Button type='primary' size='small'>
                    充值
                </Button>
            </div>
            <div className='credit'>
                <div>
                    <div className='text'>合规信用值</div>
                    <div className='value'>{state.credit}</div>
                </div>
                <div className='detail-text'>详情</div>
            </div>
        </div>
    )
}

export default Account
