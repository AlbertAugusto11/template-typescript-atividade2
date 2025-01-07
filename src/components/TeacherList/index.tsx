import { ITechList } from "../../App"
import { TeacherCard } from "../TeacherCard"

interface ITechListProps {
    teacherList: ITechList[]
}

export const TeacherList = ({teacherList}: ITechListProps) => {
    return(
        <ul>
            {teacherList.map(teacher => {
                return(
                    <TeacherCard key={teacher.id} teacher={teacher}/>
                )
            })}
        </ul>
    )
}