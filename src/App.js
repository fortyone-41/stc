import './App.css';
import axios from 'axios'
import React from 'react';

function App() {
  const [data, setData] = React.useState({
    active: "enabled",
  })
  const [content, setContent] = React.useState((<p style={{
    position: "absolute",
    left: "50%",
    top: "50%",
    fontSize: "24px",
    width: "300px",
    marginLeft: "-150px"
  }}>Данные отсутствуют.</p>))

  const getData = async () => {
    setData({ active: 'disabled' })
    setContent((<p style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      fontSize: "24px",
      width: "300px",
      marginLeft: "-150px"
    }}>Данные загружаются...</p>))
    const db = await axios.get("https://stc-testtask.herokuapp.com:9999/data")
    setTimeout(() => { setData(prev => ({ ...prev, data: db.data, active: "enabled" })) }, 500)

  }

  return (
    <div className="App">
      <div className="input-group flex-nowrap" >
        <span className="input-group-text" id="addon-wrapping">Нажмите для выгрузки данных</span>
        <button className={"btn btn-primary : " + data.active} onClick={getData} type="button" id="button-addon1">Выгрузить</button>
        <button className="btn btn-secondary" onClick={() => setData()} type="button" id="button-addon1">Очистить</button>
      </div>
      {data.data ? (<table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Описание</th>
            <th scope="col">Время</th>
            <th scope="col">Дата начала</th>
            <th scope="col">Дата окончания</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.task_id}</th>
              <td>{item.description}</td>
              <td>{item.time}</td>
              <td>@{Date(item.date_start)}</td>
              <td>@{Date(item.date_finish)}</td>
            </tr>
          ))}
        </tbody>
      </table>) : content}
    </div>
  );
}

export default App;
