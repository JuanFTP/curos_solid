(() => {
  function getMovieDataById(id: string) {
    console.log({ id });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  /*Comprimir para entenderlo*/
  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Lo ideal es tener 3 paramethers
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }
  /*Comprimir para entenderlo*/

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  // Continuacion
  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
