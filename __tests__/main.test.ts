import { describe, it, expect } from 'vitest';
import { greeter } from "../src/main.js";

describe('greeter function', () => {
  // Assert greeter result
  it('greets a user with `Hello, {name}` message', async () => {
    const name = 'john';
    const result = await greeter(name);
    expect(result).toBe(`Hello, ${name}`);
  });
});
