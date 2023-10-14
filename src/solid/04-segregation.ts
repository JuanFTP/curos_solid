// Segregación de interfaces es no obligar a todas las clases que implementan de interfaces a implementar todos los métodos por que no aplican para todos

interface Bird {
  eat(): void;
  walk(): void;
}

interface Flying {
  fly(): void;
}

interface Swimmer {
  swim(): void;
}

class Toucan implements Bird, Flying {
  public fly() {}

  public eat() {}

  public walk() {}
}

class Hummingbird implements Bird, Flying {
  public fly() {}

  public eat() {}

  public walk() {}
}

class Ostrich implements Bird {
  public walk() {}

  public eat() {}
}

class Penguin implements Bird, Swimmer {
  public walk() {}

  public eat() {}

  public swim() {}
}
