import React, { useState, useContext } from "react";
import Modal from "../../Components/Modal/index";
import { Button, Tooltip, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./index.css";
import { UserContext } from "../../Context/index";

export default function Status() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const User = useContext(UserContext);

  const style = {
    background: "#0092ff",
    padding: "8px 0",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className="status-wrapper">
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div style={style}>PENDING</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>COMPLETED</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>DUE</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>CANCELLED</div>
        </Col>
      </Row>
      <Tooltip title="Add status">
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={showModal}
        ></Button>
      </Tooltip>

      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
}
