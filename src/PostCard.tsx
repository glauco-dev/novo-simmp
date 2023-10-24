
import { Card, CardHeader, Box, StyleProps, Heading } from "@chakra-ui/react"
import { CardMedia, CardContent, Typography } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CSSProperties } from "react"

export type PostData = {
    id: string,
    data: {
        titulo: string,
        capa: string,
        categories: Array<string>,
        data: {
            seconds: number,
            nanoseconds: number
        },
        destaque: boolean,
        galeria: string[],
        texto: string,
    }
}


export default function ({ data, style, v = true }: { data: PostData, style: CSSProperties, v: boolean }) {
    const router = useRouter();
    console.log(data)
    if (!data.id) {
        return <></>
    }
    const subTexto = data.data.texto ? data.data.texto.substring(0, 150) : "";
    return (
        <Card style={{ ...style }} className="post-card transition-all"
            onClick={() => { router.push(`/Post?id=${data.id}`) }}
            sx={{ cursor: "pointer", display: "flex", flexDirection: "row", gridArea: "destaque", width: "115%" }}
        >
            <CardMedia
                sx={{ maxWidth: v ? "100%" : "60%", flexBasis: "200%", backgroundPosition: "left top", backgroundSize: "cover" }}
                image={data.data.capa}
                title={data.data.titulo}
            />
            <Box
                sx={{
                    flexBasis: v ? "200%" : "",
                    justifyContent: v ? "space-between" : "",
                    maxHeight: v ? "180px" : "100%", display: 'flex', flexDirection: "column"
                }}
            >
                <CardHeader sx={ v? {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    } : {}}>
                    <Heading size='md'>{data.data.titulo}</Heading>
                    <p className="text-base font-light text-gray-500 -mt-2 dark:text-gray-400"><time>{new Date(data.data.data.seconds * 1000).toLocaleDateString('pt-BR', { dateStyle: 'full' })}</time></p>
                </CardHeader>
                {!v && <CardContent style={{}}>
                    <Typography variant="body2" color="text.secondary" style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <div className="destaque-body" dangerouslySetInnerHTML={{ __html: v ? "" : (subTexto + "...") }}></div>
                        <Link href={`/Post?id=${data.id}`} style={{ textAlign: "right", marginTop:"1.5rem" }}>ler na integra...</Link>
                    </Typography>
                </CardContent>}

            </Box>
        </Card >
    )
}