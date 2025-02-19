'use client'
import Editor from "@monaco-editor/react";

function CodeEditor({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  
  return (
    <Editor
      className="h-full"
      theme="vs-dark"
      height="200px"
      defaultLanguage="JavaScript"
      defaultValue={value}
      onChange={onChange ? (value) => onChange(value as string) : undefined}
    />
  );
}

export default CodeEditor;
