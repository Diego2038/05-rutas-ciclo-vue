const isAuthenticatedGuard = ( to, from, next ) => {
  // console.log( { to, from, next });

  return new Promise( ( resolve, reject ) => {
    const random = Math.random() * 100
    if( random < 50 ){
      resolve( next() );
      console.log('Bienvenido', random);
    } else {
      resolve ( next( { name : 'pokemon-home'}) )
      console.log('No está permitido entrar', random);
    }
  })

}

export default isAuthenticatedGuard;