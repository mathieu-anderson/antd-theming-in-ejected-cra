import React from 'react'
import { Select } from 'antd'
import './app.less'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Select defaultValue='lucy'>
          <Select.Option value='jack'>jack</Select.Option>
          <Select.Option value='lucy'>lucy</Select.Option>
          <Select.Option value='disabled' disabled>
            disabled
          </Select.Option>
          <Select.Option value='yiminghe'>yiminghe</Select.Option>
        </Select>
      </header>
    </div>
  )
}

export default App
