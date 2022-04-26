const form = selector("form")
const countryFromInput = selector("[name='country-from']")
const countryToInput = selector("[name='country-to']")

const countryFromDatalist = selector("#country-from")
const airportFromDatalist = selector("#airport-from")

const countryToDatalist = selector("#country-to")
const airportToDatalist = selector("#airport-to")

const getAirPorts =  async () => {
    const request = await fetch(`${BASE_URL}/airport`)
    const response = await request.json()

    return response.result
}

const getCountryName = async () => {
    let data = await getAirPorts()
    const countries = []

    data.forEach(item => {
        countries.push(item.municipality)
    })

    return countries
}


// populateCountries()

countryFromInput.addEventListener("keypress", async () => {
    const value = new RegExp(countryFromInput.value)

    ;(await getCountryName()).forEach((country, index) => {
        if(country.match(value)) {
            const child = document.createElement("p")
            child.classList.add("data-item")
            child.innerHTML = country
            child.dataset.index = index

            child.addEventListener("click", () => {
                countryFromInput.value = country
            })
            countryFromDatalist.appendChild(child)
        }
    })

    countryToDatalist.classList.add("show")
})

countryFromInput.addEventListener("blur", async () => {
    if(countryToDatalist.classList.contains("show")){
        countryToDatalist.classList.remove("show")
    }
})

countryToInput.addEventListener("keypress", async () => {
    const value = new RegExp(countryToInput.value)

    ;(await getCountries()).forEach((country, index) => {
        if(country.match(value)) {
            const child = document.createElement("p")
            child.classList.add("data-item")
            child.innerHTML = country
            child.dataset.index = index

            child.addEventListener("click", () => {
                countryToInput.value = country
            })
            countryToDatalist.appendChild(child)
        }
    })

    countryToDatalist.classList.add("show")
})

countryToInput.addEventListener("blur", async () => {
    if(countryToDatalist.classList.contains("show")){
        countryToDatalist.classList.remove("show")
    }
})



// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// })