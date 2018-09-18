import { debuglog } from 'util'

const LOG = debuglog('artd.eco')

/**
 * A website for Art Deco Code.
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
export default async function artdEco(config) {
  const {
    type,
  } = config
  LOG('artd.eco called with %s', type)
  return type
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} shouldRun A boolean option.
 */
