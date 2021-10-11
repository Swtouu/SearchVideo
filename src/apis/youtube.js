import axios from "axios";

const KEY = "AIzaSyCNa0bynr1aQlPqvAbK5gJR2pB1QXHCZGQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
