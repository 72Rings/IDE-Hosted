import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { material } from '@uiw/codemirror-theme-material';
import { githubDark } from '@uiw/codemirror-theme-github';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import axios from 'axios';

const App = () => {
  const [code, setCode] = useState('// Start coding here...');
  const [language, setLanguage] = useState('c++');
  const [theme, setTheme] = useState('dracula');
  const [output, setOutput] = useState('');

  const getExtension = (lang) => {
    switch (lang) {
      case 'c++': return cpp();
      case 'java': return java();
      case 'python': return python();
      default: return cpp();
    }
  };

  const getTheme = (name) => {
    switch (name) {
      case 'dracula': return dracula;
      case 'material': return material;
      case 'githubDark': return githubDark;
      case 'tokyoNight': return tokyoNight;
      default: return dracula;
    }
  };

  const runCode = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/run`, {
        language,
        code,
      });
      setOutput(response.data.output);
    } catch (error) {
      console.error(error);
      setOutput('Error executing code');
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#1e1e1e', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ marginBottom: '10px' }}>🧠 Online Code Runner</h1>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="c++">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>

        <label style={{ marginLeft: '20px', marginRight: '10px' }}>Theme:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dracula">Dracula</option>
          <option value="material">Material</option>
          <option value="githubDark">GitHub Dark</option>
          <option value="tokyoNight">Tokyo Night</option>
        </select>
      </div>

      <CodeMirror
        value={code}
        height="300px"
        extensions={[getExtension(language)]}
        onChange={(val) => setCode(val)}
        theme={getTheme(theme)}
      />

      <button
        onClick={runCode}
        style={{
          marginTop: '15px',
          padding: '8px 16px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        ▶ Run Code
      </button>

      <pre style={{ marginTop: '20px', background: '#2d2d2d', padding: '10px', borderRadius: '4px' }}>
        {output || 'Output will appear here...'}
      </pre>
    </div>
  );
};

export default App;
