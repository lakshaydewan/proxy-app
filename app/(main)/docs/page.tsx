import React from 'react'

const DOCS = () => {

  return (
    <div className='w-full h-full overflow-y-scroll bg-neutral-900 text-white flex flex-col items-center px-6 py-8'>
      <h1 className='text-4xl font-mono font-bold mb-4 text-center'>
        Proxy-ai Documentation
      </h1>
      <p className='text-lg text-center font-light font-sans max-w-2xl mb-6'>
        Welcome to the official documentation for <strong>proxy-ai</strong> — your open-source, intelligent API proxy that transforms and streamlines data integration across any platform. Inspired by Superglue, but custom-built for developers who want full control and extensibility.
      </p>
      <div className='w-full max-w-4xl'>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>🛠 Getting Started</h2>
          <p className='mb-2'>
            Install the CLI:
          </p>
          <pre className='bg-neutral-800 p-3 rounded-md mb-2 overflow-x-auto'>
            <code>npm install sdk-proxy</code>
          </pre>
        </section>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>🚀 Core Features</h2>
          <ul className='list-disc list-inside'>
            <li><strong>LLM-Driven Transformations:</strong> Describe the data you want — we generate the code.</li>
            <li><strong>Universal API Proxy:</strong> Proxy and transform any third-party API into your own schema.</li>
            <li><strong>Smart File Parsing:</strong> Supports CSV, JSON, XML, XLSX with gzip/brotli decompression.</li>
            <li><strong>Schema Enforcement:</strong> Validate and clean incoming data to match your contracts.</li>
            <li><strong>Authentication Adapter:</strong> Plug in API keys, bearer tokens, headers, and more.</li>
            <li><strong>Built-in Caching:</strong> Avoid redundant calls with intelligent memoization.</li>
            <li><strong>Retry Strategies:</strong> Customize exponential backoff and retry logic for flaky sources.</li>
          </ul>
        </section>
        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>📄 Example Code</h2>
          <pre className='bg-neutral-800 p-3 rounded-md overflow-x-auto text-sm'>
            <code>
{`const { default: proxySDK } = require("sdk-proxy");

const key = "YOUR_API_KEY";

const app = new proxySDK(key);

async function main() {
  const { data } = await app.call({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    instructions: "add some more fields along with relevant values",
  });

  console.log(data);
}

main();`}
            </code>
          </pre>
        </section>

        <section className='mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>📚 Resources</h2>
          <ul className='list-disc list-inside'>
            <li><a href='https://github.com/proxy-ai/proxy-ai' className='text-blue-400 hover:underline' target='_blank' rel='noopener noreferrer'>GitHub Repository</a></li>
            <li><a href='https://examples.proxy-ai.dev' className='text-blue-400 hover:underline' target='_blank' rel='noopener noreferrer'>Transformation Examples</a></li>
          </ul>
        </section>

        <section>
          <h2 className='text-2xl font-semibold mb-2'>💬 Community & Support</h2>
          <ul className='list-disc list-inside'>
            <li><a href='https://discord.gg/proxy-ai' className='text-blue-400 hover:underline' target='_blank' rel='noopener noreferrer'>Join the proxy-ai Discord</a></li>
            <li><a href='mailto:support@proxy-ai.dev' className='text-blue-400 hover:underline'>Contact Support</a></li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default DOCS
