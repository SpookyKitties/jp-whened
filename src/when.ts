export async function jpWhen(promises: Promise<any>[]) {
  if (Promise.all) {
    const results = await Promise.all(
      promises.map(p =>
        p.catch(e => {
          e;
        })
      )
    );
    return results.filter(f => f);
  } else {
    throw "Your Promise implementation doesn't support Promise.all";
  }
}

// const promises = [
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ id: 1 });
//     }, 300);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (true) {
//         reject({ id: 2 });
//       } else {
//         resolve();
//       }
//     }, 300);
//   }),
// ];

// async function asdf() {
//   jpWhen(promises).then(v => {
//     console.log(v);
//   });
//   // console.log(await jpWhen(promises));
// }

// asdf();
