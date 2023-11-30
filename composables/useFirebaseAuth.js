import { createUserWithEmailAndPassword } from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();

  const user = useState("user", () => null);

  const registerUser = async (email, password) => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        user.value = userCreds.user;
        console.log("created");
        return true;
      }
    } catch (error) {
      if (error) throw error;
      return false;
    }
    return false;
  };
  return {
    user,
    registerUser,
  };
}
