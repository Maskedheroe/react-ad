import React, { ReactNode } from "react"
import { RouteComponentProps } from "react-router-dom"

interface Props extends RouteComponentProps {
  children?: ReactNode | null
}

export const App = (props: Props) => {
  const handleRoute = () => {
    const { location, history } = props
    const { pathname } = location

    if (pathname === "/") {
      history.push("index")
      return false
    }
    return true
  }
  return <div>{handleRoute() ? props.children : "other"}</div>
}
