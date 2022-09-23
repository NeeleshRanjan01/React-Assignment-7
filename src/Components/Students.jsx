import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import { store } from './StudentsList';


function Students() {
    const [data] = useContext(store);


    return (
        <div>
            <div className="mainDiv">

            </div>

            <div className="StudentsHead">
                <h1>Students Details</h1>
                <Link to="/Students/Details" className="StudentsButton">Add New Student</Link>
            </div>

            <table className="table">
                <tr className="tableRow">
                    <th>Name</th>
                    <th>Age </th>
                    <th>Course </th>
                    <th>Batch</th>
                    <th>Change Details</th>
                </tr>

                {
                    data.map((std) => {
                        return (
                            <tr>
                                <td>{std.name}</td>
                                <td>{std.age}</td>
                                <td>{std.course}</td>
                                <td>{std.batch}</td>
                                <td><Link to={`/Student/${std.id}`}>Edit</Link></td>
                            </tr>
                        )
                    })

                }

            </table>
        </div>
    )
}

export default Students;