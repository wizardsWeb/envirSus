import React from "react";

const Notification = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null; // Return null if the modal is closed

  return (
    <div
      id="modal"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow">
        <div className="relative">
          <div className="flex items-center justify-between p-4 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">
              Notifications
            </h3>
            <button
              onClick={toggleModal} // Close the modal when the close button is clicked
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              <li className="flex justify-between items-start bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9l6.72-6.72m0 0l6.72 6.72M3.75 9h16.5M3.75 9v9.75A2.25 2.25 0 006 21h12a2.25 2.25 0 002.25-2.25V9"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">
                    Your order #12345 has been shipped.
                  </p>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </li>

              <li className="flex justify-between items-start bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12h3m0 0h3m-3-3v6m-3-3h-3m-6-6h.01M9 6h.01M9 12h.01M9 18h.01M4 12h.01m3 0H4m0-6h.01M4 18h.01m10 6.75V18h6a2.25 2.25 0 002.25-2.25V6.75M12 12h7.5"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">
                    New message from John Doe.
                  </p>
                </div>
                <span className="text-xs text-gray-500">5 hours ago</span>
              </li>

              <li className="flex justify-between items-start bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.75a8.25 8.25 0 00-8.25 8.25v.75a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.75a8.25 8.25 0 008.25-8.25M12 12h.01m9.75 0h.01m-9.75 9.75V18h6a2.25 2.25 0 002.25-2.25V6.75"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">
                    Update: Your subscription plan has been renewed.
                  </p>
                </div>
                <span className="text-xs text-gray-500">1 day ago</span>
              </li>

              <li className="flex justify-between items-start bg-gray-50 p-3 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m0 0v.01m-6-6h.01M9 6h.01M9 12h.01M9 18h.01M4 12h.01m3 0H4m0-6h.01M4 18h.01m10 6.75V18h6a2.25 2.25 0 002.25-2.25V6.75"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">
                    Reminder: Your event starts tomorrow at 10 AM.
                  </p>
                </div>
                <span className="text-xs text-gray-500">2 days ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
