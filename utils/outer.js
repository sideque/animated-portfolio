import { openLink } from "./methods"

const outer = {
    title1:  `G'day, I'm`,
    title2: 'Sidhique,',
    decrypTexts: [
        'A Software Engineer',
        'A Full Stack Developer',
        'I build things for the web',
        'A Graphic Designer',
        'A Web3 Developer',
        'A Traveler',
    ],
    desciption: `A passionate and dedicated Full Stack developer in training who loves creating things for the internet. Currently building real-world projects at Brocamp, helping batchmates, and continuously learning modern web technologies to become a skilled software engineer.`,
    button: {
        label: 'Contact me!',
        onClick: () => openLink('mailto:xidhique@gmail.com?subject=Hello')
    }
}

export default outer
