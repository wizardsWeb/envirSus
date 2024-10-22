import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "./profileData/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/charts/LineChart";
import StatBox from "../../components/charts/StatBox";
import ProgressBar from "../../components/ProgressBar";

const UserProfile = () => {
  const theme = useTheme();
  const colors = {
    light: {
      primary: {
        400: '#f5f5f5',
        500: '#e0e0e0',
      },
      grey: {
        100: '#212121',
        400: '#757575',
      },
      greenAccent: {
        500: '#388e3c',
        600: '#2e7d32',
      },
    },
    dark: {
      primary: {
        400: '#424242', // Darker background for dark mode
        500: '#616161', // Slightly darker shade for borders
      },
      grey: {
        100: '#ffffff', // White text for dark mode
        400: '#bdbdbd', // Lighter grey for less emphasized text
      },
      greenAccent: {
        500: '#76ff03', // Brighter green for better visibility
        600: '#64dd17',
      },
    },
  };

  const currentColors = theme.palette.mode === 'dark' ? colors.dark : colors.light;

  return (
    <div>
      <main className="profile-page">
        <section className="relative block h-[300px]">
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-col min-w-0 break-words w-full mb-6 rounded-lg -mt-72">
              <div className="px-6 w-full">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={
                          "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-500 active:bg-blue-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
                          22
                        </span>
                        <span className="text-sm text-gray-400">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
                          10
                        </span>
                        <span className="text-sm text-gray-400">Photos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-600">
                          89
                        </span>
                        <span className="text-sm text-gray-400">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-3xl font-semibold leading-normal text-gray-700 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>{" "}
                    Los Angeles, California
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <h1 className="text-2xl font-bold">Achievements</h1>
                    <div className="flex items-center p-2 space-x-2">
                      <img
                        className="h-[2vw] shadow-lg rounded-lg"
                        src="/img/medals/gold-medal.png"
                        alt=""
                        />
                      <img
                        className="h-[2vw] shadow-lg rounded-lg"
                        src="/img/medals/silver-medal.png"
                        alt=""
                        />
                      <img
                        className="h-[2vw] shadow-lg rounded-lg"
                        src="/img/medals/bronze-medal.png"
                        alt=""
                        />
                      <img
                        className="h-[2vw] shadow-lg rounded-lg"
                        src="/img/medals/bronze-medal2.png"
                        alt=""
                        />
                      <img
                        className="h-[2vw] shadow-lg rounded-lg"
                        src="/img/medals/gold-medal2.png"
                        alt=""
                        />
                    </div>
                  </div>
                  <div className=" w-[60%] mx-auto">
                    <p className="text-xl">Participation</p>
                    <ProgressBar />
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-200 text-center">
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"
                  >
                    {/* ROW 1 */}
                    <Box
                      gridColumn="span 3"
                      backgroundColor={currentColors.primary[400]} // Use dynamic colors
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title="12,361"
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                          <EmailIcon
                            sx={{ color: currentColors.greenAccent[600], fontSize: "22px" }} // Use dynamic colors
                          />
                        }
                      />
                    </Box>
                    <Box
                      gridColumn="span 3"
                      backgroundColor={currentColors.primary[400]} // Use dynamic colors
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress="0.50"
                        increase="+21%"
                        icon={
                          <PointOfSaleIcon
                            sx={{ color: currentColors.greenAccent[600], fontSize: "22px" }} // Use dynamic colors
                          />
                        }
                      />
                    </Box>
                    <Box
                      gridColumn="span 3"
                      backgroundColor={currentColors.primary[400]} // Use dynamic colors
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title="32,441"
                        subtitle="New Clients"
                        progress="0.30"
                        increase="+5%"
                        icon={
                          <PersonAddIcon
                            sx={{ color: currentColors.greenAccent[600], fontSize: "22px" }} // Use dynamic colors
                          />
                        }
                      />
                    </Box>
                    <Box
                      gridColumn="span 3"
                      backgroundColor={currentColors.primary[400]} // Use dynamic colors
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title="1,325,134"
                        subtitle="Traffic Received"
                        progress="0.80"
                        increase="+43%"
                        icon={
                          <TrafficIcon
                            sx={{ color: currentColors.greenAccent[600], fontSize: "22px" }} // Use dynamic colors
                          />
                        }
                      />
                    </Box>

                    {/* ROW 2 */}
                    <Box
                      gridColumn="span 8"
                      gridRow="span 2"
                      backgroundColor={currentColors.primary[400]} // Use dynamic colors
                    >
                      <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight="600"
                            color={currentColors.grey[100]} // Use dynamic colors
                          >
                            Time Contributed
                          </Typography>
                          <Typography
                            variant="h4"
                            fontWeight="bold"
                            color={currentColors.greenAccent[500]} // Use dynamic colors
                          >
                            59,34
                          </Typography>
                        </Box>
                        <Box>
                          <IconButton>
                            <DownloadOutlinedIcon
                              sx={{ fontSize: "22px", color: currentColors.greenAccent[500] }} // Use dynamic colors
                            />
                          </IconButton>
                        </Box>
                      </Box>
                      <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                      </Box>
                    </Box>
                    <Box
                      gridColumn="span 4"
                      gridRow="span 2"
                      backgroundColor={currentColors.primary[400]} // Use dynamic colors
                      overflow="auto"
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${currentColors.primary[500]}`} // Use dynamic colors
                        colors={currentColors.grey[100]} // Use dynamic colors
                        p="15px"
                      >
                        <Typography color={currentColors.grey[100]} variant="h6" fontWeight="600">
                          LeaderBoard
                        </Typography>
                      </Box>
                      {mockTransactions.map((transaction, i) => (
                        <Box
                          key={`${transaction.txId}-${i}`}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          borderBottom={`4px solid ${currentColors.primary[500]}`} // Use dynamic colors
                          p="15px"
                        >
                          <Box>
                            <Typography
                              color={currentColors.greenAccent[500]} // Use dynamic colors
                              variant="h6"
                              fontWeight="600"
                            >
                              {transaction.txId}
                            </Typography>
                            <Typography color={currentColors.grey[100]}>
                              {transaction.user}
                            </Typography>
                          </Box>
                          <Box color={currentColors.grey[100]}>{transaction.date}</Box>
                          <Box
                            backgroundColor={currentColors.greenAccent[500]} // Use dynamic colors
                            p="5px 10px"
                            borderRadius="4px"
                          >
                            {transaction.cost}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
