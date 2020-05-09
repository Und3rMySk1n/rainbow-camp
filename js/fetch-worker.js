onmessage = async ({ data: { url, method, data } }) => {
    try {
        await fetch(url, { method, data, mode: 'no-cors' });
        postMessage({ completed: true });
    } catch {
        postMessage({ completed: false });
    }
};
