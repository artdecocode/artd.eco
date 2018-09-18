import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import artdEco from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof artdEco, 'function')
  },
  async 'calls package without error'() {
    await artdEco()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await artdEco({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T