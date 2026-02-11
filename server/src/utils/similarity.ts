const STOP_WORDS = new Set([
  'a','an','and','are','as','at','be','by','for','from','has','he','in','is','it','its','of','on','that','the','to','was','were','will','with','this','these','those','you','your','we','our','they','their','i','me','my','or','but'
]);

export const tokenize = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token && !STOP_WORDS.has(token));

const termFrequency = (tokens: string[]) => {
  const map = new Map<string, number>();
  tokens.forEach((token) => {
    map.set(token, (map.get(token) || 0) + 1);
  });
  return map;
};

export const cosineSimilarity = (a: string, b: string): number => {
  const tokensA = tokenize(a);
  const tokensB = tokenize(b);
  if (tokensA.length === 0 || tokensB.length === 0) return 0;

  const freqA = termFrequency(tokensA);
  const freqB = termFrequency(tokensB);

  const vocab = new Set([...freqA.keys(), ...freqB.keys()]);
  let dot = 0;
  let normA = 0;
  let normB = 0;

  vocab.forEach((token) => {
    const x = freqA.get(token) || 0;
    const y = freqB.get(token) || 0;
    dot += x * y;
    normA += x * x;
    normB += y * y;
  });

  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
};
