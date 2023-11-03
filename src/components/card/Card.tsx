import { Card } from "antd"
import CardInterFae from "../../types/Card"
import Meta from "antd/es/card/Meta"


const Card1 = ({_id , name , percent , user} : CardInterFae) => {
  return (
    <Card
      hoverable
    >
      <Meta title={`Name : ${name}`} description={`$Percent : ${percent}`} />
      <p className={_id}>User : {user}</p>
    </Card>
  )
}

export default Card1