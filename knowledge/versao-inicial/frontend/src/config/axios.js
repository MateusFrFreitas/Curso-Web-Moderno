import axios from 'axios'
import { userKey } from '@/global'

const success = res => res
const error = err => {
	if(401 === err.response.status && localStorage.getItem(userKey) !== null) {
		window.location = '/'
	} else {
		return Promise.reject(err)
	}
}

axios.interceptors.response.use(success, error)