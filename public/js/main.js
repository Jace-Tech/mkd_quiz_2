const BASE_URL = "http://localhost:5000/api"

const selector = name => document.querySelector(name)

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const getWeatherFocast = () => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
        const latLang = `${coords.latitude},${coords.longitude}`

        fetch(`${BASE_URL}/weather/${latLang}`)
            .then(res => res.json())
            .then(data => parseData(data))
    })
}

const parseData = data => {
    const { current: { condition }, current, location } = data
    const today = new Date()
    
    const dateParser = new Intl.DateTimeFormat("en-us", {
        month: "long",
        year: "numeric",
        day: "2-digit"
    })


    const country = selector("[data-country]")
    const temp = selector("[data-temp]")
    const date = selector("[data-date]")
    const textCondition = selector("[data-text]")
    const icon = selector("[data-icon]")

    if(data) {
        console.log(data)
        country.innerHTML = location.country
        date.innerHTML = dateParser.format(today)
        textCondition.innerHTML = condition.text
        icon.src = condition.icon
        temp.innerHTML =`${current.temp_c}&deg;`
    }
}

getWeatherFocast()