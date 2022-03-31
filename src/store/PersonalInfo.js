
export default {
    state: {
        myName: "Alex Dordiuk",
        mySocials: [
            {socials: "Github", link: "https://github.com/AlexDordiuk/vue-test-task"},
            {socials: "LinkedIn", link: "https://www.linkedin.com/in/aleksandrdordiuk/"},
            {socials: "Telegram", link: "https://telegram.me/Drawen77/"},
        ]
    },
    getters: {
        getMyName: state => state.myName,
        getMySocials: state => state.mySocials
    }
}