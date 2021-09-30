import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID l_Qlp27UJu1it51J7vz4kF7nRnJF2GlRpnXNGIdlqOA",
  },
});
