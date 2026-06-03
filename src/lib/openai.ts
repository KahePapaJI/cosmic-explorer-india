import { OpenAI } from 'openai';
import { OPENAI_API_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export async function getAstronomyTutorResponse(message: string, conversationHistory: Array<{ role: string; content: string }>) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are an expert astronomy tutor helping students learn about space, planets, stars, eclipses, ISRO missions, and earth science. 
          Provide clear, educational, and engaging explanations. Use analogies and simple language to explain complex concepts.
          Keep responses concise but informative. If asked about ISRO missions, provide accurate information about Indian space missions like Chandrayaan, Mangalyaan, and Aditya-L1.
          Encourage curiosity and provide follow-up questions when appropriate.`,
        },
        ...conversationHistory.map(msg => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
        })),
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 1024,
    });

    return response.choices[0]?.message?.content || 'I couldn\'t generate a response. Please try again.';
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to get AI response');
  }
}

export async function generateAstronomyContent(topic: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert astronomy educator. Generate clear, accurate, and engaging educational content about astronomy topics.',
        },
        {
          role: 'user',
          content: `Generate detailed educational content about: ${topic}. Include interesting facts, scientific explanations, and learning points suitable for students.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 2048,
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate content');
  }
}
