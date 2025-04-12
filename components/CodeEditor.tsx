'use client'
import Editor from "@monaco-editor/react";

function CodeEditor({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  
  return (
    <Editor
      options={{
        formatOnPaste: true,
        minimap: {
          enabled: true,
        },
        scrollbar: {
          vertical: "hidden",
          horizontal: "hidden",
        },
        wordWrap: "on",
        fontSize: 14,
        lineNumbers: "off",
        lineDecorationsWidth: 0,
        glyphMargin: false,
        folding: false,
        readOnly: true,
      }}
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
