import { jpWhen } from '../src/when';

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
  //   console.log(promises);

  jpWhen(promises)
    .then(value => {
      expect(value === undefined);
    })
    .catch(reason => {
      fail(reason);
    });
});

const promisesTypes = [
  'es6-promise',
  'promise',
  'q',
  'pinkie-promise',
  'promise-polyfill',
  'native-promise-only',
  'bluebird',
  'q',
  'pinkie',
];
promisesTypes.forEach(promiseType => {
  const Promise = require(promiseType);
  test(`Basic Test: ${promiseType}`, () => {
    const promises = [
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

    jpWhen(promises)
      .then(value => {
        expect(value === undefined);
      })
      .catch(reason => {
        fail(reason);
      });
  });

  test(`Complex Test: ${promiseType}`, () => {
    const promises = [
      new Promise(resolve => {
        setTimeout(() => {
          resolve({ id: 1 });
        }, 300);
      }),
      new Promise(reject => {
        setTimeout(() => {
          reject();
        }, 300);
      }),
    ];
    const promises2 = [
      new Promise(resolve => {
        setTimeout(() => {
          resolve({ id: 1 });
        }, 300);
      }),
      new Promise(reject => {
        setTimeout(() => {
          reject();
        }, 300);
      }),
    ];

    jpWhen(promises2)
      .then(value => {
        value.forEach(v => {
          console.log(v);
        });
        // expect(value.length === 2);
        jpWhen(promises)
          .then(value => {
            expect(value.length === 2);
          })
          .catch(reason => {
            fail(reason);
          });
      })
      .catch(reason => {
        fail(reason);
      });
  });
});
