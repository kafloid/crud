import React, { useEffect } from 'react';
import Navbar from '../common/Navbar';
import TodoFields from '../common/TodoFields';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../DB/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { withFormik } from 'formik';
import * as Yup from "yup";

const { useState } = React;



function Todo() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        fetchUserName();
    }, [user, loading]);

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input]);
        setInput('');
    }

    return (
        <div>
            <Navbar />
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card rounded-3">
                                <div className="card-body p-4">

                                    <h4 className="text-center my-3 pb-3">To Do App</h4>

                                    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                        <div className="col-12">
                                            <div className="form-outline">
                                                <input
                                                    value={input}
                                                    type="text"
                                                    id="form1"
                                                    className="form-control"
                                                    placeholder='Enter a task here'
                                                    onChange={event => setInput(event.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button disabled={!input} type="submit" className="btn btn-primary" onClick={(e) => {
                                                addTodo(e);
                                            }}>Save</button>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-warning">Get tasks</button>
                                        </div>
                                    </form>

                                    <table className="table mb-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Todo item</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {todos.map((todo, i) => {
                                                return <TodoFields {...todo}
                                                    key={i}
                                                    number={i + 1}
                                                    task={todo}
                                                    status="in progress"
                                                />
                                            })
                                            /* {fields.map((task, index) => {
                                                return <TodoFields {...task}
                                                    key={index}
                                                // number={this.props.counter}
                                                // task={this.props.task}
                                                // status={this.props.status}
                                                />
                                            })} */}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withFormik({
    mapPropsToValues: () => ({
        number: '',
        task: '',
        status: ''
    })
})(Todo);