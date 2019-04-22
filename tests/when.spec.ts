import { jpWhen } from '../src/when';

test('EMCA Promises', () => {
  const promises: Promise<any>[] = [
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 0);
    }),
    new Promise(reject => {
      setTimeout(() => {
        reject();
      }, 0);
    }),
  ];
  //   console.log(promises);

  jpWhen(promises)
    .then(value => {
      expect(value).toEqual([]);
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
        }, 0);
      }),
      new Promise(reject => {
        setTimeout(() => {
          reject();
        }, 0);
      }),
    ];

    jpWhen(promises)
      .then(value => {
        expect(value).toEqual([]);
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
        }, 0);
      }),
      new Promise(reject => {
        setTimeout(() => {
          reject({ id: 2 });
        }, 0);
      }),
    ];

    jpWhen(promises)
      .then(value => {
        // value.forEach(v => {
        //   console.log(v);
        // });
        // console.log(value.length);

        expect(value.length).toBe(2);
      })
      .catch(reason => {
        fail(reason);
      });
  });
});
