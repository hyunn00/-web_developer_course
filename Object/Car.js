function Vehicle(make, gearstatus = 0, fuelFull =70) {
    this.make = make
    this.gearstatus = gearstatus
    this.fuelFull = fuelFull
    this.startTime = 0
    this.endTime = 0
    this.usedFuel = 0

    this.start = function () {
        if (this.gearstatus === 0) {
            this.startTime = new Date()
            this.gearstatus += 1
            document.querySelector('#result').innerText =
            `${make} 차량이 주행을 시작하였습니다.
            기어를 1단으로 변경하였습니다.`
            document.querySelector('#img').src = 'images/gear1.gif'
            document.querySelector('#startText').innerText = "Accel"
            document.querySelector('#stopText').innerText = 'Brake'
        } else if(this.gearstatus === 1) {
            this.endTime = new Date()
            this.usedFuel += (((this.endTime.getTime() - this.startTime.getTime()) / 1000 ) * 0.01)
            this.startTime = this.endTime
            this.gearstatus += 1
            document.querySelector('#img').src = 'images/gear2.gif'
            document.querySelector('#result').innerText =
            `기어를 2단으로 변경하였습니다.
            지금까지 사용한 연료량 : ${this.usedFuel.toFixed(4)}`
        } else if(this.gearstatus === 2) {
            this.endTime = new Date()
            this.usedFuel += (((this.endTime.getTime() - this.startTime.getTime()) / 1000 ) * 0.02)
            this.startTime = this.endTime
            this.gearstatus += 1
            document.querySelector('#img').src = 'images/gear3.gif'
            document.querySelector('#result').innerText =
            `기어를 3단으로 변경하였습니다.
            지금까지 사용한 연료량 : ${this.usedFuel.toFixed(4)}`
        } else if(this.gearstatus === 3) {
            this.gearstatus = 3
            document.querySelector('#result').innerText =
            `더 이상 가속이 불가능 합니다.
            기어를 낮춰주세요`
        }
    }

    this.stop = function () {
        if (this.gearstatus === 0) {
            this.gearstatus = 0
            document.querySelector('#result').innerText =
            `${make} 차량이 멈추어 있습니다.
            start 버튼을 눌러 출발해 주세요`
        } else if(this.gearstatus === 1) {
            this.endTime = new Date()
            this.gearstatus -= 1
            this.usedFuel += (((this.endTime.getTime()- this.startTime.getTime()) / 1000) * 0.01)
            this.startTime = this.endTime
            this.fuelFull -= this.usedFuel
            document.querySelector('#result').innerText =
            `${make} 차량이 주행을 마쳤습니다.
            남은 연료량은 ${this.fuelFull.toFixed(4)}입니다.`
            document.querySelector('#img').src = 'images/gear0.gif'
            document.querySelector('#startText').innerText = "Start"
            document.querySelector('#stopText').innerText = 'Stop'
        } else if(this.gearstatus === 2) {
            this.endTime = new Date()
            this.gearstatus -= 1
            this.usedFuel += (((this.endTime.getTime()- this.startTime.getTime()) / 1000) * 0.02)
            this.startTime = this.endTime
            document.querySelector('#result').innerText =
            `기어를 1단으로 변경하였습니다.
            지금까지 사용한 연료량 : ${this.usedFuel.toFixed(4)}`
            document.querySelector('#img').src = 'images/gear1.gif'
        } else if(this.gearstatus === 3) {
            this.endTime = new Date()
            this.gearstatus -= 1
            this.usedFuel += (((this.endTime.getTime()- this.startTime.getTime()) / 1000) * 0.03)
            this.startTime = this.endTime
            document.querySelector('#result').innerText =
            `기어를 2단으로 변경하였습니다.
            지금까지 사용한 연료량 : ${this.usedFuel.toFixed(4)}`
            document.querySelector('#img').src = 'images/gear2.gif'
        }
    }
}

let Car1 = new Vehicle("현대")