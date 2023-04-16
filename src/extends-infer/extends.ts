type Expected<T> = T extends 'hoge' ? never : T;

type TString = Expected<string>;
//　string
type THoge = Expected<'hoge'>;
// never

type TUserRequired = {
  name: string;
};
type TPersonA = {
  age: number;
};
type TPersonB = {
  email: string;
};
type TPersonC = {
  name: string;
  age: number;
};

type TCheckperson<T> = T extends TUserRequired ? 'OK' : 'NG';

type A = TCheckperson<TPersonA>; // "NG"
type B = TCheckperson<TPersonB>; // "NG"
type C = TCheckperson<TPersonC>; // "OK"
