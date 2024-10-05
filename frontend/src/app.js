import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error state

    try {
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (response.ok && data.idea) {
        setGeneratedIdea(data.idea);
      } else {
        throw new Error(data.error || "Error generating idea. Try again.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="app-container">
      <h1>EcoArtisan-AI: Generate Sustainable Business Ideas</h1>
      <form onSubmit={handleSubmit} className="idea-form">
        <input 
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="prompt-input"
        />
        <button type="submit" className="generate-button" disabled={loading}>
          {loading ? "Generating..." : "Generate Idea"}
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {generatedIdea && (
        <div className="idea-result">
          <h2>Generated Idea:</h2>
          <p>{generatedIdea}</p>
        </div>
      )}
    </div>
  );
}

export default App;
