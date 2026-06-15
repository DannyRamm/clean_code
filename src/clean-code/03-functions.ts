(() => {

    // función para obtener información de una película por Id
    //nombre relacionado de las funciones con lo que hacen.
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener iformación de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    //una buena funcion tiene que tener 3 parametros por eso se crea un interface

    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function CreateMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // menos de 20 lineas tiene que tener una funcion.
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {


        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;
        return isRetired ? 3000: 4000;
        
        /*if ( isRetired ) {
            return 3000;
        } else {
            return 4000; 
        }*/

    }


})();