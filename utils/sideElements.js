import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/sideque',
        'instagram': 'https://www.instagram.com/sidhiquee/',
        'twitter': '',
        'linkedin': 'https://www.linkedin.com/in/sidhiee/',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'xidhique@gmail.com',
        onClick: () => openLink('mailto:xidhique@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements