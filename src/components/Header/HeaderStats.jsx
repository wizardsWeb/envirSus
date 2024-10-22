import React from "react";
import CardStats from "../Cards/CardStats";

const HeaderStats = () => {
  return (
    <>
      {/* Header */}
      <div className="bg-gray-200 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="ATTENDEES"
                  statTitle="1,200"
                  statArrow="up"
                  statPercent="5.4"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last event"
                  statIconName="fas fa-users"
                  statIconColor="bg-green-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="CARBON OFFSET"
                  statTitle="45 tons"
                  statArrow="up"
                  statPercent="8.2"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Compared to last year"
                  statIconName="fas fa-leaf"
                  statIconColor="bg-teal-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SPONSORS"
                  statTitle="35"
                  statArrow="up"
                  statPercent="2.8"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last quarter"
                  statIconName="fas fa-handshake"
                  statIconColor="bg-yellow-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="RECYCLING RATE"
                  statTitle="78%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-recycle"
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderStats;
