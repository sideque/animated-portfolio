import { openLink } from "./methods"

const certifications = {
    heading:  `Licenses & certifications`,
    list: [
         {
            size: 1,
            title: 'DevOps on AWS Specialization',
            // platform: 'Coursera',
            platform: 'Comings soon...',
            link: '',
            // date: 'Issued Sep 2022 · No Expiration Date',
            date: 'Coming soon...',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Docker for absolute beginners',
            // platform: 'Coursera',
            platform: 'Coming soon...',
            link: '',
            // date: 'Issued Sep 2022 · No Expiration Date',
            date: 'Coming soon...',
            logo: '/assets/docker.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'AWS Cloud Technical Essentials',
            // platform: 'Coursera',
            platform: 'Coming soon...',
            link: '',
            // date: 'Issued Aug 2022 · No Expiration Date',
            date: 'Coming soon...',
            logo: '/assets/aws.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'Certified Mobile and Web App Developer',
            // platform: 'SMIT | Saylani Mass IT Training',
            platform: 'Coming soon...',
            link: '',
            // date: 'Issued Feb 2019 · No Expiration DateIssued',
            date: 'Coming soon...',
            logo: '/assets/smit.png',
            aos: 'zoom-out-right'
        },
        {
            size: 2,
            title: 'Hackathon on creating OLX App using PWA Development',
            // platform: 'SMIT | Saylani Mass IT Training',
            platform: 'Coming soon...',
            link: '',
            // date: 'Issued Jul 2018 · No Expiration Date',
            date: 'Coming soon...',
            logo: '/assets/smit.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications