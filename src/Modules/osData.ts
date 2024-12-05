import os from 'os'
import si from 'systeminformation'

import { convertByte, timeConverter } from './converter'

async function disk() {
  const list = await si.fsSize()

  let stroageData = []

  for (let i = 0; i < list.length; i++) {
    let template = {
      fs: list[i].fs,
      mount: list[i].mount,
      diskType: list[i].type,
      used: list[i].used,
      total:
        String(list[i].size) != 'NaN'
          ? list[i].size
          : list[i].used + list[i].available,
    }

    stroageData.push(template)
  }

  return stroageData
}

export async function osData() {
  const data = {
    hostname: os.hostname(),
    platform: os.platform(),
    storage: await disk(),
    uptime: timeConverter(os.uptime()),
  }

  return data
}
