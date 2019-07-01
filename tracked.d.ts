declare type TSDecorator = (target: object, propertyKey: string | symbol, descriptor?: PropertyDescriptor) => void;
declare type TrackedDecorator = TSDecorator & ((...args: string[]) => TSDecorator);
export declare const tracked: TrackedDecorator;
export {};
