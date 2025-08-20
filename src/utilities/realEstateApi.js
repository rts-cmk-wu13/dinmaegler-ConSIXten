export async function getHomes() {
    const response = await fetch('https://dinmaegler.onrender.com/Homes');
    if (!response.ok) {
        throw new Error('Failed to fetch homes');
    }
    return response.json();
}

export async function getHome(id) {
    const response = await fetch(`https://dinmaegler.onrender.com/Homes/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch home details');
    }
    return response.json();
}