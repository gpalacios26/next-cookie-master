import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

export const Layout: FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>Cookie Master App</title>
            </Head>
            <nav>
                <Navbar />
            </nav>
            <main style={{ padding: '20px 50px' }}>
                {children}
            </main>
        </>
    )
}