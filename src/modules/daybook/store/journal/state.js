export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
            picture: null
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
            picture: null
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
            picture: null
        }
    ]
})