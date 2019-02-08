class hambMenu {
	constructor(props) {
		this.el = document.querySelector(props.el)
		this.aktif = "ya"
		this.el.setAttribute('style', 'cursor: pointer;display: inline-block;margin-top: 5px;')
		this.styles = props.style
		this.customStyle()
		this.styleDefault = 'background: #444;width: 40px;height: 6px;margin-bottom: 8px;border-radius: 90px;transition: 0.4s;'
		if(this.myStyle != undefined) {
			this.styleDefault += this.myStyle
		}

		// create bar one
		this.barOne = document.createElement("div")
		this.barOne.setAttribute('style', this.styleDefault)
		
		// create bar two
		this.barTwo = document.createElement("div")
		this.barTwo.setAttribute('style', this.styleDefault + 'width: 25px;')
		
		// create bar two
		this.barThree = document.createElement("div")
		this.barThree.setAttribute('style', this.styleDefault)
		
		// append to element
		this.el.appendChild(this.barOne)
		this.el.appendChild(this.barTwo)
		this.el.appendChild(this.barThree)
		this.el.addEventListener('click', () => {
			this.klikFunc(this.aktif)
		})
	}
	klikFunc(param) {
		if(param == "ya") {
			const newStyle = "margin-top: 10px;"
			let rotateBarOne,rotateBarTwo
			this.barTwo.setAttribute('style', this.styleDefault + 'opacity: 0.01;')
			this.barOne.setAttribute('style', this.styleDefault + 'transform: rotate(135deg);' + newStyle)
			this.barThree.setAttribute('style', this.styleDefault + 'transform: rotate(45deg);position: relative;top: -30px;' + newStyle)
			this.aktif = "tidak"
		}else {
			this.barTwo.setAttribute('style', this.styleDefault + 'position: relative;left: 0%;' + 'width: 25px;')
			this.barOne.setAttribute('style', this.styleDefault + 'transform: rotate(0deg);')
			this.barThree.setAttribute('style', this.styleDefault + 'transform: rotate(0deg);')
			this.aktif = "ya"
		}
	}
	customStyle() {
		if(this.styles != undefined) {
			this.bgColor 	= this.styles.backgroundColor
			this.myStyle = ""
			if(this.bgColor != "") {
				this.myStyle += "background-color: " + this.bgColor + ";"
			}
		}
	}
}