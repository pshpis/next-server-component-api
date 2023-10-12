import {PrismaClient} from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
  return (
    <>{JSON.stringify(posts)}</>
  )
}
