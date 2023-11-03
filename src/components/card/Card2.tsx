import { Card } from "antd"
import Meta from "antd/es/card/Meta"

interface User {
  role: string;
  fields: never[];
  client: boolean;
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  createdAt: string;
  __v: number;
  photo: null;
}

interface EducationIntercafe {
  description?: string,
  endDate?: string,
  level?: string,
  name?: string,
  startDate?: string,
  user?: User | null,
  __v?: number,
  _id?: string,
}

const Card2 = ({_id , name , level , user , description, endDate, startDate} : EducationIntercafe) => {
  return (
    <Card
      hoverable
    >
      <Meta title={`Name : ${name}`} description={`Description : ${description?.slice(0,20)}...`} />
      <p className={_id}>User : {user?.username}</p>
      <p className={_id}>Level : {level}</p>
      <p className={_id}>Start date : {startDate?.split("T")[0]}</p>
      <p className={_id}>End date : {endDate?.split("T")[0]}</p>
    </Card>
  )
}


export default Card2