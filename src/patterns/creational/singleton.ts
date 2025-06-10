/**
 * Singleton Pattern
 * 
 * Ensures a class has only one instance and provides a global point of access to it.
 */

export class Singleton {
    private static instance: Singleton;
    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someMethod(): void {
        console.log('Singleton method called');
    }
} 