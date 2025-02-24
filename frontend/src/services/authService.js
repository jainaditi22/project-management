// Simulate API calls for authentication
export const login = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe', email });
      }, 1000);
    });
  };
  
  export const logout = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  };