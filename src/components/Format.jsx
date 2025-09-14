import React from "react";
import { Clock, MapPin } from "lucide-react";
import imgFormat from "../imgs/Format1.png";

const Format = () => {
  return (
    <section
      id="format"
      className="relative w-full py-16 px-8 md:px-20 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Content - Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Side with blurred background and white text */}
          <div className="space-y-6 bg-black/30 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Event Format
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              This Qiskit Fall Fest is a hybrid event. The online part includes
              lectures and an introductory workshop on quantum computing:
              "QBronze", provided by the QAlgeria and CQTech teams. The on-site
              part includes workshops and challenges, and will take place at the
              University of Saad Dahleb, Blida, Algeria.
            </p>

            {/* Date */}
            <div className="flex items-center space-x-3">
              <Clock className="text-orange-400 w-6 h-6" />
              <span className="text-white font-medium">
                1 to 15 November, 2025
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3">
              <MapPin className="text-orange-400 w-6 h-6" />
              <span className="text-white font-medium">
                University of Blida 1, Auditorium A
              </span>
            </div>
          </div>

          {/* Right Side - Image positioned closer to middle */}
          <div className="flex justify-center">
            <img
              src={imgFormat}
              alt="Event Format"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Full Width Schedule Section */}
        <div className="text-white rounded-2xl p-8 shadow-xl border border-white/10">
          <h3 className="text-3xl font-bold text-center mb-10 text-white">
            Onsite Agenda
          </h3>

          {/* Timeline Schedule */}
          <div className="space-y-4">
            {/* Schedule Item 1 */}
            <div className="flex items-start">
              <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg min-w-[110px] text-center mr-6 flex-shrink-0">
                08:30 AM
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex-1 backdrop-blur-sm border-l-4 border-orange-400">
                <h4 className="font-bold text-lg text-white mb-1">
                  Check-in & Welcome
                </h4>
                <p className="text-white/80">description</p>
              </div>
            </div>

            {/* Schedule Item 2 */}
            <div className="flex items-start">
              <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg min-w-[110px] text-center mr-6 flex-shrink-0">
                09:00 AM
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex-1 backdrop-blur-sm border-l-4 border-orange-400">
                <h4 className="font-bold text-lg text-white mb-1">
                  Opening Ceremony
                </h4>
                <p className="text-white/80">descriptin</p>
              </div>
            </div>

            {/* Schedule Item 3 */}
            <div className="flex items-start">
              <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg min-w-[110px] text-center mr-6 flex-shrink-0">
                09:30 AM
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex-1 backdrop-blur-sm border-l-4 border-orange-400">
                <h4 className="font-bold text-lg text-white mb-1">
                  first workshop
                </h4>
                <p className="text-white/80">descriptin</p>
              </div>
            </div>

            {/* Schedule Item 4 */}
            <div className="flex items-start">
              <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg min-w-[110px] text-center mr-6 flex-shrink-0">
                11:00 AM
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex-1 backdrop-blur-sm border-l-4 border-orange-400">
                <h4 className="font-bold text-lg text-white mb-1">
                  first challenge
                </h4>
                <p className="text-white/80">descriptin</p>
              </div>
            </div>

            {/* Schedule Item 5 */}
            <div className="flex items-start">
              <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg min-w-[110px] text-center mr-6 flex-shrink-0">
                12:30 PM
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex-1 backdrop-blur-sm border-l-4 border-orange-400">
                <h4 className="font-bold text-lg text-white mb-1">
                  lunch break
                </h4>
                <p className="text-white/80">descriptin</p>
              </div>
            </div>

            {/* Schedule Item 6 */}
            <div className="flex items-start">
              <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg min-w-[110px] text-center mr-6 flex-shrink-0">
                01:00 PM
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex-1 backdrop-blur-sm border-l-4 border-orange-400">
                <h4 className="font-bold text-lg text-white mb-1">
                  second workshop
                </h4>
                <p className="text-white/80">descriptin</p>
              </div>
            </div>

            {/* Schedule Item 7 */}
            <div className="flex items-start">
              <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg min-w-[110px] text-center mr-6 flex-shrink-0">
                02:30 PM
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex-1 backdrop-blur-sm border-l-4 border-orange-400">
                <h4 className="font-bold text-lg text-white mb-1">
                  second challenge
                </h4>
                <p className="text-white/80">descriptin</p>
              </div>
            </div>

            {/* Schedule Item 8 */}
            <div className="flex items-start">
              <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg min-w-[110px] text-center mr-6 flex-shrink-0">
                04:15 PM
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex-1 backdrop-blur-sm border-l-4 border-orange-400">
                <h4 className="font-bold text-lg text-white mb-1">
                  closing Ceremony
                </h4>
                <p className="text-white/80">descriptin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Format;
