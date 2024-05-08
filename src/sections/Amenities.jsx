import React from "react";

export default function Amenities() {
  return (
    <>
      <>
        {/* <link
          rel="stylesheet"
          href="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/css/main.d7f96858.css"
        /> */}
        <div className="flex flex-col justify-center items-center h-[40vh] pt-4">
          <div className="min-w-[375px] md:min-w-[700px] xl:min-w-[800px] mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]   ">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 ">
                  <span className="flex items-center text-brand-500 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      zoomAndPan="magnify"
                      viewBox="0 0 375 374.999991"
                      height="500"
                      version="1.0"
                    >
                      <defs>
                        <clipPath id="14c5198da4">
                          <path
                            d="M 49.5 37.5 L 325.5 37.5 L 325.5 337.5 L 49.5 337.5 Z M 49.5 37.5 "
                            clip-rule="nonzero"
                          />
                        </clipPath>
                      </defs>
                      <g clip-path="url(#14c5198da4)">
                        <path
                          fill="#ccab5c"
                          d="M 154.789062 262.121094 L 154.789062 282.226562 C 161.261719 283.589844 165.691406 286.316406 165.691406 289.382812 C 165.691406 293.8125 156.492188 297.21875 145.589844 297.21875 C 134.34375 297.21875 125.484375 293.8125 125.484375 289.382812 C 125.484375 286.316406 129.914062 283.589844 136.390625 282.226562 L 136.390625 254.625 C 134.683594 253.945312 132.980469 252.921875 130.9375 252.242188 C 70.285156 222.253906 49.5 264.167969 49.5 281.886719 C 49.5 316.640625 122.078125 337.425781 189.203125 337.425781 C 256.328125 337.425781 325.160156 317.320312 325.160156 299.945312 C 325.5 283.589844 237.589844 293.46875 154.789062 262.121094 M 264.167969 65.855469 C 264.167969 65.855469 253.261719 63.46875 231.457031 71.648438 C 220.550781 75.738281 200.449219 90.390625 183.070312 98.226562 C 169.78125 104.359375 155.8125 105.382812 149.335938 105.382812 L 149.335938 287.679688 C 149.335938 289.722656 147.632812 291.425781 145.589844 291.425781 C 143.542969 291.425781 141.839844 289.722656 141.839844 287.679688 L 141.839844 44.730469 C 141.5 44.046875 141.160156 43.027344 141.160156 42.34375 C 141.160156 39.960938 143.203125 37.574219 145.929688 37.574219 C 148.65625 37.574219 150.019531 39.617188 150.019531 42.34375 C 150.019531 43.367188 149.679688 44.046875 149.335938 44.730469 L 149.335938 48.820312 C 155.128906 52.566406 167.394531 58.699219 189.203125 61.425781 C 201.8125 63.128906 216.464844 61.085938 229.410156 61.085938 C 248.492188 60.746094 264.167969 65.855469 264.167969 65.855469 "
                          fill-opacity="1"
                          fill-rule="nonzero"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Earnings
                </p>
                <h4 className="text-xl font-bold text-navy-700 ">
                  $340.5
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 ">
                  <span className="flex items-center text-brand-500 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="h-6 w-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M298.39 248a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V236a12 12 0 0012 12z" />
                      <path d="M197 267a43.67 43.67 0 01-13-31v-92h-72a64.19 64.19 0 00-64 64v224a64 64 0 0064 64h144a64 64 0 0064-64V280h-92a43.61 43.61 0 01-31-13zm175-147h70.39a4 4 0 002.86-6.8l-78.4-79.72a4 4 0 00-6.85 2.81V108a12 12 0 0012 12z" />
                      <path d="M372 152a44.34 44.34 0 01-44-44V16H220a60.07 60.07 0 00-60 60v36h42.12A40.81 40.81 0 01231 124.14l109.16 111a41.11 41.11 0 0111.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Spend this month
                </p>
                <h4 className="text-xl font-bold text-navy-700 ">
                  $642.39
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 ">
                  <span className="flex items-center text-brand-500 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Sales
                </p>
                <h4 className="text-xl font-bold text-navy-700 ">
                  $574.34
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 ">
                  <span className="flex items-center text-brand-500 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Your Balance
                </p>
                <h4 className="text-xl font-bold text-navy-700 ">
                  $1,000
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 ">
                  <span className="flex items-center text-brand-500 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  New Tasks
                </p>
                <h4 className="text-xl font-bold text-navy-700 ">
                  145
                </h4>
              </div>
            </div>
            <div className="relative flex flex-grow !flex-row flex-col items-center rounded-[10px] rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] ">
              <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 ">
                  <span className="flex items-center text-brand-500 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="h-6 w-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="font-dm text-sm font-medium text-gray-600">
                  Total Projects
                </p>
                <h4 className="text-xl font-bold text-navy-700 ">
                  $2433
                </h4>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
