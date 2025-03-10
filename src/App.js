import React, { useState } from "react";
import "./App.css";
import { db, timestamp } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    patronymic: "",
    position: "",
    department: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Добавляем запись в Firestore
      await addDoc(collection(db, "applications"), {
        ...formData,
        createdAt: timestamp(), // Дата и время создания
        updatedAt: timestamp() // Дата и время изменения
      });

      alert("Заявка успешно отправлена!");
      setFormData({
        surname: "",
        name: "",
        patronymic: "",
        position: "",
        department: ""
      });
    } catch (error) {
      console.error("Ошибка при отправке заявки: ", error);
      alert("Произошла ошибка при отправке заявки.");
    }
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
        <label>
          Отчество:
          <input
            type="text"
            name="patronymic"
            value={formData.patronymic}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;