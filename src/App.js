import React, {useState}  from 'react';
import './App.css';

export default function App() {
        // react state
        const [todoData, setTodoData] = useState([]);
        const [value, setValue] = useState("");

        // css
        const btnStyle = {
            color: "#fff",
            border: "none",
            padding:"5px 9px",
            borderRadius: "50%",
            cursor: "pointer",
            float: "right"
        }

        // 글 중앙에 선긋기
        const listStyle = (completed) => {
            return {
                padding: "10px",
                borderBottom: "1px #ccc dotted",
                textDecoration: completed ? "line-through": "none",
            }
        }

        // 목록 제거
        const handleClick = (id) => {
            let newTodoData = todoData.filter((data) => data.id !== id);
            //console.log("newTodoData", newTodoData);
            setTodoData(newTodoData);
        }

        // 새로운 값 입력
        const handleChange = (e) => {
            // this.setState({value: e.target.value});
            setValue(e.target.value);
        }

        // 입력된 값 추가
        const handleSubmit = (e) => {
            e.preventDefault();

            let newTodoData = {
                id: Date.now(),
                title: value,
                completed: false
            };

            //this.setState({todoData: [...this.state.todoData, newTodoData], value: ""})
            // setTodoData(prev => [...prev, newTodoData]);

            setTodoData((prev) => [...prev, newTodoData]);
            setValue("");
        }

        // 체크박스 완료 상태 바꾸기
        const handleCompleChange = (id) => {
            let newTodoData = todoData.map((data) => {
                if (data.id === id){
                    data.completed = !data.completed;
                }
                return data;
            });
            // this.setState({todoData: newTodoData});
            setTodoData(newTodoData);
        };
        // render 함수 : app 구성
        return (
            <div className="container">
                <div className="todoBlock">
                    <div className="title">
                        <h1>할 일 목록</h1>
                    </div>
                    {todoData.map((data) => (
                        <div style={listStyle(data.completed)} key={data.id}>
                            <p>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCompleChange(data.id)}
                                    defaultChecked={false}/>
                                {""}{data.title}
                                <button
                                    style={btnStyle}
                                    onClick={() => handleClick(data.id)}
                                >x
                                </button>
                            </p>
                        </div>

                    ))}

                    <form style={{display: "flex"}} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="value"
                            style={{flex: "10", padding: "5px"}}
                            placeholder="해야 할 일을 입력하세요."
                            value={value}
                            onChange={handleChange}
                        />
                        <input
                            type="submit"
                            value="입력"
                            className="btn"
                            style={{flex: "1"}}

                        />
                    </form>
                </div>
            </div>
        );
}