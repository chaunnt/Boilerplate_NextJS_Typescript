import requestService from './_request'
export const all = (
  path: string,
  filter = {}
) => {
  return requestService.send({
    method: 'get',
    path,
    params: { ...filter },
  })
}

export const get = (path: string) => {
  return requestService.send({
    method: 'get',
    path,
  })
}

export const post = (path: string, data: any, params = {}) => {
  return requestService.send({
    method: 'post',
    path,
    data,
    params
  })
}

export const put = (path: string, data: any, params = {}) => {
  return requestService.send({
    method: 'put',
    path,
    data,
    params,
  })
}



