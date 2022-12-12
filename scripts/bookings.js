import { getBands, getVenues, getBookings } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

// function to match band id to booking id called bookedBand

const findBookedBand = (booking, allBands) => {
    let bookedBand = null
    for (const band of bands) {
        if (band.id === booking.bandId) {
            bookedBand = band
        }
    }
    return bookedBand
}

// function to match venue id to booking id called bookedVenue

const findBookedVenue = (booking, allVenues) => {
    let bookedVenue = null
    for (const venue of venues) {
        if (venue.id === booking.venueId) {
            bookedVenue = venue
        }
    }
    return bookedVenue
}

// export function that loops through bookings and calls 2 functions
// above and store in 2 vars. *check arguments*
// add and return html string interpolation which shows band playing
// at venue on this date

export const Bookings = () => {
    let htmlString = "<ul>"

    for (const booking of bookings) {
        const band = findBookedBand(booking, bands)
        const venue = findBookedVenue(booking, venues)

        htmlString += `<li id="booking--${booking.id}">${band.name} is playing at ${venue.name} on ${booking.date}</li>`
    }
    htmlString += "</ul>"
    return htmlString
}

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("booking")) {

            const [,bookingPrimaryKey] = itemClicked.id.split("--")

            for (const booking of bookings) {
                const band = findBookedBand(booking, bands)

                if (booking.id === parseInt(bookingPrimaryKey)) {

                    window.alert(`${band.name}\n${band.genre}\nFormed in ${band.yearFormed}\n${band.members} band members`)
                }
            }
        }
    }
)