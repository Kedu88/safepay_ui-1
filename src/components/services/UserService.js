import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/users';

const UserService = {
    getUsers: async () => {
        const response = await axios.get(BASE_URL);
        return response.data;
    },

    getUser: async (id) => {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    },

    createUser: async (user) => {
        const response = await axios.post(BASE_URL, user);
        return response.data;
    },

    updateUser: async (id, user) => {
        const response = await axios.put(`${BASE_URL}/${id}`, user);
        return response.data;
    },

    deleteUser: async (id) => {
        await axios.delete(`${BASE_URL}/${id}`);
    },
};

export default UserService;