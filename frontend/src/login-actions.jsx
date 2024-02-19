import axios from "axios";

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://your-frontend-domain.com');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

export const loginCall = async (credentials) => {
  try {
    const url = "http://localhost:8000/auth/login/";
    const response = await axios.post("http://localhost:8000/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      ...credentials,
    });
    if (response.status == 200) {
      console.log("Success");
    }
  } catch (err) {
    console.log("Failure");
  }
};
