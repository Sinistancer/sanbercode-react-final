import React, { createRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { addTodo } from './redux/actions';
import TodoList from './components/TodoList';

function App() {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const title = createRef();
  const description = createRef();

  function resetForm() {
    title.current.value = '';
    description.current.value = '';
  }

  function closeDialog() {
    resetForm();
    setIsEdit(false);
  }

  function onAddTaskSubmit(e) {
    e.preventDefault();

    dispatch(addTodo(title.current.value, description.current.value));
    closeDialog();
  }

  return (
    <div>
      <h1>Simple TodoList</h1>
      <div>
        <button onClick={() => setIsEdit(true)}>
          Tambah task
        </button>
      </div>
      {isEdit &&
        <div className={'dialog'}>
          <form onSubmit={onAddTaskSubmit}>
            <div>
              <label>
                Judul
                <br/>
                <input type="text" ref={title}/>
              </label>
            </div>
            <br/>
            <div>
              <label>
                Deskripsi
                <br/>
                <input type="text" ref={description}/>
              </label>
            </div>
            <br/>
            <button type={'submit'}>Tambah</button>
            <button type={'button'} onClick={closeDialog}>Batal</button>
          </form>
        </div>
      }
      <TodoList />
    </div>
  );
}

export default App;
