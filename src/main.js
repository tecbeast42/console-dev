
if (process.env.NODE_ENV !== 'production') {
    console.info('Dev Output Enabled');
    console.dev = ( ...args) =>
        console.info('Dev: ', ...args);
} else {
    console.dev = () => { return; };
}

export default console;
