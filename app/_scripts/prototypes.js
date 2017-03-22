// Prototypes

String.prototype.vertical = function() {
	return this.split('').join('\n\b')
}

String.prototype.ellipsis = function(limit) {
	return (this.length > limit) ? this.substr(0,limit).replace(/^[.\s]+|[.\s]+$/g,'')+'\u2026' : this
}

String.prototype.pml = function() {
	_array = this.split(',')
	const result = _array.reduce((str,char)=> {
		str += String.fromCharCode(parseInt(char))
		return str
	},'')
	return result
}

String.prototype.slugify = function() {
	let str = this
	const from = 'ÀÁÅÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛÑàáåäâèéëêìíïîòóöôùúüûñç'
	const to ='AAAAAEEEEIIIIOOOOUUUUNaaaaaeeeeiiiioooouuuunc'
	let l = from.length
	for(;l--;) {
		str = str.replace(new RegExp(from.charAt(l),'g'),to.charAt(l))
	}
	return str.toString()
		.trim()
		.replace(/^(\d)/,'_$&')
		.replace(/&/g,'and')
		.replace(/[\s\W-]+/g,'_')
}

window.getDay = function(date,lang='EN') {
	const day_names = {
		EN: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		],
		DE: [
			'Sonntag',
			'Montag',
			'Dienstag',
			'Mittwoch',
			'Donnerstag',
			'Freitag',
			'Samstag'
		]
	}
	return day_names[lang][new Date(date).getDay()]
}

Array.prototype.equals = function(array2) {
	return this.length == array2.length &&
		this.every((item,index)=> {
			return item == array2[index]
		})
}

window.scroll = function(el,target=false,duration=400) {
	const start = el.scrollTop
	const offset = target ? target.offsetTop : 0
	let change = offset - start
	let currentTime = 0
	const increment = 20
	function animate() {
		currentTime += increment
		change = offset - start
		el.scrollTop = Math.easeInOutQuad(currentTime,start,change,duration)
		if(currentTime < duration)
			setTimeout(animate, increment)
	}

	animate()
}

Math.easeInOutQuad = function(ct,s,c,d) {
	ct /= d/2
	if(ct < 1)
		return c/2*ct*ct + s
	ct--
	return -c/2 * (ct*(ct-2) - 1) + s
}