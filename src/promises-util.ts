/* eslint-disable no-await-in-loop */

export class PromisesUtil {
  // eslint-disable-next-line no-unused-vars
  public async groupExecute<T, R=any>(list: T[], groupSize: number, func: (el: T) => Promise<R>): Promise<R[]> {
    let step = 0;
    let result: R[] = [];

    for (let start = 0; start < list.length; start += groupSize) {
      step += 1;
      const end = start + groupSize;

      const group = list.slice(start, end);

      const asyncProcess = group.map(func);
      const data = await Promise.all(asyncProcess);

      result = result.concat(data);
    }
    return result;
  }
}
