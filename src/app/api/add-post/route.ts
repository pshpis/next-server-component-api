import {PrismaClient} from "@prisma/client";

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const post = await prisma.post.create({
    data: {
      title: "asdadasda",
      content: "asdasdasdaasada"
    }
  });
  return new Response('Post added');
}
