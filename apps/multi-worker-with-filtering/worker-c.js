export default {
    fetch() {
        const str = 'hello world from worker-c';

        console.log('- ' + str);

        debugger;

        return new Response(str);
    }
}