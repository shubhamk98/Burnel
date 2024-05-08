import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import TopBar from "../Components/TopBar";
import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/login-success");
  };

  const firstName = watch("firstName");
  const email = watch("email");

  return (
    <div className="font-manRope">
      <TopBar />
      <div className="items-center flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center w-[588px] mt-10">
          <p className="font-grace text-green text-[30px] text-center">
            Registration Form
          </p>
          <p className=" font-semibold text-darkGrey text-[50px] leading-[120%] text-center">
            Start your success Journey here!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="font-manRope flex flex-col gap-10 justify-center items-center mt-10 w-[417px]"
        >
          <div className="flex flex-col gap-5 w-full text-[18px]">
            <input
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name should be at least 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "First name should not exceed 20 characters",
                },
              })}
              type="text"
              placeholder="Enter your name"
              className={`w-full h-[75px] bg-whiteshGray rounded-full pl-8 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <div className="flex flex-row gap-2 items-center">
                <MdError color="red" />
                <p className="text-red-500 font-medium">
                  {errors.firstName.message}
                </p>
              </div>
            )}
            <input
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="text"
              placeholder="Enter your email"
              className={`w-full pl-8 h-[75px] bg-whiteshGray rounded-full ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <div className="flex flex-row gap-2 items-center">
                <MdError color="red" />
                <p className="text-red-500 font-medium">
                  {errors.email.message}
                </p>
              </div>
            )}
          </div>

          <Button
            disabled={!firstName || !email || Object.keys(errors).length > 0}
            className={`${
              !firstName || !email || Object.keys(errors).length > 0
                ? "bg-textLight text-white w-full"
                : "bg-darkGrey text-white w-full"
            } text-white w-full`}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
