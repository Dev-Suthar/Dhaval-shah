import { useState } from "react";
import pageBg from "../../assets/images/pageBg.png";
import companyLogo from "../../assets/images/companyLogo.png";
import Button from "components/Button";
import CustomTextInput from "components/CustomTextInput";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoCheckmark } from "react-icons/io5";
import toast from "react-hot-toast";

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const validateEmail = (val) => {
    if (!val.trim()) return "Email is required";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val))
      return "Please enter a valid email";
    return "";
  };

  const validatePhone = (val) => {
    if (!val.trim()) return "Phone number is required";
    if (!/^[6-9]\d{9}$/.test(val)) return "Please enter a valid phone number";
    return "";
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    const newErrors = {
      firstName: !formData.firstName ? "First name is required" : "",
      lastName: !formData.lastName ? "Last name is required" : "",
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((msg) => msg !== "");
    if (hasError) {
      Object.values(newErrors).forEach((msg) => msg && toast.error(msg));
      return;
    }

    toast.success("Registration successful!");
    console.log("Submitted:", formData);

    // Proceed with API call
  };

  const isEmailValid = formData.email && validateEmail(formData.email) === "";

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
            Registration
          </h2>
        </div>

        <form className="space-y-6 px-5" onSubmit={handleSubmit}>
          <CustomTextInput
            label="First Name"
            value={formData.firstName}
            onChange={(val) => handleChange("firstName", val)}
            errorMessage={errors.firstName}
            showIcon={false}
            placeholder="Enter first name"
            isMandatory={true}
            icon={undefined}
          />

          <CustomTextInput
            label="Last Name"
            value={formData.lastName}
            onChange={(val) => handleChange("lastName", val)}
            errorMessage={errors.lastName}
            showIcon={false}
            placeholder="Enter last name"
            isMandatory={true}
            icon={undefined}
          />

          <CustomTextInput
            label="Email"
            value={formData.email}
            onChange={(val) => handleChange("email", val)}
            errorMessage={errors.email}
            placeholder="Enter email"
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

          <CustomTextInput
            label="Phone Number"
            value={formData.phone}
            onChange={(val) => handleChange("phone", val)}
            errorMessage={errors.phone}
            showIcon={true}
            placeholder="Enter phone number"
            icon={<FiPhone size={20} color="gray" />}
            isMandatory={true}
          />

          <Button
            title="Register"
            onPress={handleSubmit}
            btnStyle="mt-[20px]"
            disabled={
              Object.values(formData).some((v) => !v.trim()) ||
              Object.values(errors).some((e) => e)
            }
          />
        </form>
      </div>
    </div>
  );
}
