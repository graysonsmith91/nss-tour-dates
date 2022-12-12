import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings()
const venues = getVenues()

export const Bands = () => {
    let htmlString = "<ul>"
    for (const band of bands) {
        htmlString += `<li id="band--${band.id}">${band.name}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {
             
            const [,bandPrimaryKey] = itemClicked.id.split("--")

            for (const band of bands) {

                if (band.id === parseInt(bandPrimaryKey)) {
                    const assignedVenues = filterVenuesByBand(band)
                    const venueNames = assignedVenueNames(assignedVenues)
                    window.alert(`Playing at: \n${venueNames}`)
                }
            }
        }
    }
)

const filterVenuesByBand = (band) => {
    const venuesArr = []
    for (const booking of bookings) {
        if (booking.bandId === band.id) {
            venuesArr.push(booking)
        }
    }
    return venuesArr
}

const assignedVenueNames = (venuesArray) => {
    let venueNames = ""
    for (const venuesArrObj of venuesArray) {
        for (const venue of venues) {
            if (venue.id === venuesArrObj.venueId) {
                venueNames += `${venue.name}\n`
            }
        }
    }
    return venueNames
}