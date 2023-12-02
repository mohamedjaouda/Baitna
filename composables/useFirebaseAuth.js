import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();
  const token = useCookie("token");
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
        token.value = user.value.accessToken || "";
        navigateTo(`/auth/${email}`);
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
