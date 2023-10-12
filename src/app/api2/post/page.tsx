import {PrismaClient} from "@prisma/client";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function POST({params, searchParams}: Props) {
    const prisma = new PrismaClient();
    const title = searchParams.title as string;
    const content = searchParams.content as string;
    let post = null;
    if (title && content) {
        post = await prisma.post.create({
            data: {
                title: title,
                content: content
            }
        });
    }
    return (
        JSON.stringify(post)
    )
}
