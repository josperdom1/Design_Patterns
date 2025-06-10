import { Singleton } from '../patterns/creational/singleton';

// Example usage of the Singleton pattern
function demonstrateSingleton(): void {
    // Get the singleton instance
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    // Both instances should be the same
    console.log('Are instances the same?', instance1 === instance2);

    // Call a method on the singleton
    instance1.someMethod();
}

// Run the example
demonstrateSingleton(); 