import { exec } from 'child_process'
import util from 'util'

const execPromise = util.promisify(exec)

const getUsername = async () => {
  try {
    const { stdout, stderr } = await execPromise('whoami')
    if (stderr) {
      return
    }

    return stdout.trim()
  } catch (err) {
    return
  }
}

export { getUsername }
