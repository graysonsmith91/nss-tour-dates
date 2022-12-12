import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const Venues = () => {
    let htmlString = "<ul>"
    for (const venue of venues) {
        htmlString += `<li id="venue--${venue.id}">${venue.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {
             
            const [,venuePrimaryKey] = itemClicked.id.split("--")

            for (const venue of venues) {

                if (venue.id === parseInt(venuePrimaryKey)) {
                    const assignedBands = filterBandByVenues(venue)
                    const bandNames = assignedBandNames(assignedBands)
                    window.alert(`Playing here soon: \n${bandNames}`)
                }
            }
        }
    }
)

const filterBandByVenues = (venue) => {
    const bandsArr = []
    for (const booking of bookings) {
        if (booking.venueId === venue.id) {
            bandsArr.push(booking)
        }
    }
    return bandsArr
}

const assignedBandNames = (bandsArray) => {
    let bandNames = ""
    for (const bandsArrObj of bandsArray) {
        for (const band of bands) {
            if (band.id === bandsArrObj.bandId) {
                bandNames += `${band.name}\n`
            }
        }
    }
    return bandNames
}