import { ClassFunction } from './modules/functions';

const classFunction = new ClassFunction();

/*+++++++++++++ Normal case => bad case +++++++++++++++++*/
const toNormalSlug = classFunction.toNormalSlug('Get Normal Slug');
console.log('toNormalSlug: ', toNormalSlug);

/*+++++++++++++ Normal case => bad case +++++++++++++++++*/
const toCompositionSlug = classFunction.toCompositionSlug('Get Composition Slug');
console.log('toCompositionSlug: ', toCompositionSlug);