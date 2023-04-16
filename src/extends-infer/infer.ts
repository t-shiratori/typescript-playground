type TUserA = {
  name: string;
  role: 'admin' | 'user';
};
type TUserB = {
  name: string;
  age: number;
};

// T内における role　を infer で U というエイリアスで参照し、後続の条件分岐内で使用している
type TRerRole<T> = T extends { role: infer U } ? U : null;

type TUserA_Role = TRerRole<TUserA>;
// → "admin" | "user"
type TUserB_Role = TRerRole<TUserB>;
// → null
