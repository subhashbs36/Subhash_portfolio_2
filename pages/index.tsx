import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: 'import numpy as np', type: 'function' },
    { code: 'import torch', type: 'function' },
    { code: 'import transformers', type: 'function' },
    { code: 'from langchain import LLMChain, PromptTemplate', type: 'function' },
    { code: '', type: 'blank' },
    { code: 'class AIAgent:', type: 'function' },
    { code: '    def __init__(self, config):', type: 'nested-function' },
    { code: '        self.model_name = config["model"]', type: 'variable' },
    { code: '        self.temperature = config["temperature"]', type: 'variable' },
    { code: '        self.max_tokens = config["max_tokens"]', type: 'variable' },
    { code: '        self.model = self._load_model()', type: 'variable' },
    { code: '', type: 'blank' },
    { code: '    def _load_model(self):', type: 'nested-function' },
    { code: '        # Initialize model from Hugging Face', type: 'comment' },
    { code: '        model = transformers.AutoModelForCausalLM.from_pretrained(', type: 'variable' },
    { code: '            self.model_name,', type: 'array-item' },
    { code: '            torch_dtype=torch.float16,', type: 'array-item' },
    { code: '            device_map="auto"', type: 'array-item' },
    { code: '        )', type: 'array-end' },
    { code: '        return model', type: 'return' },
    { code: '', type: 'blank' },
    { code: '    def generate(self, prompt):', type: 'nested-function' },
    { code: '        # Generate text using the model', type: 'comment' },
    { code: '        inputs = transformers.AutoTokenizer.from_pretrained(', type: 'variable' },
    { code: '            self.model_name', type: 'array-item' },
    { code: '        )(prompt, return_tensors="pt").to("cuda")', type: 'array-end' },
    { code: '        outputs = self.model.generate(', type: 'variable' },
    { code: '            inputs["input_ids"],', type: 'array-item' },
    { code: '            max_new_tokens=self.max_tokens,', type: 'array-item' },
    { code: '            temperature=self.temperature', type: 'array-item' },
    { code: '        )', type: 'array-end' },
    { code: '        return outputs', type: 'return' },
    { code: '', type: 'blank' },
    { code: '# Initialize AI agent with configuration', type: 'comment' },
    { code: 'llm_config = {', type: 'variable' },
    { code: '    "model": "llama-3",', type: 'array-item' },
    { code: '    "temperature": 0.7,', type: 'array-item' },
    { code: '    "max_tokens": 1024', type: 'array-item' },
    { code: '}', type: 'array-end' },
    { code: 'agent = AIAgent(llm_config)', type: 'function-call' },
    { code: '', type: 'blank' },
    { code: '# Define a prompt for the AI', type: 'comment' },
    { code: 'prompt = """', type: 'variable' },
    { code: 'Generate a creative solution for the following problem:', type: 'array-item' },
    { code: 'How can we use computer vision to improve healthcare?', type: 'array-item' },
    { code: '"""', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: '# Generate response', type: 'comment' },
    { code: 'response = agent.generate(prompt)', type: 'function-call' },
    { code: 'print(response)', type: 'function-call' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${
                      index === activeLineIndex ? styles.highlightedLine : ''
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Subhash <span className={styles.accentText}>B S</span>
          </h1>

          <div className={styles.developerRole}>AI Engineer | LLM Specialist | ML Researcher</div>

          <p className={styles.bio}>
            I specialize in <span className={styles.accentText}>Generative AI</span>, <span className={styles.accentText}>LLM Systems</span>, <span className={styles.accentText}>AI Agents</span>, and <span className={styles.accentText}>Computer Vision</span> with expertise in building real-world solutions
            using PyTorch, TensorFlow, LangChain, and Hugging Face. Passionate about creating innovative AI applications with measurable impact.
          </p>

          <div className={styles.actionLinks}>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
