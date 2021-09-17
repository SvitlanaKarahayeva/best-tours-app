require('dotenv').config()
require('./config/database')


const Tour = require('./models/tour')

const seedTours = [
    {
        name: "Chichen Itza All-Inclusive, Tequila tasting, Cenote Swim",
        image: "https://i.imgur.com/XaDRXbU.jpg",
        tourType: "Historical places",
        location: "Playa del Carmen",
        price: 70,
        description: "Journey to Mexico's Yucatán Peninsula to visit the Mayan ruins of Chichen Itza on this full-day excursion that includes easy hotel pickup and drop-off. Along with seeing El Castillo and learning how this pre-Columbian city played an important role in the Mayan civilization, visit the colonial town of Valladolid, stop at a cenote for a quick swim, and enjoy a buffet lunch."
    },
    {
        name: "Rio Secreto Underground River Tour with Crystal Caves",
        image: "https://i.imgur.com/NylKZ57.jpg",
        tourType: "Aqua Advantures",
        location: "Cancun",
        price: 112,
        description: "Explore the Rio Secreto Nature Reserve outside of Cancun on this full-day excursion, where you swim and wade in one of the most spectacular underground caves in Mexico. See the famous crystal caves on a tour that showcases the spectacular natural wonders of the Yucatán. Choose round-trip transportation from your Cancun hotel, or meet your guide at Rio Secreto directly."
    },
    {
        name: "Cirque du Soleil® JOYÀ Admission Tickets",
        image: "https://i.imgur.com/qvCCYQ4.jpg",
        tourType: "Fun activities",
        location: "Cancun",
        price: 170,
        description: "Experience tablecloth dining along with the Cirque du Soleil® show 'JOYÁ' at the Vidanta Riviera Maya resort. Allow yourself to be mesmerized by the story of an alchemist and his granddaughter seeking out the secrets of life. The show draws on the heritage and history of Mexico to weave the story, presented in an intimate dinner theatre in the jungle of the Riviera Maya."
    },
    {
        name: "Day Trip To Tulum and Coba Ruins Including Cenote Swim",
        image: "https://i.imgur.com/aaC3HP7.jpg",
        tourType: "Historical places",
        location: "Cancun",
        price: 90,
        description: "Discover the essence of the ancient Maya civilization on this full-day excursion to Coba and the Tulum ruins. This Cancun Super Saver takes you to explore Tulum's ruins with an expert guide, then jump into a rejuvenating underground cenote. Tour Coba, a once-thriving Maya village deep in the rain forest. Enjoy Yucatanean specialties at a buffet lunch and round-trip transportation from your Cancun hotel."
    },
    {
        name: "Guided Mexican Food Tour & Spirits Tasting",
        image: "https://i.imgur.com/MMtfFVu.jpg",
        tourType: "Food Tasting",
        location: "Cancun",
        price: 155,
        description: "Take a half-day food tour in Cancun to discover authentic local eateries and regional fare from across Mexico. Find out where the locals go as your guide takes you to four favorite eateries where you sample items such as tacos, street food, and gourmet dishes with origins in the Yucutan, Caribbean, and Central Mexico. You’ll also sample three Mexican spirits: tequila, mezcal, and xtabentun.",
    },
    {
        name: "Cozumel & Snorkel Day Trip",
        image: "https://i.imgur.com/cOtUTGX.jpg",
        tourType: "Aqua Advantures",
        location: "Cancun",
        price: 215,
        description: "Explore the island of Cozumel with ease with a door-to-door transportation service that includes pick-up at your hotel in Cancun or Riviera Maya, and ferry transport to Cozumel, where you can relax on white-sand beaches, snorkel, and check out the Museum of the Island of Cozumel. An upgraded option features lunch and an open bar, allowing you to fully relax on your journey."
    },
    {
        name: "Combo Mayan Ruins: Chichen Itza, Tulum, Coba, Cenote and Chocolate experience",
        image: "https://i.imgur.com/gKObm7r.jpg",
        tourType: "Historical places",
        location: "Cancun",
        price: 193,
        description: "This action-packed tour includes several activities over a two-day period. First, tour the UNESCO World Heritage Site of Chichen Itza, go swimming in a cenote, and visit the charming colonial town of Valladolid. Day two takes you to two sets of ruins—Tulum and Coba. The day wraps up with a lunch buffet, Mayan chocolate experience, and another cenote swim."
    },
    {
        name: "Playa del Carmen Jungle Tour: Tulum, Cenote Snorkeling, Ziplining",
        image: "https://i.imgur.com/qGOmRgm.jpg",
        tourType: "Fun activities",
        location: "Playa del Carmen",
        price: 74,
        description: "Depart Playa del Carmen for a day of cultural experience and adrenaline-inducing activities. Begin with a visit to Tulum, an ancient Maya coastal city that's home to archaeological remains and sandy beaches. Then visit a modern-day Maya community before entering the jungle to explore two vast underground river systems. Snorkel their cavern waters and afterward, board a 4x4 Unimog for a thrilling ride toward a series of ziplining and rappelling adventures. Wind down with a buffet lunch of delicious Maya cuisine."
    },
    {
        name: "Top ATV´s in Mexico which includes Cenote, Ziplines, lunch",
        image: "https://i.imgur.com/nntCoSb.jpg",
        tourType: "Fun activities",
        location: "Cancun",
        price: 85,
        description: "This three-part tour is popular with adventure seekers. Take an ATV ride through the jungle to a sacred cenote where you can swim, jump from a Tarzan swing, or just relax and take in the tropical scenery. Then it’s time for some ziplining through the tree canopy. Replenish your energy with a typical Mayan lunch (included) before the ride back to Cancun."
    },
    {
        name: "Taco Tour and Local Beer Tour",
        image: "https://i.imgur.com/S9T4ETO.jpg",
        tourType: "Food Tasting",
        location: "Cancun",
        price: 89,
        description: "Taste your way through Cancun’s best tacos with this guided culinary adventure. After convenient hotel pickup, enjoy skip-the-line access with a local insider and savor a variety of delicious tacos—Mexico City and Yucatecan style, “al pastor” and “surtido.” Sip a cold one with your meal—four are included in the tour price—gobble up a complimentary churro, and take in the lovely sounds of an authentic Mariachi band."
    },

    {
        name: "Sailing Experience to Isla Mujeres in a Catamaran with Open Bar",
        image: "https://i.imgur.com/OAQmK8A.jpg",
        tourType: "Aqua Advantures",
        location: "Playa del Carmen",
        price: 86,
        description: "Spend the day soaking up the sparkling Caribbean on this catamaran cruise to Isla Mujeres from Cancun. Feel the gentle breeze as you sip drinks from an open bar. Hop into the water to snorkel at a reef location teeming with vibrantly hued fish. Dock at a private beach club for a delicious buffet lunch and even more down time. Upon arrival at Isla Mujeres, enjoy free time to explore and shop. For added convenience, upgrade to include hotel transport from Playa del Carmen to the departing marina."
    },
    {
        name: "Cancun Underwater Museum Snorkel Tour",
        image: "https://i.imgur.com/lOirCTH.jpg",
        tourType: "Aqua Advantures",
        location: "Cancun",
        price: 160,
        description: "Explore the Underwater Museum of Art on this snorkeling tour from Cancun. Jet across the Caribbean with your guide on a high-speed boat ride, and then hop in the water with your snorkel gear to see over more than 500 life-size sculptures sprawled over the seabed, as well as bright schools of fish. The museum highlights the relationship between art and environmental science, and all of the sculptures are made from materials that promote coral life. Fruit and refreshments are served on board."
    },
    {
        name: "Coco Bongo Cancun Gold Member VIP Night Out by After Dark",
        image: "https://i.imgur.com/HFjc0tk.jpg",
        tourType: "Fun activities",
        location: "Cancun",
        price: 160,
        description: "Spend the night like a celebrity with a VIP Gold Member admission ticket to Coco Bongo, Cancun’s most famous nightlife venue. Your VIP pass includes both skip-the-line and early entry, which saves you hours of waiting in line and grants you access to the club one hour before it opens to the general public. Take advantage of an open bar featuring premium spirits throughout the evening and guarantee a front-row seat for the show with early entry."
    }
]

Tour.insertMany(seedTours)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
}) 