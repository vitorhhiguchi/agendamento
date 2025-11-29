
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sala
 * 
 */
export type Sala = $Result.DefaultSelection<Prisma.$SalaPayload>
/**
 * Model Reuniao
 * 
 */
export type Reuniao = $Result.DefaultSelection<Prisma.$ReuniaoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Salas
 * const salas = await prisma.sala.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Salas
   * const salas = await prisma.sala.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sala`: Exposes CRUD operations for the **Sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.SalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reuniao`: Exposes CRUD operations for the **Reuniao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reuniaos
    * const reuniaos = await prisma.reuniao.findMany()
    * ```
    */
  get reuniao(): Prisma.ReuniaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Sala: 'Sala',
    Reuniao: 'Reuniao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sala" | "reuniao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sala: {
        payload: Prisma.$SalaPayload<ExtArgs>
        fields: Prisma.SalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findFirst: {
            args: Prisma.SalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findMany: {
            args: Prisma.SalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          create: {
            args: Prisma.SalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          createMany: {
            args: Prisma.SalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          delete: {
            args: Prisma.SalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          update: {
            args: Prisma.SalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          deleteMany: {
            args: Prisma.SalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          upsert: {
            args: Prisma.SalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.SalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      Reuniao: {
        payload: Prisma.$ReuniaoPayload<ExtArgs>
        fields: Prisma.ReuniaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReuniaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReuniaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          findFirst: {
            args: Prisma.ReuniaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReuniaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          findMany: {
            args: Prisma.ReuniaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>[]
          }
          create: {
            args: Prisma.ReuniaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          createMany: {
            args: Prisma.ReuniaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReuniaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>[]
          }
          delete: {
            args: Prisma.ReuniaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          update: {
            args: Prisma.ReuniaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          deleteMany: {
            args: Prisma.ReuniaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReuniaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReuniaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>[]
          }
          upsert: {
            args: Prisma.ReuniaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReuniaoPayload>
          }
          aggregate: {
            args: Prisma.ReuniaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReuniao>
          }
          groupBy: {
            args: Prisma.ReuniaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReuniaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReuniaoCountArgs<ExtArgs>
            result: $Utils.Optional<ReuniaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    sala?: SalaOmit
    reuniao?: ReuniaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    reunioes: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reunioes?: boolean | SalaCountOutputTypeCountReunioesArgs
  }

  // Custom InputTypes
  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaCountOutputType
     */
    select?: SalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountReunioesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReuniaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaAvgAggregateOutputType = {
    id: number | null
    capacidade: number | null
  }

  export type SalaSumAggregateOutputType = {
    id: number | null
    capacidade: number | null
  }

  export type SalaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    capacidade: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    capacidade: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalaCountAggregateOutputType = {
    id: number
    nome: number
    capacidade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalaAvgAggregateInputType = {
    id?: true
    capacidade?: true
  }

  export type SalaSumAggregateInputType = {
    id?: true
    capacidade?: true
  }

  export type SalaMinAggregateInputType = {
    id?: true
    nome?: true
    capacidade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaMaxAggregateInputType = {
    id?: true
    nome?: true
    capacidade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalaCountAggregateInputType = {
    id?: true
    nome?: true
    capacidade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sala to aggregate.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salas
    **/
    _count?: true | SalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaMaxAggregateInputType
  }

  export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
        [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSala[P]>
      : GetScalarType<T[P], AggregateSala[P]>
  }




  export type SalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithAggregationInput | SalaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: SalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _avg?: SalaAvgAggregateInputType
    _sum?: SalaSumAggregateInputType
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    id: number
    nome: string
    capacidade: number
    createdAt: Date
    updatedAt: Date
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaGroupByOutputType[P]>
            : GetScalarType<T[P], SalaGroupByOutputType[P]>
        }
      >
    >


  export type SalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    capacidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reunioes?: boolean | Sala$reunioesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    capacidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    capacidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectScalar = {
    id?: boolean
    nome?: boolean
    capacidade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "capacidade" | "createdAt" | "updatedAt", ExtArgs["result"]["sala"]>
  export type SalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reunioes?: boolean | Sala$reunioesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sala"
    objects: {
      reunioes: Prisma.$ReuniaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      capacidade: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = $Result.GetResult<Prisma.$SalaPayload, S>

  type SalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface SalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sala'], meta: { name: 'Sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {SalaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaFindUniqueArgs>(args: SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaFindFirstArgs>(args?: SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaWithIdOnly = await prisma.sala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaFindManyArgs>(args?: SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {SalaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends SalaCreateArgs>(args: SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {SalaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaCreateManyArgs>(args?: SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salas and returns the data saved in the database.
     * @param {SalaCreateManyAndReturnArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sala.
     * @param {SalaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends SalaDeleteArgs>(args: SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {SalaUpdateArgs} args - Arguments to update one Sala.
     * @example
     * // Update one Sala
     * const sala = await prisma.sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaUpdateArgs>(args: SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {SalaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaDeleteManyArgs>(args?: SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaUpdateManyArgs>(args: SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas and returns the data updated in the database.
     * @param {SalaUpdateManyAndReturnArgs} args - Arguments to update many Salas.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalaUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sala.
     * @param {SalaUpsertArgs} args - Arguments to update or create a Sala.
     * @example
     * // Update or create a Sala
     * const sala = await prisma.sala.upsert({
     *   create: {
     *     // ... data to create a Sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sala we want to update
     *   }
     * })
     */
    upsert<T extends SalaUpsertArgs>(args: SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends SalaCountArgs>(
      args?: Subset<T, SalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaAggregateArgs>(args: Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>

    /**
     * Group by Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaGroupByArgs['orderBy'] }
        : { orderBy?: SalaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sala model
   */
  readonly fields: SalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reunioes<T extends Sala$reunioesArgs<ExtArgs> = {}>(args?: Subset<T, Sala$reunioesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sala model
   */
  interface SalaFieldRefs {
    readonly id: FieldRef<"Sala", 'Int'>
    readonly nome: FieldRef<"Sala", 'String'>
    readonly capacidade: FieldRef<"Sala", 'Int'>
    readonly createdAt: FieldRef<"Sala", 'DateTime'>
    readonly updatedAt: FieldRef<"Sala", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sala findUnique
   */
  export type SalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findUniqueOrThrow
   */
  export type SalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findFirst
   */
  export type SalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findFirstOrThrow
   */
  export type SalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findMany
   */
  export type SalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Salas to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala create
   */
  export type SalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sala.
     */
    data: XOR<SalaCreateInput, SalaUncheckedCreateInput>
  }

  /**
   * Sala createMany
   */
  export type SalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala createManyAndReturn
   */
  export type SalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala update
   */
  export type SalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sala.
     */
    data: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
    /**
     * Choose, which Sala to update.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala updateMany
   */
  export type SalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala updateManyAndReturn
   */
  export type SalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala upsert
   */
  export type SalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sala to update in case it exists.
     */
    where: SalaWhereUniqueInput
    /**
     * In case the Sala found by the `where` argument doesn't exist, create a new Sala with this data.
     */
    create: XOR<SalaCreateInput, SalaUncheckedCreateInput>
    /**
     * In case the Sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
  }

  /**
   * Sala delete
   */
  export type SalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter which Sala to delete.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala deleteMany
   */
  export type SalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salas to delete
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to delete.
     */
    limit?: number
  }

  /**
   * Sala.reunioes
   */
  export type Sala$reunioesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    where?: ReuniaoWhereInput
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    cursor?: ReuniaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Sala without action
   */
  export type SalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
  }


  /**
   * Model Reuniao
   */

  export type AggregateReuniao = {
    _count: ReuniaoCountAggregateOutputType | null
    _avg: ReuniaoAvgAggregateOutputType | null
    _sum: ReuniaoSumAggregateOutputType | null
    _min: ReuniaoMinAggregateOutputType | null
    _max: ReuniaoMaxAggregateOutputType | null
  }

  export type ReuniaoAvgAggregateOutputType = {
    id: number | null
    salaId: number | null
  }

  export type ReuniaoSumAggregateOutputType = {
    id: number | null
    salaId: number | null
  }

  export type ReuniaoMinAggregateOutputType = {
    id: number | null
    nomeAluno: string | null
    inicio: Date | null
    fim: Date | null
    salaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReuniaoMaxAggregateOutputType = {
    id: number | null
    nomeAluno: string | null
    inicio: Date | null
    fim: Date | null
    salaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReuniaoCountAggregateOutputType = {
    id: number
    nomeAluno: number
    inicio: number
    fim: number
    salaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReuniaoAvgAggregateInputType = {
    id?: true
    salaId?: true
  }

  export type ReuniaoSumAggregateInputType = {
    id?: true
    salaId?: true
  }

  export type ReuniaoMinAggregateInputType = {
    id?: true
    nomeAluno?: true
    inicio?: true
    fim?: true
    salaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReuniaoMaxAggregateInputType = {
    id?: true
    nomeAluno?: true
    inicio?: true
    fim?: true
    salaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReuniaoCountAggregateInputType = {
    id?: true
    nomeAluno?: true
    inicio?: true
    fim?: true
    salaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReuniaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reuniao to aggregate.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reuniaos
    **/
    _count?: true | ReuniaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReuniaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReuniaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReuniaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReuniaoMaxAggregateInputType
  }

  export type GetReuniaoAggregateType<T extends ReuniaoAggregateArgs> = {
        [P in keyof T & keyof AggregateReuniao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReuniao[P]>
      : GetScalarType<T[P], AggregateReuniao[P]>
  }




  export type ReuniaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReuniaoWhereInput
    orderBy?: ReuniaoOrderByWithAggregationInput | ReuniaoOrderByWithAggregationInput[]
    by: ReuniaoScalarFieldEnum[] | ReuniaoScalarFieldEnum
    having?: ReuniaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReuniaoCountAggregateInputType | true
    _avg?: ReuniaoAvgAggregateInputType
    _sum?: ReuniaoSumAggregateInputType
    _min?: ReuniaoMinAggregateInputType
    _max?: ReuniaoMaxAggregateInputType
  }

  export type ReuniaoGroupByOutputType = {
    id: number
    nomeAluno: string
    inicio: Date
    fim: Date
    salaId: number
    createdAt: Date
    updatedAt: Date
    _count: ReuniaoCountAggregateOutputType | null
    _avg: ReuniaoAvgAggregateOutputType | null
    _sum: ReuniaoSumAggregateOutputType | null
    _min: ReuniaoMinAggregateOutputType | null
    _max: ReuniaoMaxAggregateOutputType | null
  }

  type GetReuniaoGroupByPayload<T extends ReuniaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReuniaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReuniaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReuniaoGroupByOutputType[P]>
            : GetScalarType<T[P], ReuniaoGroupByOutputType[P]>
        }
      >
    >


  export type ReuniaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeAluno?: boolean
    inicio?: boolean
    fim?: boolean
    salaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reuniao"]>

  export type ReuniaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeAluno?: boolean
    inicio?: boolean
    fim?: boolean
    salaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reuniao"]>

  export type ReuniaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeAluno?: boolean
    inicio?: boolean
    fim?: boolean
    salaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reuniao"]>

  export type ReuniaoSelectScalar = {
    id?: boolean
    nomeAluno?: boolean
    inicio?: boolean
    fim?: boolean
    salaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReuniaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeAluno" | "inicio" | "fim" | "salaId" | "createdAt" | "updatedAt", ExtArgs["result"]["reuniao"]>
  export type ReuniaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }
  export type ReuniaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }
  export type ReuniaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }

  export type $ReuniaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reuniao"
    objects: {
      sala: Prisma.$SalaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeAluno: string
      inicio: Date
      fim: Date
      salaId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reuniao"]>
    composites: {}
  }

  type ReuniaoGetPayload<S extends boolean | null | undefined | ReuniaoDefaultArgs> = $Result.GetResult<Prisma.$ReuniaoPayload, S>

  type ReuniaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReuniaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReuniaoCountAggregateInputType | true
    }

  export interface ReuniaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reuniao'], meta: { name: 'Reuniao' } }
    /**
     * Find zero or one Reuniao that matches the filter.
     * @param {ReuniaoFindUniqueArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReuniaoFindUniqueArgs>(args: SelectSubset<T, ReuniaoFindUniqueArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reuniao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReuniaoFindUniqueOrThrowArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReuniaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ReuniaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reuniao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoFindFirstArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReuniaoFindFirstArgs>(args?: SelectSubset<T, ReuniaoFindFirstArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reuniao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoFindFirstOrThrowArgs} args - Arguments to find a Reuniao
     * @example
     * // Get one Reuniao
     * const reuniao = await prisma.reuniao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReuniaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ReuniaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reuniaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reuniaos
     * const reuniaos = await prisma.reuniao.findMany()
     * 
     * // Get first 10 Reuniaos
     * const reuniaos = await prisma.reuniao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reuniaoWithIdOnly = await prisma.reuniao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReuniaoFindManyArgs>(args?: SelectSubset<T, ReuniaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reuniao.
     * @param {ReuniaoCreateArgs} args - Arguments to create a Reuniao.
     * @example
     * // Create one Reuniao
     * const Reuniao = await prisma.reuniao.create({
     *   data: {
     *     // ... data to create a Reuniao
     *   }
     * })
     * 
     */
    create<T extends ReuniaoCreateArgs>(args: SelectSubset<T, ReuniaoCreateArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reuniaos.
     * @param {ReuniaoCreateManyArgs} args - Arguments to create many Reuniaos.
     * @example
     * // Create many Reuniaos
     * const reuniao = await prisma.reuniao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReuniaoCreateManyArgs>(args?: SelectSubset<T, ReuniaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reuniaos and returns the data saved in the database.
     * @param {ReuniaoCreateManyAndReturnArgs} args - Arguments to create many Reuniaos.
     * @example
     * // Create many Reuniaos
     * const reuniao = await prisma.reuniao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reuniaos and only return the `id`
     * const reuniaoWithIdOnly = await prisma.reuniao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReuniaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ReuniaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reuniao.
     * @param {ReuniaoDeleteArgs} args - Arguments to delete one Reuniao.
     * @example
     * // Delete one Reuniao
     * const Reuniao = await prisma.reuniao.delete({
     *   where: {
     *     // ... filter to delete one Reuniao
     *   }
     * })
     * 
     */
    delete<T extends ReuniaoDeleteArgs>(args: SelectSubset<T, ReuniaoDeleteArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reuniao.
     * @param {ReuniaoUpdateArgs} args - Arguments to update one Reuniao.
     * @example
     * // Update one Reuniao
     * const reuniao = await prisma.reuniao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReuniaoUpdateArgs>(args: SelectSubset<T, ReuniaoUpdateArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reuniaos.
     * @param {ReuniaoDeleteManyArgs} args - Arguments to filter Reuniaos to delete.
     * @example
     * // Delete a few Reuniaos
     * const { count } = await prisma.reuniao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReuniaoDeleteManyArgs>(args?: SelectSubset<T, ReuniaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reuniaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reuniaos
     * const reuniao = await prisma.reuniao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReuniaoUpdateManyArgs>(args: SelectSubset<T, ReuniaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reuniaos and returns the data updated in the database.
     * @param {ReuniaoUpdateManyAndReturnArgs} args - Arguments to update many Reuniaos.
     * @example
     * // Update many Reuniaos
     * const reuniao = await prisma.reuniao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reuniaos and only return the `id`
     * const reuniaoWithIdOnly = await prisma.reuniao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReuniaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ReuniaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reuniao.
     * @param {ReuniaoUpsertArgs} args - Arguments to update or create a Reuniao.
     * @example
     * // Update or create a Reuniao
     * const reuniao = await prisma.reuniao.upsert({
     *   create: {
     *     // ... data to create a Reuniao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reuniao we want to update
     *   }
     * })
     */
    upsert<T extends ReuniaoUpsertArgs>(args: SelectSubset<T, ReuniaoUpsertArgs<ExtArgs>>): Prisma__ReuniaoClient<$Result.GetResult<Prisma.$ReuniaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reuniaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoCountArgs} args - Arguments to filter Reuniaos to count.
     * @example
     * // Count the number of Reuniaos
     * const count = await prisma.reuniao.count({
     *   where: {
     *     // ... the filter for the Reuniaos we want to count
     *   }
     * })
    **/
    count<T extends ReuniaoCountArgs>(
      args?: Subset<T, ReuniaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReuniaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reuniao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReuniaoAggregateArgs>(args: Subset<T, ReuniaoAggregateArgs>): Prisma.PrismaPromise<GetReuniaoAggregateType<T>>

    /**
     * Group by Reuniao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReuniaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReuniaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReuniaoGroupByArgs['orderBy'] }
        : { orderBy?: ReuniaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReuniaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReuniaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reuniao model
   */
  readonly fields: ReuniaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reuniao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReuniaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reuniao model
   */
  interface ReuniaoFieldRefs {
    readonly id: FieldRef<"Reuniao", 'Int'>
    readonly nomeAluno: FieldRef<"Reuniao", 'String'>
    readonly inicio: FieldRef<"Reuniao", 'DateTime'>
    readonly fim: FieldRef<"Reuniao", 'DateTime'>
    readonly salaId: FieldRef<"Reuniao", 'Int'>
    readonly createdAt: FieldRef<"Reuniao", 'DateTime'>
    readonly updatedAt: FieldRef<"Reuniao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reuniao findUnique
   */
  export type ReuniaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao findUniqueOrThrow
   */
  export type ReuniaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao findFirst
   */
  export type ReuniaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reuniaos.
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reuniaos.
     */
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao findFirstOrThrow
   */
  export type ReuniaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniao to fetch.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reuniaos.
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reuniaos.
     */
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao findMany
   */
  export type ReuniaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter, which Reuniaos to fetch.
     */
    where?: ReuniaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reuniaos to fetch.
     */
    orderBy?: ReuniaoOrderByWithRelationInput | ReuniaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reuniaos.
     */
    cursor?: ReuniaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reuniaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reuniaos.
     */
    skip?: number
    distinct?: ReuniaoScalarFieldEnum | ReuniaoScalarFieldEnum[]
  }

  /**
   * Reuniao create
   */
  export type ReuniaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Reuniao.
     */
    data: XOR<ReuniaoCreateInput, ReuniaoUncheckedCreateInput>
  }

  /**
   * Reuniao createMany
   */
  export type ReuniaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reuniaos.
     */
    data: ReuniaoCreateManyInput | ReuniaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reuniao createManyAndReturn
   */
  export type ReuniaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * The data used to create many Reuniaos.
     */
    data: ReuniaoCreateManyInput | ReuniaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reuniao update
   */
  export type ReuniaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Reuniao.
     */
    data: XOR<ReuniaoUpdateInput, ReuniaoUncheckedUpdateInput>
    /**
     * Choose, which Reuniao to update.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao updateMany
   */
  export type ReuniaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reuniaos.
     */
    data: XOR<ReuniaoUpdateManyMutationInput, ReuniaoUncheckedUpdateManyInput>
    /**
     * Filter which Reuniaos to update
     */
    where?: ReuniaoWhereInput
    /**
     * Limit how many Reuniaos to update.
     */
    limit?: number
  }

  /**
   * Reuniao updateManyAndReturn
   */
  export type ReuniaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * The data used to update Reuniaos.
     */
    data: XOR<ReuniaoUpdateManyMutationInput, ReuniaoUncheckedUpdateManyInput>
    /**
     * Filter which Reuniaos to update
     */
    where?: ReuniaoWhereInput
    /**
     * Limit how many Reuniaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reuniao upsert
   */
  export type ReuniaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Reuniao to update in case it exists.
     */
    where: ReuniaoWhereUniqueInput
    /**
     * In case the Reuniao found by the `where` argument doesn't exist, create a new Reuniao with this data.
     */
    create: XOR<ReuniaoCreateInput, ReuniaoUncheckedCreateInput>
    /**
     * In case the Reuniao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReuniaoUpdateInput, ReuniaoUncheckedUpdateInput>
  }

  /**
   * Reuniao delete
   */
  export type ReuniaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
    /**
     * Filter which Reuniao to delete.
     */
    where: ReuniaoWhereUniqueInput
  }

  /**
   * Reuniao deleteMany
   */
  export type ReuniaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reuniaos to delete
     */
    where?: ReuniaoWhereInput
    /**
     * Limit how many Reuniaos to delete.
     */
    limit?: number
  }

  /**
   * Reuniao without action
   */
  export type ReuniaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reuniao
     */
    select?: ReuniaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reuniao
     */
    omit?: ReuniaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReuniaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SalaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    capacidade: 'capacidade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const ReuniaoScalarFieldEnum: {
    id: 'id',
    nomeAluno: 'nomeAluno',
    inicio: 'inicio',
    fim: 'fim',
    salaId: 'salaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReuniaoScalarFieldEnum = (typeof ReuniaoScalarFieldEnum)[keyof typeof ReuniaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type SalaWhereInput = {
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    id?: IntFilter<"Sala"> | number
    nome?: StringFilter<"Sala"> | string
    capacidade?: IntFilter<"Sala"> | number
    createdAt?: DateTimeFilter<"Sala"> | Date | string
    updatedAt?: DateTimeFilter<"Sala"> | Date | string
    reunioes?: ReuniaoListRelationFilter
  }

  export type SalaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    capacidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reunioes?: ReuniaoOrderByRelationAggregateInput
  }

  export type SalaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    nome?: StringFilter<"Sala"> | string
    capacidade?: IntFilter<"Sala"> | number
    createdAt?: DateTimeFilter<"Sala"> | Date | string
    updatedAt?: DateTimeFilter<"Sala"> | Date | string
    reunioes?: ReuniaoListRelationFilter
  }, "id">

  export type SalaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    capacidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalaCountOrderByAggregateInput
    _avg?: SalaAvgOrderByAggregateInput
    _max?: SalaMaxOrderByAggregateInput
    _min?: SalaMinOrderByAggregateInput
    _sum?: SalaSumOrderByAggregateInput
  }

  export type SalaScalarWhereWithAggregatesInput = {
    AND?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    OR?: SalaScalarWhereWithAggregatesInput[]
    NOT?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sala"> | number
    nome?: StringWithAggregatesFilter<"Sala"> | string
    capacidade?: IntWithAggregatesFilter<"Sala"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sala"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sala"> | Date | string
  }

  export type ReuniaoWhereInput = {
    AND?: ReuniaoWhereInput | ReuniaoWhereInput[]
    OR?: ReuniaoWhereInput[]
    NOT?: ReuniaoWhereInput | ReuniaoWhereInput[]
    id?: IntFilter<"Reuniao"> | number
    nomeAluno?: StringFilter<"Reuniao"> | string
    inicio?: DateTimeFilter<"Reuniao"> | Date | string
    fim?: DateTimeFilter<"Reuniao"> | Date | string
    salaId?: IntFilter<"Reuniao"> | number
    createdAt?: DateTimeFilter<"Reuniao"> | Date | string
    updatedAt?: DateTimeFilter<"Reuniao"> | Date | string
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
  }

  export type ReuniaoOrderByWithRelationInput = {
    id?: SortOrder
    nomeAluno?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sala?: SalaOrderByWithRelationInput
  }

  export type ReuniaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReuniaoWhereInput | ReuniaoWhereInput[]
    OR?: ReuniaoWhereInput[]
    NOT?: ReuniaoWhereInput | ReuniaoWhereInput[]
    nomeAluno?: StringFilter<"Reuniao"> | string
    inicio?: DateTimeFilter<"Reuniao"> | Date | string
    fim?: DateTimeFilter<"Reuniao"> | Date | string
    salaId?: IntFilter<"Reuniao"> | number
    createdAt?: DateTimeFilter<"Reuniao"> | Date | string
    updatedAt?: DateTimeFilter<"Reuniao"> | Date | string
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
  }, "id">

  export type ReuniaoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeAluno?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReuniaoCountOrderByAggregateInput
    _avg?: ReuniaoAvgOrderByAggregateInput
    _max?: ReuniaoMaxOrderByAggregateInput
    _min?: ReuniaoMinOrderByAggregateInput
    _sum?: ReuniaoSumOrderByAggregateInput
  }

  export type ReuniaoScalarWhereWithAggregatesInput = {
    AND?: ReuniaoScalarWhereWithAggregatesInput | ReuniaoScalarWhereWithAggregatesInput[]
    OR?: ReuniaoScalarWhereWithAggregatesInput[]
    NOT?: ReuniaoScalarWhereWithAggregatesInput | ReuniaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reuniao"> | number
    nomeAluno?: StringWithAggregatesFilter<"Reuniao"> | string
    inicio?: DateTimeWithAggregatesFilter<"Reuniao"> | Date | string
    fim?: DateTimeWithAggregatesFilter<"Reuniao"> | Date | string
    salaId?: IntWithAggregatesFilter<"Reuniao"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reuniao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reuniao"> | Date | string
  }

  export type SalaCreateInput = {
    nome: string
    capacidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reunioes?: ReuniaoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateInput = {
    id?: number
    nome: string
    capacidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reunioes?: ReuniaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reunioes?: ReuniaoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reunioes?: ReuniaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaCreateManyInput = {
    id?: number
    nome: string
    capacidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoCreateInput = {
    nomeAluno: string
    inicio: Date | string
    fim: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sala: SalaCreateNestedOneWithoutReunioesInput
  }

  export type ReuniaoUncheckedCreateInput = {
    id?: number
    nomeAluno: string
    inicio: Date | string
    fim: Date | string
    salaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReuniaoUpdateInput = {
    nomeAluno?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sala?: SalaUpdateOneRequiredWithoutReunioesNestedInput
  }

  export type ReuniaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeAluno?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    salaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoCreateManyInput = {
    id?: number
    nomeAluno: string
    inicio: Date | string
    fim: Date | string
    salaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReuniaoUpdateManyMutationInput = {
    nomeAluno?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeAluno?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    salaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReuniaoListRelationFilter = {
    every?: ReuniaoWhereInput
    some?: ReuniaoWhereInput
    none?: ReuniaoWhereInput
  }

  export type ReuniaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    capacidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidade?: SortOrder
  }

  export type SalaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    capacidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    capacidade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalaSumOrderByAggregateInput = {
    id?: SortOrder
    capacidade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SalaScalarRelationFilter = {
    is?: SalaWhereInput
    isNot?: SalaWhereInput
  }

  export type ReuniaoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeAluno?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReuniaoAvgOrderByAggregateInput = {
    id?: SortOrder
    salaId?: SortOrder
  }

  export type ReuniaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeAluno?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReuniaoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeAluno?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    salaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReuniaoSumOrderByAggregateInput = {
    id?: SortOrder
    salaId?: SortOrder
  }

  export type ReuniaoCreateNestedManyWithoutSalaInput = {
    create?: XOR<ReuniaoCreateWithoutSalaInput, ReuniaoUncheckedCreateWithoutSalaInput> | ReuniaoCreateWithoutSalaInput[] | ReuniaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: ReuniaoCreateOrConnectWithoutSalaInput | ReuniaoCreateOrConnectWithoutSalaInput[]
    createMany?: ReuniaoCreateManySalaInputEnvelope
    connect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
  }

  export type ReuniaoUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<ReuniaoCreateWithoutSalaInput, ReuniaoUncheckedCreateWithoutSalaInput> | ReuniaoCreateWithoutSalaInput[] | ReuniaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: ReuniaoCreateOrConnectWithoutSalaInput | ReuniaoCreateOrConnectWithoutSalaInput[]
    createMany?: ReuniaoCreateManySalaInputEnvelope
    connect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReuniaoUpdateManyWithoutSalaNestedInput = {
    create?: XOR<ReuniaoCreateWithoutSalaInput, ReuniaoUncheckedCreateWithoutSalaInput> | ReuniaoCreateWithoutSalaInput[] | ReuniaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: ReuniaoCreateOrConnectWithoutSalaInput | ReuniaoCreateOrConnectWithoutSalaInput[]
    upsert?: ReuniaoUpsertWithWhereUniqueWithoutSalaInput | ReuniaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: ReuniaoCreateManySalaInputEnvelope
    set?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    disconnect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    delete?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    connect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    update?: ReuniaoUpdateWithWhereUniqueWithoutSalaInput | ReuniaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: ReuniaoUpdateManyWithWhereWithoutSalaInput | ReuniaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: ReuniaoScalarWhereInput | ReuniaoScalarWhereInput[]
  }

  export type ReuniaoUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<ReuniaoCreateWithoutSalaInput, ReuniaoUncheckedCreateWithoutSalaInput> | ReuniaoCreateWithoutSalaInput[] | ReuniaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: ReuniaoCreateOrConnectWithoutSalaInput | ReuniaoCreateOrConnectWithoutSalaInput[]
    upsert?: ReuniaoUpsertWithWhereUniqueWithoutSalaInput | ReuniaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: ReuniaoCreateManySalaInputEnvelope
    set?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    disconnect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    delete?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    connect?: ReuniaoWhereUniqueInput | ReuniaoWhereUniqueInput[]
    update?: ReuniaoUpdateWithWhereUniqueWithoutSalaInput | ReuniaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: ReuniaoUpdateManyWithWhereWithoutSalaInput | ReuniaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: ReuniaoScalarWhereInput | ReuniaoScalarWhereInput[]
  }

  export type SalaCreateNestedOneWithoutReunioesInput = {
    create?: XOR<SalaCreateWithoutReunioesInput, SalaUncheckedCreateWithoutReunioesInput>
    connectOrCreate?: SalaCreateOrConnectWithoutReunioesInput
    connect?: SalaWhereUniqueInput
  }

  export type SalaUpdateOneRequiredWithoutReunioesNestedInput = {
    create?: XOR<SalaCreateWithoutReunioesInput, SalaUncheckedCreateWithoutReunioesInput>
    connectOrCreate?: SalaCreateOrConnectWithoutReunioesInput
    upsert?: SalaUpsertWithoutReunioesInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutReunioesInput, SalaUpdateWithoutReunioesInput>, SalaUncheckedUpdateWithoutReunioesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReuniaoCreateWithoutSalaInput = {
    nomeAluno: string
    inicio: Date | string
    fim: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReuniaoUncheckedCreateWithoutSalaInput = {
    id?: number
    nomeAluno: string
    inicio: Date | string
    fim: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReuniaoCreateOrConnectWithoutSalaInput = {
    where: ReuniaoWhereUniqueInput
    create: XOR<ReuniaoCreateWithoutSalaInput, ReuniaoUncheckedCreateWithoutSalaInput>
  }

  export type ReuniaoCreateManySalaInputEnvelope = {
    data: ReuniaoCreateManySalaInput | ReuniaoCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type ReuniaoUpsertWithWhereUniqueWithoutSalaInput = {
    where: ReuniaoWhereUniqueInput
    update: XOR<ReuniaoUpdateWithoutSalaInput, ReuniaoUncheckedUpdateWithoutSalaInput>
    create: XOR<ReuniaoCreateWithoutSalaInput, ReuniaoUncheckedCreateWithoutSalaInput>
  }

  export type ReuniaoUpdateWithWhereUniqueWithoutSalaInput = {
    where: ReuniaoWhereUniqueInput
    data: XOR<ReuniaoUpdateWithoutSalaInput, ReuniaoUncheckedUpdateWithoutSalaInput>
  }

  export type ReuniaoUpdateManyWithWhereWithoutSalaInput = {
    where: ReuniaoScalarWhereInput
    data: XOR<ReuniaoUpdateManyMutationInput, ReuniaoUncheckedUpdateManyWithoutSalaInput>
  }

  export type ReuniaoScalarWhereInput = {
    AND?: ReuniaoScalarWhereInput | ReuniaoScalarWhereInput[]
    OR?: ReuniaoScalarWhereInput[]
    NOT?: ReuniaoScalarWhereInput | ReuniaoScalarWhereInput[]
    id?: IntFilter<"Reuniao"> | number
    nomeAluno?: StringFilter<"Reuniao"> | string
    inicio?: DateTimeFilter<"Reuniao"> | Date | string
    fim?: DateTimeFilter<"Reuniao"> | Date | string
    salaId?: IntFilter<"Reuniao"> | number
    createdAt?: DateTimeFilter<"Reuniao"> | Date | string
    updatedAt?: DateTimeFilter<"Reuniao"> | Date | string
  }

  export type SalaCreateWithoutReunioesInput = {
    nome: string
    capacidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaUncheckedCreateWithoutReunioesInput = {
    id?: number
    nome: string
    capacidade: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalaCreateOrConnectWithoutReunioesInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutReunioesInput, SalaUncheckedCreateWithoutReunioesInput>
  }

  export type SalaUpsertWithoutReunioesInput = {
    update: XOR<SalaUpdateWithoutReunioesInput, SalaUncheckedUpdateWithoutReunioesInput>
    create: XOR<SalaCreateWithoutReunioesInput, SalaUncheckedCreateWithoutReunioesInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutReunioesInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutReunioesInput, SalaUncheckedUpdateWithoutReunioesInput>
  }

  export type SalaUpdateWithoutReunioesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaUncheckedUpdateWithoutReunioesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    capacidade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoCreateManySalaInput = {
    id?: number
    nomeAluno: string
    inicio: Date | string
    fim: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReuniaoUpdateWithoutSalaInput = {
    nomeAluno?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoUncheckedUpdateWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeAluno?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReuniaoUncheckedUpdateManyWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeAluno?: StringFieldUpdateOperationsInput | string
    inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fim?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}