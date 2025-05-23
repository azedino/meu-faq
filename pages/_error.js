function Error({ statusCode }) {
   return (
      <p>
       {
         statusCode
            ? `O erro $(statusCode) ocorreu no servidor.`
       : 'Um erro ocorreu no cliente.'
            }
      </p>
   )
}

Error.getInitialProps = ({ res, err }) => {
   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
   return { statusCode }
}
export default Error