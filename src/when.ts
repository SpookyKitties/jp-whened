export function when(promises: Promise<any>[]) {
  if (Promise.all) {
    return Promise.all(promises.map(p => p.catch(e => e)));
  } else {
    throw "Your Promise implementation doesn't support Promise.all";
  }
}
