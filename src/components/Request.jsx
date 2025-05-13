import React from "react";
import { styles } from "../styles/styles";
import img1 from "../assets/image/Frame 1321317016.png";
import { useForm } from "react-hook-form";
export default function Request() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    alert(
      "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время."
    );
  };

  return (
    <div className={`${styles.container}  mt-[80px]`}>
      <div className="flex rounded-[20px] bg-white bg-[url(../assets/image/Mask group.svg)]">
        <img src={img1} alt="" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pt-[40px] flex flex-col gap-[10px] px-[40px] pb-[20px] "
        >
          <h2 className={`${styles.h2Title} text-[#203686] pb-[20px]`}>
            Оставьте заявку на сотрудничество
          </h2>

          <input
            {...register("name", { required: "Name is required" })}
            className={`${styles.form.background} !bg-[#F4F7FB]`}
            placeholder="Имя"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}

          <input
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email",
              },
            })}
            className={`${styles.form.background} !bg-[#F4F7FB]`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          <input
            placeholder="Номер телефона"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9+() -]{7,}$/,
                message: "Enter a valid phone number",
              },
            })}
            className={`${styles.form.background} !bg-[#F4F7FB]`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}

          <div className="flex gap-[11px] mb-[40px] pt-[4px]">
            <input
              type="checkbox"
              className="bg-[#203686]"
              {...register("agreement", { required: "Вы должны согласиться" })}
            />
            <label
              className="font-[500] text-[12px] leading-[16px] text-[#70798E] "
              htmlFor=""
            >
              Подтверждаю своё согласие на обработку и хранение моих
              персональных данных в соответствии с пользовательским соглашением
            </label>
          </div>

          {errors.agreement && (
            <p className={`${styles.error}`}>{errors.agreement.message}</p>
          )}

          <button type="submit" className={`${styles.buttonPrimary}`}>
            Отправить{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
