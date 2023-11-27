describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const expected = 'new message';
    expect(expected).toMatch(msg);
  });
});
