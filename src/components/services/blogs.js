import axios from "axios";

export const fetchBlogsData = async (setDatas) => {
  try {
    const response = await axios.get(`http://localhost:5000/blogs`);
    console.log(response.data);
    setDatas(response.data);
  } catch (err) {
    console.log(err);
  }
};

export const postBlogsData = async (values) => {
  try {
    await axios.post(`http://localhost:5000/blogs`, values);
  } catch (err) {
    console.log(err);
  }
};

// const result = async () =>
//   await axios
//     .get(`http://localhost:5000/blogs`)
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// result();
