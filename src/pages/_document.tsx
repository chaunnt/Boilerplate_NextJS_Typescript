import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const bodyClassName = getBodyClassName(ctx.pathname, ctx.asPath)
      return {
        ...initialProps,
        bodyClassName,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="vi">
        <Head>

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,300,500&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-H4WWEHYZQ5"></script>
          <script src="/googleAnatys.js" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7640694255863173" crossOrigin="anonymous"></script>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" ></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" ></script>
        </Head>
        {/*@ts-ignore*/}
        <body className={this.props.bodyClassName}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )

  }
}

const getBodyClassName = (pathName: string, asPath: string | undefined): string => {
  const parts = pathName.split('/').splice(1)
  if (parts.length === 1 && parts[0] === '') return 'page-home'
  let generalClassName = 'page'
  let detailClassName = 'page'
  parts.map(name => {
    if (name.startsWith('[')) {
      const detail = asPath?.split('/').pop()
      detailClassName += `-${detail}`
    } else {
      generalClassName += `-${name}`
      detailClassName += `-${name}`
    }
  })
  return generalClassName + ' ' + detailClassName
}
