"use client";

import { useEffect } from "react";
import { Barchart } from "./BarChart";
import {
  ArrowDownIcon,
  GreenChartIcon,
  RedChartIcon,
  ShoppingCartIcon,
  TotalIncomeIcon,
  TotalOrderIcon,
  TotalRefundIcon,
  TrendindDownIcon,
  TrendindUpIcon,
} from "./icons";
import AOS from "aos";
import "aos/dist/aos.css";

const MainBar = () => {
  //aos useEffect hook
  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 0,
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <section className="w-[95%] mx-auto mt-5">
        <div className="xl:grid gap-5 xl:grid-cols-3">
          <div
            className="bg-white col-span-2 h-[350px] rounded-lg"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-between p-6">
              <div className="text-xl font-semibold">Sales Trends</div>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-gray-500 mr-1 lg:mr-3">
                  Sort by:
                </div>
                <div className="border-1 border-gray-400 rounded-full">
                  <button className="w-full ronded-full py-1 px-2 flex justify-between items-center">
                    <h5 className="mr-3 text-gray-500">Weekly</h5>
                    <ArrowDownIcon />
                  </button>
                </div>
              </div>
            </div>
            <Barchart />
          </div>
          <div
            className="cols-span-1 mt-5 xl:mt-0 space-y-5"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
              <div className=" bg-white  rounded-lg p-3 flex flex-col">
                <div>
                  <div className="flex  justify-between items-center">
                    <div>
                      <TotalOrderIcon />
                    </div>
                    <div className="">
                      <GreenChartIcon width="80" height="50" />
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-400">Total Order</h3>
                  <p className="text-2xl font-semibold">350</p>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex text-xs items-center bg-success-100 rounded-full px-1 py-[0.20rem] text-success-600 gap-1 cursor-pointer hover:bg-success-400 hover:text-white">
                    <div>
                      <TrendindUpIcon />
                    </div>
                    <div>23.5%</div>
                  </div>
                  <div className="flex text-xs text-gray-500 gap-0">
                    <p className="mr-1">vs. </p>
                    <p>previous month</p>
                  </div>
                </div>
              </div>
              <div className=" bg-white h-[166px] rounded-lg p-3">
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <TotalRefundIcon />
                    </div>
                    <div>
                      <RedChartIcon width="80" height="50" />
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-400">Total refund</h3>
                  <p className="text-2xl font-semibold">270</p>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex text-xs items-center bg-red-200 rounded-full px-1 py-[0.20rem] text-red-600 gap-1 cursor-pointer hover:bg-red-500 hover:text-white">
                    <div>
                      <TrendindDownIcon />
                    </div>
                    <div>23.5%</div>
                  </div>
                  <div className="flex text-xs text-gray-500 gap-0">
                    <p className="mr-1">vs. </p>
                    <p>previous month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
              <div className=" bg-white  rounded-lg p-3 flex flex-col">
                <div>
                  <div className="flex  justify-between items-center">
                    <div>
                      <ShoppingCartIcon />
                    </div>
                    <div className="">
                      <RedChartIcon width="80" height="50" />
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-400">Average Sales</h3>
                  <p className="text-2xl font-semibold">1567</p>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex text-xs items-center bg-red-200 rounded-full px-1 py-[0.20rem] text-red-600 gap-1 cursor-pointer hover:bg-red-500 hover:text-white">
                    <div>
                      <TrendindDownIcon />
                    </div>
                    <div>23.5%</div>
                  </div>
                  <div className="flex text-xs text-gray-500 gap-0">
                    <p className="mr-1">vs. </p>
                    <p>previous month</p>
                  </div>
                </div>
              </div>
              <div className=" bg-white h-[166px] rounded-lg p-3">
                <div>
                  <div className="flex justify-between items-center">
                    <div>
                      <TotalIncomeIcon />
                    </div>
                    <div>
                      <GreenChartIcon width="80" height="50" />
                    </div>
                  </div>
                  <h3 className="text-xl text-gray-400">Total Income</h3>
                  <p className="text-2xl font-semibold">$350.000</p>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex text-xs items-center bg-success-100 rounded-full px-1 py-[0.20rem] text-success-600 gap-1 cursor-pointer hover:bg-success-400 hover:text-white">
                    <div>
                      <TrendindUpIcon />
                    </div>
                    <div>23.5%</div>
                  </div>
                  <div className="flex text-xs text-gray-500 gap-0">
                    <p className="mr-1">vs. </p>
                    <p>previous month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBar;
