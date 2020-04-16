import hello from './hello';

test('hello returns msg inserted', () => {
   expect(hello('World')).toBe('Hello World!');
});
