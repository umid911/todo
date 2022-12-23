import React from 'react'

const GlobalSvgIcons = ({ id }) => {
    switch (id) {
        case 'arrow':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z" fill="#1C1B1F" />
                </svg>
            )
            break;
        case 'search':
            return (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.14 15.905L26.735 24.5L24.5 26.735L15.905 18.14C14.3 19.295 12.365 20 10.25 20C4.865 20 0.5 15.635 0.5 10.25C0.5 4.865 4.865 0.5 10.25 0.5C15.635 0.5 20 4.865 20 10.25C20 12.365 19.295 14.3 18.14 15.905ZM10.25 3.5C6.515 3.5 3.5 6.515 3.5 10.25C3.5 13.985 6.515 17 10.25 17C13.985 17 17 13.985 17 10.25C17 6.515 13.985 3.5 10.25 3.5Z" fill="#49454F" />
                </svg>
            )
            break;
        case 'close':
            return (
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM15 27C8.385 27 3 21.615 3 15C3 8.385 8.385 3 15 3C21.615 3 27 8.385 27 15C27 21.615 21.615 27 15 27ZM15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885Z" fill="#49454F" />
                </svg>
            )
            break;
        case 'edit':
            return (
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.06 0.590005L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L4.18 18H0V13.82L10.4 3.41L13.23 0.590005C14.01 -0.189995 15.28 -0.189995 16.06 0.590005ZM2 16L3.41 16.06L13.23 6.23L11.82 4.82L2 14.64V16Z" fill="#6750A4" />
                </svg>
            )
            break;
        case 'grid':
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM6 18H3C2.45 18 2 17.55 2 17V14H6V18ZM6 12H2V8H6V12ZM6 6H2V3C2 2.45 2.45 2 3 2H6V6ZM12 18H8V14H12V18ZM12 12H8V8H12V12ZM12 6H8V2H12V6ZM17 18H14V14H18V17C18 17.55 17.55 18 17 18ZM18 12H14V8H18V12ZM18 6H14V2H17C17.55 2 18 2.45 18 3V6Z" fill="#6750A4" />
                </svg>
            )
            break;
        case 'list':
            return (
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9H3C3.55 9 4 8.55 4 8V6C4 5.45 3.55 5 3 5H1C0.45 5 0 5.45 0 6V8C0 8.55 0.45 9 1 9ZM1 14H3C3.55 14 4 13.55 4 13V11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11V13C0 13.55 0.45 14 1 14ZM1 4H3C3.55 4 4 3.55 4 3V1C4 0.45 3.55 0 3 0H1C0.45 0 0 0.45 0 1V3C0 3.55 0.45 4 1 4ZM6 9H17C17.55 9 18 8.55 18 8V6C18 5.45 17.55 5 17 5H6C5.45 5 5 5.45 5 6V8C5 8.55 5.45 9 6 9ZM6 14H17C17.55 14 18 13.55 18 13V11C18 10.45 17.55 10 17 10H6C5.45 10 5 10.45 5 11V13C5 13.55 5.45 14 6 14ZM5 1V3C5 3.55 5.45 4 6 4H17C17.55 4 18 3.55 18 3V1C18 0.45 17.55 0 17 0H6C5.45 0 5 0.45 5 1Z" fill="#6750A4" />
                </svg>
            )
            break;
        case 'trash':
            return (
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="#CF1B1B" />
                </svg>
            )
            break;
        default:
            return null
    }
}

export default GlobalSvgIcons
