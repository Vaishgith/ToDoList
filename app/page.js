"use client"
import React, { useState } from 'react'

const page = () => {
  const [Task, settitle] = useState("");
  const [dosc, setdoesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { Task, dosc }]);
    settitle(" ");
    setdoesc(" ");
    console.log(mainTask);

  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>;


  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'> <div className='flex items-center justify-between w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.Task}</h5>
          <h6 className='text-lg font-medium'>{t.dosc}</h6>
        </div>
          <button onClick={() => deleteHandler(i)} className='bg-red-400 text-white px-4 py-2 text-2xl rounded font-bold'>Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My TodoList</h1>
      <from onSubmit={submitHandler} >
        <input type='text' className='text-black border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Task here'
          value={Task}
          onChange={(e) => {
            settitle(e.target.value)
          }}

        />
        <input type='text' className='text-black border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Description here'
          value={dosc}
          onChange={(e) => {
            setdoesc(e.target.value)
          }}
        />
        <button onClick={submitHandler} className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task </button>
      </from>
      <hr />
      <div className='p-8 bg-sky-200'>
        <ul> {renderTask}</ul>
      </div>
    </>
  );
};

export default page
