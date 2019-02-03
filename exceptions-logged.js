require('longjohn')
setTimeout(()=>{
	throw new Error('BadaBoom!')
}, 2000)
