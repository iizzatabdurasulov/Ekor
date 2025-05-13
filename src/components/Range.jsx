import React from "react";
import { styles } from "../styles/styles";
import { range } from "../constants/data";

export default function Range() {
  return (
    <div className={`${styles.container} mt-[40px]`}>
      <div className="flex justify-between">
        <span className={`${styles.span}`}>Наш ассортимент</span>
        <h2 className={`${styles.h2Title} w-[800px] text-[#203686]`}>
          Компания предлагает более 500 наименований рыбной продукции и
          разнообразных товаров питания
        </h2>
      </div>

    
      <div className="grid grid-cols-4 gap-[20px] mt-[40px]">
        {range.slice(0, 4).map(({ id, title, description, image }) => (
          <div key={id}>
            <img src={image} alt={title} />
            <h3 className={styles.items.title}>{title}</h3>
            <p className={styles.items.description}>{description}</p>
          </div>
        ))}
      </div>

     
      <div className="grid grid-cols-2 gap-[20px] mt-[40px]">
        {range.slice(4, 6).map(({ id, title, description, image }) => (
          <div key={id}>
            <img src={image} alt={title} />
            <h3 className={styles.items.title}>{title}</h3>
            <p className={styles.items.description}>{description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-[20px] mt-[40px]">
        {range.slice(6, 8).map(({ id, title, description, image }) => (
          <div key={id}>
            <img src={image} alt={title} />
            <h3 className={styles.items.title}>{title}</h3>
            <p className={styles.items.description}>{description}</p>
          </div>
        ))}
      </div>

    
      <div className="grid grid-cols-4 gap-[20px] mt-[40px]">
        {range.slice(8, 12).map(({ id, title, description, image }) => (
          <div key={id}>
            <img src={image} alt={title} />
            <h3 className={styles.items.title}>{title}</h3>
            <p className={styles.items.description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
