'use client'
import Editor from "@monaco-editor/react";

function ResponseCodeEditor({ code }: {code: string}) {

  return (
    <Editor
      className="h-full"
      theme="vs-dark"
      height="290px"
      defaultLanguage="JavaScript"
      value={code}
    />
  );
}

export default ResponseCodeEditor;
