export const getAuthHeader = () => {
  try {
    const token = localStorage.getItem("jwt_token");
    if (!token) {
      console.warn("⚠️ No JWT token found in localStorage");
      return {};
    }
    return { Authorization: `Bearer ${token}` };
  } catch (err) {
    console.error("❌ Failed to read token:", err);
    return {};
  }
};
