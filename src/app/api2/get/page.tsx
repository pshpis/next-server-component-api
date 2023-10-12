import {PrismaClient} from "@prisma/client";

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function GET({searchParams}: Props) {
    const prisma = new PrismaClient();
    let result = null;
    if (searchParams.id) {
        result = await prisma.post.findUnique({
            where: {
                id: parseInt(searchParams.id as string)
            }
        });
    }
    else {
        result = await prisma.post.findMany();
    }

    return (
        JSON.stringify(result)
    )
}
