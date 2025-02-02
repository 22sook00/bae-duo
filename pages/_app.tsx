import { globalStyles } from '@/src/commons/styles/styles'
import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/src/components/commons/layout'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // 옵션설정 사용예시 - 기본으로 대부분 true 가 되어있지만 추가적으로 필요한 설정들을 밑에 설정하면 됩니다!
        refetchOnWindowFocus: true,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV !== 'production' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
      <Global styles={globalStyles} />
      <Head>
        <script></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
