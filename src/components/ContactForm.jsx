import React from "react";
import { useForm } from "react-hook-form";
import { styles } from "../styles/styles";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(
      "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время."
    );
  };

  const niche = watch("niche");
  const delivery = watch("delivery");
  const purchaseVolume = watch("purchaseVolume");

  const isFilled = (val) => val && val !== "";

  return (
    <div className="bg-[url('src/assets/image/ContactFormBg.png')] bg-cover bg-no-repeat pt-[60px] pb-[140px] mt-[100px]">
      <h1
        className={`${styles.h2Title} text-white text-center w-[921px] mx-auto`}
      >
        Получите индивидуальное коммерческое предложение для вашего бизнеса
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.container} mt-[40px] flex bg-[#F4F7FB] rounded-[20px] p-[40px] gap-[40px]`}
      >
        <div className="flex w-[510px] gap-[10px]">
          <div className="flex flex-col justify-center items-center gap-[44px]">
            <span
              className={`w-[48px] h-[48px] rounded-full flex items-center justify-center text-[24px] font-[600] border ${
                isFilled(niche)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-[#DDE1E6] border-[#DDE1E6]"
              }`}
            >
              1
            </span>
            <span
              className={`w-[48px] h-[48px] rounded-full flex items-center justify-center text-[24px] font-[600] border ${
                isFilled(delivery)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-[#DDE1E6] border-[#DDE1E6]"
              }`}
            >
              2
            </span>
            <span
              className={`w-[48px] h-[48px] rounded-full flex items-center justify-center text-[24px] font-[600] border ${
                isFilled(purchaseVolume)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-[#DDE1E6] border-[#DDE1E6]"
              }`}
            >
              3
            </span>
          </div>

          <div className="flex flex-col gap-[20px] w-full">
            <label className={styles.form.label}>Ваша ниша</label>
            <select
              className={styles.form.background}
              {...register("niche", { required: "Выберите нишу" })}
            >
              <option value="">Выберите</option>
              <option value="optovik">Оптовик</option>
              <option value="roznichnyj">Розничный</option>
            </select>
            {errors.niche && (
              <p className={`${styles.error}`}>{errors.niche.message}</p>
            )}

            <label className={styles.form.label}>Способ получения</label>
            <select
              className={styles.form.background}
              {...register("delivery", {
                required: "Выберите способ получения",
              })}
            >
              <option value="">Выберите</option>
              <option value="msk">Доставка по МСК или МО</option>
              <option value="samosyvoz">Самовывоз</option>
            </select>
            {errors.delivery && (
              <p className={`${styles.error}`}>{errors.delivery.message}</p>
            )}

            <label className={styles.form.label}>Ваши объемы закупки</label>
            <select
              className={styles.form.background}
              {...register("purchaseVolume", {
                required: "Укажите объем закупки",
              })}
            >
              <option value="">Выберите</option>
              <option value="10000-25000">от 10 000 ₽ до 25 000 ₽</option>
              <option value="25000-50000">от 25 000 ₽ до 50 000 ₽</option>
              <option value="50000+">более 50 000 ₽</option>
            </select>
            {errors.purchaseVolume && (
              <p className={`${styles.error}`}>
                {errors.purchaseVolume.message}
              </p>
            )}
          </div>
        </div>

        <div className="w-[510px] flex flex-col gap-[20px]">
          <input
            className={styles.form.background}
            {...register("name", { required: "Введите имя и фамилию" })}
            placeholder="Имя и Фамилия"
          />
          {errors.name && (
            <p className={`${styles.error}`}>{errors.name.message}</p>
          )}

          <input
            className={styles.form.background}
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Некорректный email",
              },
            })}
            placeholder="Email"
          />
          {errors.email && (
            <p className={`${styles.error}`}>{errors.email.message}</p>
          )}

          <input
            className={styles.form.background}
            {...register("phone", { required: "Введите номер телефона" })}
            placeholder="Номер телефона"
          />
          {errors.phone && (
            <p className={`${styles.error}`}>{errors.phone.message}</p>
          )}

          <label className="flex gap-2 items-center text-sm text-gray-600">
            <input
              type="checkbox"
              {...register("agreement", { required: "Вы должны согласиться" })}
            />
            Подтверждаю своё согласие на обработку и хранение моих персональных
            данных
          </label>
          {errors.agreement && (
            <p className={`${styles.error}`}>{errors.agreement.message}</p>
          )}

          <button className={styles.buttonPrimary} type="submit">
            Получить
          </button>
        </div>
      </form>
    </div>
  );
}
