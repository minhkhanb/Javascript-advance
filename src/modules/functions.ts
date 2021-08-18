import { curry, join, map, split, toLowerCase } from '../core/functions';

export class ClassFunction {

  /**
   *+++++++++++++ Normal case => bad case +++++++++++++++++
   * @param {string} input
   * @returns {string}
   */
  public toNormalSlug(input: string) {
    return encodeURIComponent(
      input.split(' ')
            .map((str: string) => str.toLocaleLowerCase())
            .join('-')
    );
  }

  /**
   * +++++++++++++ Composition case => bad case +++++++++++++++++
   * @param {string} input
   * @returns {string}
   */
  public toCompositionSlug(input: string) {
    return encodeURIComponent(
      join('-')(
        map(toLowerCase)(
          split(' ')(
            input
          )
        )
      )
    )
  }
}

