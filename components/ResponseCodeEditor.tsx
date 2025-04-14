'use client'
import Editor from "@monaco-editor/react";
import * as monaco from 'monaco-editor';
import { useEffect, useRef } from "react";
import { OnMount } from "@monaco-editor/react";

function ResponseCodeEditor({ code }: {code: string}) {

  const value = code;
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
        minimap: {
          enabled: false,
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
      height="100%"
      defaultLanguage="JavaScript"
      value={code}
      onMount={handleEditorDidMount}
    />
  );
}

export default ResponseCodeEditor;
