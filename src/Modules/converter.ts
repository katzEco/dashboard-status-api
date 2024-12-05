export function convertByte(byte: number) {
  const Kb = byte / 1024 ** 1
  const Mb = byte / 1024 ** 2
  const Gb = byte / 1024 ** 3

  if (Gb >= 1) {
    return `${Gb.toFixed(2)} GiB`
  } else if (Mb >= 1) {
    return `${Mb.toFixed(2)} MiB`
  } else {
    return `${Kb.toFixed(2)} KiB`
  }
}

export function timeConverter(stamp: number) {
  let day = Math.floor(stamp / 24 / 60 / 60)
  let hr = Math.floor(stamp / 60 / 60) - day * 24
  let min = Math.floor(stamp / 60) - day * 24 * 60 - hr * 60

  return (
    String(day) +
    (day > 1 ? ' days ' : ' day ') +
    String(hr) +
    (hr > 1 ? ' hrs ' : ' hr ') +
    String(min) +
    (min > 1 ? ' mins' : ' min')
  )
}
