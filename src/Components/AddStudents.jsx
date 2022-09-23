import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { store } from './StudentsList';
import { useState, useContext } from "react";


const AddStudents = () => {
    const [data] = useContext(store);
    const [name1, setName] = useState();
    const [age1, setAge] = useState();
    const [course1, setCourse] = useState();
    const [batch1, setBatch] = useState();

    const back = useNavigate()

    const getName = (e) => {
        setName(e.target.value);
    }

    const getAge = (e) => {
        setAge(e.target.value);
    }

    const getBatch = (e) => {
        setBatch(e.target.value);
    }

    const getCourse = (e) => {
        setCourse(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((name1.length && age1.length && course1.length && batch1.length) === 0) {
            return;
        }

        data.push({
            id: Date.now(),
            name: name1,
            age: age1,
            course: course1,
            batch: batch1,
        })

        setName("");
        setBatch("");
        setCourse("")
        setAge("")
        back('/Students')
    }


    return (
        <div>
            <form action="/Students/Details" className="form" onSubmit={handleSubmit} >
                <label for="name" className="label1">Name</label>
                <input type="text" name="name" className="input1" value={name1} onChange={getName}></input>

                <label for="age" className="label2" >Age</label>
                <input type="number" name="age" className="input2" value={age1} onChange={getAge}></input><br />

                <label for="course" className="label3">Course</label>
                <input type="text" name="course" className="input3" value={course1} onChange={getCourse}></input>

                <label for="batch" className="label4" >Batch</label>
                <input type="text" name="batch" className="input4" value={batch1} onChange={getBatch}></input><br />

                <input type="submit" className="submit"></input>

                <Link to="/Students" className="cancel">Cancel</Link>
                {/* <Link to="/Students" className="cancel2">Submit</Link> */}
                {/* <input type="submit" className="submit">Submit</input> */}
            </form>

        </div>
    )
}




export default AddStudents;
