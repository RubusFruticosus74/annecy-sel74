import Link from "next/link"
import Head from 'next/head'
import Layout from "../../components/layout"


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className="title">
                <Link href="/">
                    <a> hello {'  '} from Next
                        sadsadda
                    </a>
                </Link>
            </h1>
        </Layout>
    )
}