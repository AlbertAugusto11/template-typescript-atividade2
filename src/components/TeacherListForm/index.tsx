import { FormEvent, useState } from "react"
import { uuid } from "uuidv4";
import { ITechList } from "../../App";

interface ITeacherListFormProps{
    setTeacherList: React.Dispatch<React.SetStateAction<ITechList[]>>;
    teacherList: ITechList[];
}

export const TeacherListForm = ({setTeacherList,teacherList}: ITeacherListFormProps) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [courseModule, setCourseModule] = useState("");

    const submit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTeacher = [...teacherList, { id: crypto.randomUUID(), name, job, module: courseModule }];
        setTeacherList(newTeacher);
        setName("")
        setJob("")
        setCourseModule("")
    }

    return(
        <form onSubmit={submit}>
            <h3>Cadastrar novo Professor</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
            <input type="text" value={courseModule} onChange={(e) => setCourseModule(e.target.value)} />
            <button>Cadastrar funcionário</button>
        </form>
    )
}