import axios from 'axios'

window.BASE = ''
const API_ROOT = `${BASE}/api`

export function fetchNav(year) {
	const url = `${API_ROOT}/nav`
	return axios.get(url)
}

export function fetchPages() {
	const url = `${API_ROOT}/statics`
	return axios.get(url)
}

export function fetchYear(year) {
	const url = `${API_ROOT}/year/${year}`
	return axios.get(url)
}