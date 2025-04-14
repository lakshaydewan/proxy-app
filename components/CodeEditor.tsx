'use client'
import Editor from "@monaco-editor/react";

function CodeEditor({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  

  return (
    <Editor
      className="h-full"
      height={"200px"}
      theme="vs-dark"
      defaultLanguage="Javascript"
      value={value}
      onChange={onChange ? (value) => onChange(value as string) : undefined}
    />
  );
}

export default CodeEditor;
