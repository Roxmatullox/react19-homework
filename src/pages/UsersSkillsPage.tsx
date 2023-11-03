import { useEffect, useState } from "react";
import Card1 from "../components/card/Card";
import { useAppDispatch, useAppSelector } from "../redux/hooks"

import {Spin} from "antd"
import { getSkills } from "../redux/slices/skills";

import "./UsersSkillsPage.scss"

const UsersSkillsPage = () => {

  const [search , setSearch] = useState("")
  const [active , setActive] = useState(1)

  const {skills , total , loading } = useAppSelector(state => state.skills)

  const dispatch = useAppDispatch()

  const [totalPaginate , setTotalPaginate] = useState(1)

  useEffect(()=>{
    dispatch(getSkills({search , active}))
    const r = Math.ceil(total/10)
    setTotalPaginate(r)
  } , [search , dispatch , active ,total])

  const SerachSkills = (e: React.FormEvent<HTMLInputElement>)=>{
    setSearch(e.currentTarget.value)
    setActive(1)
  }

  
  return (
    <Spin  spinning={loading} >
      <div className="skills-page">
      <section id="search">
        <div className="container">
          <div className="search-container">
            <h1>Skills ({total})</h1>
            <input onChange={SerachSkills} type="text" placeholder="Search..." />
          </div>
        </div>
      </section>  
      <div className="all-skills">
        <div className="container">
          <div className="skills">
          {
            skills.map((el)=>{
              return <Card1 key={el._id} {...el} />
            })
          }
          </div>
        </div>
      </div>
      {
            totalPaginate > 1 ? <section id="pagination">
            <div className="container">
              <div className="pagination-btns">
                <button disabled={active === 1 ? true : false} onClick={()=>{setActive(active-1)}}>{"<"}</button>
                <span>{active}</span>
                <button disabled={totalPaginate === active ? true : false} onClick={()=>{setActive(active+1)}}>{">"}</button>
              </div>
            </div>
          </section> : null
          }
      </div>
    </Spin>
  )
}

export default UsersSkillsPage