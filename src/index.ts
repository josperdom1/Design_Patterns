/**
 * Main entry point for the TypeScript Design Patterns project
 */

// Export all patterns
export * from './patterns/creational/singleton';

// If this file is run directly, show a message
if (require.main === module) {
    console.log('TypeScript Design Patterns');
    console.log('------------------------');
    console.log('This is the main entry point. To run examples, use:');
    console.log('npm run example <example-file>');
    console.log('\nAvailable examples:');
    console.log('- singleton-example.ts');
} 