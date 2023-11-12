export const getUsers = async (): Promise<any> => {
    try {
        const response: Response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch users ${error}`, error);
        throw error;
    }
};
