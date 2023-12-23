const ButtonPremium = () => {
  return (
    <div className="flex flex-row bg-[#489CFF] mt-0.5 px-3 py-0.5 gap-0.5 max-w-max rounded-2xl z-10 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          d="M1.99992 9.66119e-07H3.04592L1.99692 3H0.190918L1.55292 0.276001C1.59448 0.193054 1.65831 0.123308 1.73725 0.0745645C1.81619 0.0258214 1.90714 4.07946e-06 1.99992 9.66119e-07ZM0.226918 4L3.24092 8.687L1.96992 4H0.226918ZM3.00592 4L4.53592 9.645C4.56303 9.74737 4.62324 9.8379 4.70716 9.90249C4.79109 9.96708 4.89402 10.0021 4.99992 10.0021C5.10582 10.0021 5.20875 9.96708 5.29267 9.90249C5.3766 9.8379 5.4368 9.74737 5.46392 9.645L6.99792 4H3.00592ZM8.03392 4L6.75992 8.685L9.77292 4H8.03292H8.03392ZM9.80892 3H8.00592L6.95592 9.66119e-07H7.99992C8.09287 -0.000181722 8.18403 0.0255479 8.26316 0.0743014C8.3423 0.123055 8.40628 0.192902 8.44792 0.276001L9.80892 3ZM6.94692 3H3.05692L4.10492 9.66119e-07H5.89492L6.94692 3Z"
          fill="#EBF3FC"
        />
      </svg>
      <div className="text-[0.625rem]/[0.875rem] font-bold text-white flex flex-row gap-5 pl-1">
        <p>Premium</p>
      </div>
    </div>
  );
};

export default ButtonPremium;
