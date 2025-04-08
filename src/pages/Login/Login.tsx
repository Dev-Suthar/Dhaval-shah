import { useState } from "react";
import pageBg from "../../assets/images/pageBg.png";
import companyLogo from "../../assets/images/companyLogo.png";
import Button from "components/Button";
import CustomTextInput from "components/CustomTextInput";
import { FiCheck, FiEye, FiEyeOff, FiMail } from "react-icons/fi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (val) => {
    if (!val.trim()) return "Email is required";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val))
      return "Please enter a valid email";
    return "";
  };

  const validatePassword = (val) => {
    if (!val.trim()) return "Password is required";
    if (val.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) {
      if (emailError) toast.error(emailError);
      if (passwordError) toast.error(passwordError);

      // Clear inputs after showing error
      setEmail("");
      setPassword("");
      return;
    }

    toast.success("Logging in...");
    navigate("/home");
    console.log("Login submitted", { email, password });

    // Proceed with API call here
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div
      className="h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${pageBg})`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div
        className="relative z-10 w-full max-w-[60%] md:max-w-[480px] p-10 bg-white rounded-[10px] shadow-[0px_4px_8px_0px_rgba(41,41,41,0.08)]"
        style={{ opacity: "1", backgroundColor: "white", padding: "40px" }}
      >
        <div className="text-center mb-8">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="
      mx-auto 
      object-contain 
      w-[clamp(120px,30vw,223px)] 
      h-[clamp(48px,12vw,89px)]
    "
          />
          <h2
            className="text-[#292929] mt-4"
            style={{
              fontFamily: "Unbounded-Medium",
              fontSize: "clamp(20px, 3vw, 24px)",
              lineHeight: "clamp(28px, 4vw, 32px)",
            }}
          >
            Login
          </h2>
        </div>

        <form className="space-y-6 px-5" onSubmit={handleSubmit}>
          <CustomTextInput
            label="Email"
            value={email}
            onChange={(val) => {
              setEmail(val);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
            errorMessage={errors.email}
            showIcon={true}
            placeholder={"Enter Email-address"}
            isMandatory={true}
            icon={
              email && !errors.email && validateEmail(email) === "" ? (
                <IoCheckmarkDoneCircle
                  size={20}
                  color="#7EE2B8"
                  title="Valid email"
                />
              ) : (
                <FiMail size={20} color="gray" />
              )
            }
            inputStyle={
              email && !errors.email && validateEmail(email) === ""
                ? { borderColor: "#7EE2B8" }
                : {}
            }
          />

          <CustomTextInput
            label="Password"
            value={password}
            onChange={(val) => {
              setPassword(val);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
            errorMessage={errors.password}
            icon={
              showPassword ? (
                <FiEyeOff size={20} color="gray" title="Hide password" />
              ) : (
                <FiEye size={20} color="gray" title="Show password" />
              )
            }
            onIconClick={togglePasswordVisibility}
            secureTextEntry={!showPassword}
            placeholder="Enter password"
            isMandatory={true}
            showIcon={true}
          />

          <div className="flex justify-between text-sm">
            <Link
              to="/forgotPassword"
              className="text-[#414141] text-[12px] leading-[16px] font-normal align-middle hover:text-[#951B81]"
              style={{ fontFamily: "WorkSans-Regular" }}
            >
              Forgot your password?
            </Link>
          </div>

          <Button
            title="Login"
            onPress={() => handleSubmit}
            disabled={!email || !password || errors.email || errors.password}
            btnStyle="mt-[20px]"
          />
          <div
            className="flex items-center justify-center text-sm"
            style={{
              paddingTop: "20px",
              textAlign: "center",
            }}
          >
            <Link
              to="/registration"
              className="text-[#414141] text-[12px] leading-[16px] font-normal hover:text-[#951B81]"
              style={{
                fontFamily: "WorkSans-Regular",
                alignSelf: "center",
              }}
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
