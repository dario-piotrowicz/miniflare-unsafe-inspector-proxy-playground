export default {
    fetch() {
        const str = 'hello world from worker-b';

        console.log('- ' + str);

        debugger;

        return new Response(str);
    }
}