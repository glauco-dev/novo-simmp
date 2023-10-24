"use client";
import dynamic from "next/dynamic";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useFirestore } from '../firestoreContext';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import PostCard from "../PostCard";
import Sharing from "../sharing";
// import Footer from '../Footer'
import Link from "next/link";
import { Firestore, collection, doc, documentId, getDocs, getFirestore, limit, orderBy, query, setDoc, where } from "firebase/firestore";

const Footer = dynamic(() => import("../Footer"), { ssr: false })

export type TBanners = { galeria: string[] }[]

export default function Home() {
  const { posts } = useFirestore();

  console.log("posts!", posts)
  return (

    <>
      <main className="container flex min-h-screen flex-col items-center justify-between p-2 pt-10
      lg:w-padrao-container
      mx-auto">
        <div id="landing">
          <h1 id="title">Destaque</h1>
          <ODestaque></ODestaque>
          <Link href="/FME" className="fme">
            <img src="banner-FME.png" ></img>
          </Link>
          <Link href="/glrys" className="galeria" style={{
            objectFit: "cover",
            height: "100%"
          }}>
            <img src="banner-galeria-de-fotos.png" alt="" />
          </Link>
          <div className="banners">
            {banners.map(d => d.galeria.map((b) => <img src={b} />))}
          </div>
        </div>

        <div id="noticias">
          <h2>
            Notícias
          </h2>
          <SimpleGrid minChildWidth='350px' spacing='25px'>
            {posts.map((post, index) => (
              <Box key={`post_${index}`} height='400px'>
                <PostCard v={true} style={{ width: "100%", flexDirection: "column" }} data={post}></PostCard>
              </Box>
            ))}
          </SimpleGrid>
        </div>
        <Sharing></Sharing>
      </main > <Footer></Footer></>
  )
}
