import { Table, Button, Tag } from "antd";
import StudentStore from "../store/studentStore";

const StudentTable = () => {
  const { name, address, age, gender, setData, data } = StudentStore();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (
        <Tag key={gender} color={gender === "male" ? "blue" : "red"}>
          {gender}
        </Tag>
      ),
    },
    {
      title: "",
      dataIndex: "key",
      key: "key",
      render: (value) => (
        <Button
          danger
          type="primary"
          onClick={() => {
            setData(data.filter((el) => el.key !== value));
            localStorage.setItem(
              "studentsInfo",
              JSON.stringify(data.filter((el) => el.key !== value))
            );
          }}
        >
          Remove
        </Button>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default StudentTable;
