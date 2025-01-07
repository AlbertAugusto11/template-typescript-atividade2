import { useState } from "react"
import { TeacherList } from "./components/TeacherList"
import { TeacherListForm } from "./components/TeacherListForm"

export interface ITechList{
  id: string;
  name: string;
  job: string;
  module: string;
}

function App() {
  const [teacherList, setTeacherList] = useState<ITechList[]>([
    {
      id: "75442486-0878-440c-9db1-a7006c25a39f",
      name: "Alex",
      job: "Instrutor",
      module: "M3"
    },
    {
      id: "cbab5a0e-102a-11ee-be56-0242ac120002",
      name: "Gabriel",
      job: "Instrutor",
      module: "M3"
    },
    {
      id: "d1284fa0-102a-11ee-be56-0242ac120002",
      name: "Raphael",
      job: "Instrutor",
      module: "M3"
    },
    {
      id: "d1284fa0-102a-11ee-be56-0242ac120007",
      name: "Albert Augusto",
      job: "Instrutor",
      module: "M10"
    },
  ])
  return (
    <div className="App">
      <TeacherList teacherList={teacherList} />
      <TeacherListForm setTeacherList={setTeacherList} teacherList={teacherList}/>
    </div>
  )
}

export default App
