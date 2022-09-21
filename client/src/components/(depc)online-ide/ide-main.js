// Library Imports
import React, { useState } from 'react';
import axios from 'axios';
import Ide from './Ide';
import InputEditor from './InputEditor';
import OutputLog from './OutputLog';
import Header from './Header';

const Main = () => {
  // state hooks
  const [language, setLanguage] = useState('java');
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [outputLog, setOutputLog] = useState('');
  const [status, setStatus] = useState('Run');

  // run button callback
  const runCode = () => {
    setStatus('Loading...');
    axios.post('/runCode', { language, code, input }).then((res) => {
      if (res.data.memory && res.data.cpuTime) {
        setOutputLog('');
        setOutputLog(
          `Memory Used: ${res.data.memory} \nCPU Time: ${res.data.cpuTime} \n${res.data.output} `
        );
      } else {
        setOutputLog(`${res.data.output} `);
      }
      setStatus('Run');
    });
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Header
        value={language}
        status={status}
        runCode={() => runCode()}
        onChangeLanguage={({ value }) => setLanguage(value)}
      />
      <Ide
        value={code}
        onCodeChange={(text) => setCode(text)}
        programmingLanguage={language}
      />
      <div className="optionSegment">
        <InputEditor value={input} onInputChange={(text) => setInput(text)} />
        <OutputLog value={outputLog} />
      </div>
    </div>
  );
};

export default Main;
