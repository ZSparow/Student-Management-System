import { Input, Modal, Row, Col, Select } from "antd";
import StudentStore from "../store/studentStore";
const { Option } = Select;

const ModalPopup = () => {
  const {
    name,
    address,

    age,
    gender,
    data,
    isVisible,
    setName,
    setAge,
    setData,

    setGender,
    setAddress,
    setIsVisible,
  } = StudentStore();

  return (
    <Modal
      title="Add a new studen"
      visible={isVisible}
      onOk={() => {
        setData([...data, { key: Date.now(), name, age, address, gender }]);
        localStorage.setItem(
          "studentsInfo",
          JSON.stringify([
            ...data,
            {
              key: Date.now(),
              name,
              age,
              address,
              gender,
            },
          ])
        );
        setIsVisible(false);
        setName("");
        setAddress("");
        setAge("");
        setGender("");
      }}
      onCancel={() => {
        setIsVisible(false);
        setName("");
        setAddress("");
        setAge("");
        setGender("");
      }}
    >
      <Row gutter={[20, 20]}>
        <Col span={16}>
          <Input
            placeholder="Enter you name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
        <Col span={8}>
          <Input
            placeholder="Your Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Col>
        <Col span={16}>
          <Input
            placeholder="Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Col>
        <Col span={8}>
          <Select
            placeholder="Gender"
            style={{ width: "100%" }}
            value={gender}
            onChange={(value) => setGender(value)}
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalPopup;
