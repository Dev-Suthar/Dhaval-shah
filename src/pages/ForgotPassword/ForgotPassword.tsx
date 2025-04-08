import { useState } from "react";
import pageBg from "../../assets/images/pageBg.png";
import companyLogo from "../../assets/images/companyLogo.png";
import Button from "components/Button";
import CustomTextInput from "components/CustomTextInput";
import { FiMail } from "react-icons/fi";
import { IoCheckmark } from "react-icons/io5";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (val) => {
    if (!val.trim()) return "Email is required";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val))
      return "Please enter a valid email";
    return "";
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    const emailError = validateEmail(email);
    setError(emailError);

    if (emailError) {
      toast.error(emailError);
      return;
    }

    toast.success("Reset link sent to your email!");
    console.log("Forgot password requested for:", email);

    // Call API here
  };

  const isEmailValid = email && validateEmail(email) === "";

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
            className="mx-auto object-contain w-[clamp(120px,30vw,223px)] h-[clamp(48px,12vw,89px)]"
          />
          <h2
            className="text-[#292929] mt-4"
            style={{
              fontFamily: "Unbounded-Medium",
              fontSize: "clamp(20px, 3vw, 24px)",
              lineHeight: "clamp(28px, 4vw, 32px)",
            }}
          >
            Forgot Password
          </h2>
        </div>

        <form className="space-y-6 px-5" onSubmit={handleSubmit}>
          <CustomTextInput
            label="Email"
            value={email}
            onChange={(val) => {
              setEmail(val);
              setError("");
            }}
            errorMessage={error}
            placeholder="Enter your registered email"
            showIcon={true}
            isMandatory={true}
            icon={
              isEmailValid ? (
                <div
                  className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                  title="Valid email"
                >
                  <IoCheckmark size={14} color="white" />
                </div>
              ) : (
                <FiMail size={20} color="gray" />
              )
            }
            inputStyle={isEmailValid ? { borderColor: "#7EE2B8" } : {}}
          />

          <Button
            title="Send Reset Link"
            onPress={handleSubmit}
            btnStyle="mt-[20px]"
            disabled={!email || error}
          />
        </form>
      </div>
    </div>
  );
}
