const uniqueSymbolFoo: unique symbol = Symbol('shenshihsi');

// 类型不兼容
const uniqueSymbolBar: unique symbol = uniqueSymbolFoo;

const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo;