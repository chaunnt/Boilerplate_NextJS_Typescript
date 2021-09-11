import axios, { Method } from "axios"
import Swal from 'sweetalert2'
import { parseCookies } from 'nookies'

export const TOKEN_KEY = 'TOKEN';
interface Props {
  method: Method
  path: string
  params?: any
  data?: any
  formData?: boolean
  hasTotal?: boolean
  isDownload?: boolean
}

export const JsonToFormData = (object: JSON) => {
  const formData = new FormData()
  // @ts-ignore
  Object.keys(object).map(key => formData.append(key, object[key]))
  return formData
}

export function send(props: Props) {
  return new Promise(resolve => {
    const {
      method,
      path,
      params,
      data,
      formData,
    } = props
    //TODO: store token later
    const cookies = parseCookies()
    const newUrl = process.env.API_URL + path
    axios({
      method,
      url: newUrl,
      params,
      data,
      headers: {
        authorization: cookies[TOKEN_KEY] ? `Bearer ${cookies[TOKEN_KEY]}` : "Hodace",
        "Content-Type": formData ? "multipart/form-data" : "application/json"
      }
    }).then(result => {
      resolve(result)
    }).catch(error => {
      console.error(error);
      Swal.fire('Oops...', 'Server Error', 'error')
      resolve(null);
    })
  })
}

export const replaceUrl = (url: string, data: any) => {
  const regex = new RegExp(":(" + Object.keys(data).join("|") + ")", "g")

  return url.replace(regex, (m, $1) => data[$1] || m)
}
export default {
  send
}
