import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    patronymic: '',
    position: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Заявка отправлена: ' + JSON.stringify(formData, null, 2));
    // Здесь можно добавить отправку данных на сервер
  };

  return (
    <div className="App">
      <h1>Подача заявки на организацию рабочего места</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Фамилия:
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Отчество:
          <input
            type="text"
            name="patronymic"
            value={formData.patronymic}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Должность:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Отдел:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;