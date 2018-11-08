const groups = require("..");

describe(`CSS properties grouped by category`, () => {
  it(`matches the snapshot`, () => {
    expect(groups).toMatchSnapshot();
  });
});
