import React, { useEffect } from "react"
import styles from "./style.module.scss"
import Header from "../../component/Header/index"
import Footer from "../../component/Footer/index"
import Chart from "./components/DataTrend"
import PromotionCard from "./components/PromotionCard/index"
import ProductCard from "./components/ProductCard/index"
import Account from "./components/Account"
import IndexBanner from "./components/IndexBanner"
import ProductNews from "./components/ProductNews/index"

export const IndexPage = () => {
  return (
    <div className={styles.index__page}>
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div className={styles.content}>
        <div className={styles.left_content}>
          <div className={styles.chart_area}>
            <Chart />
          </div>
          <div className={styles.promotion_card_area}>
            <PromotionCard />
          </div>
          <div className={styles.product_card_area}>
            <ProductCard />
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.account_area}>
            <Account />
          </div>
          <div className={styles.index_banner_area}>
            <IndexBanner />
          </div>
          <div className={styles.product_news_area}>
            <ProductNews />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <Footer />
      </div>
    </div>
  )
}
