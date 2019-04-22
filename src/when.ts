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
