import { SafeGuardPipe } from './safe-guard.pipe';

describe('SafeGuardPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeGuardPipe();
    expect(pipe).toBeTruthy();
  });
});
