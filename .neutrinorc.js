const standard = require('@neutrinojs/standardjs')
const web = require('@neutrinojs/web')
const reactNodegui = require('neutrino-preset-react-nodegui')

module.exports = {
  options: {
    root: __dirname
  },
  use: [
    reactNodegui(),
    standard(),
    web({
      html: {
        title: 'nodegui-retroarch'
      }
    })
  ]
}
