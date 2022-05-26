import './App.css';

function App() {
  return (
    <div className="App">
      <div id="todo">
        <div className="todo__header">
          <div>
            <div className="date">Thursday, 26th</div>
            <div className="month">April</div>
          </div>
          <div className="total-task">3 Tasks</div>
        </div>
        <div className="todo__navbar">
          <ul>
            <li className="selected">All</li>
            <li>Pending</li>
            <li>Completed</li>
          </ul>
          <button>Clear All</button>
        </div>
        <div className="todo__container">
          <ul>
            <li>
              <div className="task">
                <i className="fa-solid fa-bars task-drag"></i>
                <input id="task1" type="checkbox" />
                <label htmlFor="task1">Create post for instagram</label>
              </div>
              <div className="dropdown">
                <i className="fa-solid fa-ellipsis"></i>
                <ul className="menu">
                  <li>Edit</li>
                  <li>Remove</li>
                  <li>Move down</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="task">
                <i className="fa-solid fa-bars task-drag"></i>
                <input id="task2" type="checkbox" />
                <label htmlFor="task2">Renew Gym Membership</label>
              </div>
              <div className="dropdown">
                <i className="fa-solid fa-ellipsis"></i>
                <ul className="menu">
                  <li>Edit</li>
                  <li>Remove</li>
                  <li>Move up</li>
                  <li>Move down</li>
                </ul>
              </div>
            </li>
            <li>
              <div className="task">
                <i className="fa-solid fa-bars task-drag"></i>
                <input id="task3" type="checkbox" />
                <label htmlFor="task3">Paying electricity bill</label>
              </div>
              <div className="dropdown">
                <i className="fa-solid fa-ellipsis"></i>
                <ul className="menu">
                  <li>Edit</li>
                  <li>Remove</li>
                  <li>Move up</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="todo___action">
          <input type="text" placeholder="Enter Your Task" />
          <div className="button">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
