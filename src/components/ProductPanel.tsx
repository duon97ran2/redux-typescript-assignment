import { Card, Row, Col, Tooltip, Divider } from 'antd'
import React, { useEffect } from 'react'
import { EllipsisOutlined, HeartFilled, ShoppingFilled, ShoppingTwoTone } from '@ant-design/icons';
import { useAppDispatch, useAppSelecter } from '../app/hooks';
import { fetchAsyncProductList } from '../features/products/productThunk';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;


type Props = {
}
const ProductPanel = (props: Props) => {
  const { products } = useAppSelecter((state) => state.productReducer);
  const navigate = useNavigate()
  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={[30, 30]} >
          {products.slice(0, 6).map((item, index) => <Col span={8} key={index + 1}>
            <Card title={item.name} onClick={() => { navigate(`products/${item._id}`) }} hoverable
              style={{ width: "100%", height: "100%" }}
              cover={
                <div style={{ overflow: "hidden", height: "600px", background: "#fff" }}>
                  <img style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt="example"
                    src={item.image[0]?.url}
                  />
                </div>
              }
              headStyle={{ fontSize: "24px", textTransform: "capitalize", fontWeight: "bold", background: "var(--ant-primary-color)", color: "white" }}
              actions={[
                <Tooltip placement='top' title="Add to cart">
                  <ShoppingTwoTone style={{ fontSize: "20px" }} key="addtocart" />
                </Tooltip>,
                <Tooltip placement='top' title="Add to favorite">
                  <HeartFilled style={{ fontSize: "20px", color: "crimson" }} key="Heart" />
                </Tooltip>,
                <Tooltip placement='top' title="View more">
                  <EllipsisOutlined style={{ fontSize: "20px" }} key="ellipsis" />
                </Tooltip>
              ]}
            >
              <Meta
                title={<h1>Price: {item.price}$</h1>}
                description={item.description} style={{ minHeight: "10vh" }}
              />
            </Card>
          </Col>)}

        </Row>
      </div >
    </div >
  )
}

export default ProductPanel