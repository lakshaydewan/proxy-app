'use client'
import { useEffect, useRef } from "react";
import Editor, {  OnMount } from "@monaco-editor/react";
import * as monaco from 'monaco-editor';

function CodeEditor({ value, onChange }: { value: string, onChange: (value: string) => void }) {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(value);
      editorRef.current.getAction('editor.action.formatDocument')?.run();
    }
  }, [value]);

  return (
    <Editor
      options={{
        formatOnType: true,
        formatOnPaste: true,
        minimap: { enabled: true },
        scrollbar: { vertical: "hidden", horizontal: "hidden" },
        wordWrap: "on",
        fontSize: 14,
        lineNumbers: "off",
        lineDecorationsWidth: 0,
        glyphMargin: false,
        folding: false,
        readOnly: true,
      }}
      className="h-full"
      height={"200px"}
      theme="vs-dark"
      defaultLanguage="Javascript"
      value={value}
      onChange={onChange ? (value) => onChange(value as string) : undefined}
      onMount={handleEditorDidMount}
    />
  );
}

export default CodeEditor;
