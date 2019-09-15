import idio from '@idio/idio'

(async () => {
  const { app, url } = await idio({
    serve(ctx) {
      ctx.status = 301
      ctx.redirect('https://www.artd.eco')
      ctx.body = 'Redirecting to www.artd.eco'
    },
  })
  console.log(url)
})()