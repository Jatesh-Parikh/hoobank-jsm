import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row gap-1`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-50">
            Get
          </span>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23px] ml-1">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-50">
          Started
        </span>
      </p>
    </div>
  </div>
);

export default GetStarted;
