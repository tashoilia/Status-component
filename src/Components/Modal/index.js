import React, { useState } from "react";
import { Modal, Button, Space, Select, message } from "antd";
import { ChromePicker } from "react-color";
import "./index.css";

const { Option } = Select;
export default function Status({ isModalVisible, setIsModalVisible }) {
  const [statuses, setStatuses] = useState([
    {
      value: "Pending",
      backgroundColor: "3fc5203",
      textColor: "#e7bbbb",
      order: "1",
    },
    {
      value: "Completed",
      backgroundColor: "#fc5223",
      textColor: "#fff",
      order: "1",
    },
    {
      value: "Due",
      backgroundColor: "#fc8203",
      textColor: "#fff",
      order: "1",
    },
    {
      value: "Cancelled",
      backgroundColor: "#fd5203",
      textColor: "#fff",
      order: "1",
    },
  ]);
  const [statusSelected, setStatusSelected] = useState("");
  const [orderSelected, setOrderSelected] = useState("");
  const [displayBackgroudPicker, setDisplayBackgroundPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#9ee5b8");
  const [textColor, setTextColor] = useState("#000");
  const [displayTextPicker, setDisplayTextPicker] = useState(false);

  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  const validate =
    statusSelected.length == 0 ||
    orderSelected.length == 0 ||
    backgroundColor.length == 0 ||
    textColor.length == 0;

  const success = () => {
    message.success("Status added");
  };

  const warning = () => {
    message.warning("You should complete all the fields");
  };

  const addStatus = () => {
    let newStatuses = [...statuses];
    newStatuses.push({
      value: statusSelected,
      textColor: textColor,
      backgroundColor: backgroundColor,
      order: orderSelected,
    });
    console.log(newStatuses);
    setStatuses([...newStatuses]);
    success();
  };

  const handleOk = () => {
    if (validate) {
      warning();
      return;
    }
    addStatus();
    setStatusSelected("");
    setOrderSelected("");
    setBackgroundColor("#9ee5b8");
    setTextColor("#000");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setStatusSelected("");
    setOrderSelected("");
    setBackgroundColor("#9ee5b8");
    setTextColor("#000");
    setIsModalVisible(false);
  };

  const handleOrderChange = (value) => {
    setOrderSelected(value);
  };

  const handleStatusChange = (value) => {
    setStatusSelected(value);
  };

  const openBackgroundPicker = () => {
    setDisplayBackgroundPicker(!displayBackgroudPicker);
  };

  const closeBackgroundPicker = () => {
    setDisplayBackgroundPicker(false);
  };

  const handleBackgroundPick = (colors) => {
    setBackgroundColor(colors.hex);
  };

  const handleTextPick = (colors) => {
    setTextColor(colors.hex);
  };

  const openTextPicker = () => {
    setDisplayTextPicker(!displayTextPicker);
  };

  const closeTextPicker = () => {
    setDisplayTextPicker(false);
  };

  const handleTextColorChange = (colors) => {
    setTextColor(colors.hex);
  };

  return (
    <div>
      {/* <Button type="primary" onClick={showModal}>
        Add Status
      </Button> */}
      <Modal
        title="Add status"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space direction="vertical">
          <Space>
            <h3>Add status</h3>
            <Select
              defaultValue=""
              style={{ width: 120 }}
              onChange={handleStatusChange}
            >
              <Option value="pending">Panding</Option>
              <Option value="completed">Completed</Option>
              <Option value="due">Due</Option>
              <Option value="cancelled">Cancelled</Option>
            </Select>
          </Space>
          <Space>
            <h3>Pick background color</h3>
            <div
              className="color-picker-btn"
              onClick={() => {
                openBackgroundPicker();
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "3px",
                  background: backgroundColor,
                }}
              ></div>
            </div>

            {displayBackgroudPicker ? (
              <div style={popover}>
                <div
                  style={cover}
                  onClick={() => {
                    closeBackgroundPicker();
                  }}
                />
                <ChromePicker
                  onChange={handleBackgroundPick}
                  color={backgroundColor}
                />
              </div>
            ) : null}
          </Space>
          <Space>
            <h3>Pick text color</h3>
            <div
              className="color-picker-btn"
              onClick={() => {
                openTextPicker();
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "3px",
                  background: textColor,
                }}
              ></div>
            </div>

            {displayTextPicker ? (
              <div style={popover}>
                <div
                  style={cover}
                  onClick={() => {
                    closeTextPicker();
                  }}
                />
                <ChromePicker
                  onChange={handleTextColorChange}
                  color={textColor}
                />
              </div>
            ) : null}
          </Space>

          <Space>
            <h3>Order of satus</h3>
            <Select
              defaultValue=""
              style={{ width: 120 }}
              onChange={handleOrderChange}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </Space>
        </Space>
      </Modal>
    </div>
  );
}
