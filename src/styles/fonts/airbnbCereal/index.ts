import localFont from "next/font/local";

export const airbnbCereal = localFont({
  src: [
    {
      path: "./AirbnbCereal_W_Lt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./AirbnbCereal_W_Bk.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./AirbnbCereal_W_Md.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./AirbnbCereal_W_Bd.otf",
      weight: "600",
      style: "bold",
    },
    {
      path: "./AirbnbCereal_W_XBd.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./AirbnbCereal_W_Blk.otf",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--font-airbnb-cereal"
});
