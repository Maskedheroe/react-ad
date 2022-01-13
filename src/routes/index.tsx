import React from "react"
import { renderRoutes } from "react-router-config"
import { HashRouter as Router, withRouter } from "react-router-dom"
import { IndexPage } from "../pages/index/index"
import { Login } from "../pages/login"
import { App } from "../App"

const allRoutes = [
  {
    path: "/index",
    exact: false,
    component: IndexPage,
    title: "",
  },
  {
    path: "/login",
    exact: false,
    component: Login,
    title: "",
  },
]

const AppWrap = withRouter(App)

export const AppRoute = () => {
  return (
    <div>
      <Router>
        <AppWrap>
          {renderRoutes(
            allRoutes.map((item) => {
              return {
                ...item,
                key: item.path,
              }
            })
          )}
        </AppWrap>
      </Router>
    </div>
  )
}
