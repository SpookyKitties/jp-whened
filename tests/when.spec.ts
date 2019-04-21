import { when } from '../src/when';

test('EMCA Promises', () => {
  const promises: Promise<any>[] = [
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 300);
    }),
    new Promise(reject => {
      setTimeout(() => {
        reject();
      }, 300);
    }),
  ];
  console.log(promises);

  when(promises)
    .then(value => {
      expect(value === undefined);
    })
    .catch(reason => {
      fail(reason);
    });
});
