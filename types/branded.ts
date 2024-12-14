type Brand<K, T> = K & { __brand: T }
export type GuId = Brand<string, "GuId">
export type IsoDate = Brand<string, "IsoDate">