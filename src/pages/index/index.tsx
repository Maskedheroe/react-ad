import React, { useEffect } from "react"
import styles from "./style.module.scss"
import axios from "axios"

export const IndexPage = () => {
  useEffect(() => {
    axios
      .get(
        "https://www.fastmock.site/mock/cac0d083202541484d8e98286e83f84e/_ad/api/index/gray"
      )
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => console.log(e))
  }, [])
  return (
    <div className={styles.index__page}>
      <div className={styles.head}>head</div>
      <div className={styles.content}>
        <div className={styles.left_content}>
          <div className={styles.chart_area}>chart</div>
          <div className={styles.promotion_card_area}>promotion card</div>
          <div className={styles.product_card_area}>product card</div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.account_area}>account</div>
          <div className={styles.index_banner_area}>index banner</div>
          <div className={styles.product_news_area}>product news</div>
        </div>
      </div>
      <div className={styles.foot}>foot</div>
    </div>
  )
}
