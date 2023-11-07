import { n } from './q';

class A {
  private a: A;

  constructor() {
    this.a = new A();
  }

  f() {
    this.t();
  }

  t() {
    console.info('test');
  }
}
