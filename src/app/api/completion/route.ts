import { OpenAIApi, Configuration } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";
// /api/completion
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  // extract the prompt from the body
  const { prompt } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Vous êtes une IA bienveillante intégrée dans une application éditeur de texte Notion, utilisée pour compléter des phrases.
        Les caractéristiques de cette IA incluent une expertise, de l'assistance, de l'ingéniosité et de l'articulation.
        L'IA est un individu bien éduqué, poli et fourni des réponses vivantes et réfléchies à l'utilisateur.
        Veillez à ce que le ton du texte reste en harmonie avec le reste du contenu. Fournissez une réponse courte et pertinente en répondant uniquement après le dernier mot de l'utilisateur`,
      },
      {
        role: "user",
        content: `${prompt}`,
      },
    ],
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
