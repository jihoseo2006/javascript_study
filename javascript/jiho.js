import { birthKey, emailsKey} from './keys.js'

export default {
  firstName: 'JiHo',
  lastName: 'Seo',
  age: 17,
  [birthKey]: new Date(2006, 2, 22, 16, 30),
  [emailsKey]: ['thesecond@gmail.com', 'abc@naver.com']
}