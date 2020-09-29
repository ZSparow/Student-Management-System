import { useEffect } from "react";
import { Table, Card, Button, Input, Tag, Modal, Row, Col, Select } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import StudentStore from "../store/studentStore";
import ModalPopup from "../components/modalPopup";
import StudentTable from "../components/studentTable";
const { Search } = Input;
const { Option } = Select;

const Home = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [address, setAddress] = useState("");
  // const [gender, setGender] = useState("");
  // const [data, setData] = useState([]);

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

  useEffect(() => {
    let localData = localStorage.getItem("studentsInfo");

    setData(JSON.parse(localData));
  }, []);

  return (
    <div className="container">
      <Card style={{ width: "100%" }} hoverable>
        <div className="Flex-container">
          <Button type="primary" onClick={() => setIsVisible(true)}>
            Add New
          </Button>
          <Search
            placeholder="input search text"
            onSearch={(value) => {
              setData(data.filter((el) => el.name === value));
            }}
            style={{ width: 300 }}
            enterButton
            onChange={(el) => {
              if (el.target.value === "")
                setData(JSON.parse(localStorage.getItem("studentsInfo")));
            }}
          />
        </div>
        <StudentTable />
      </Card>

      <ModalPopup />
    </div>
  );
};

export default Home;
