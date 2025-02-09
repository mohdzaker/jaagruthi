import React from 'react';
import { Bell, Calendar, Award, ArrowRight, FileText } from 'lucide-react';

const notifications = [
  {
    date: "24-Jan-2025",
    title: "IPC & IMBA I Semester Regular Notification January-2025",
    isNew: true
  },
  {
    date: "22-Jan-2025",
    title: "MBA(General), MBA (TTM) & MCA I Semester Regular Notification January-2025"
  },
  {
    date: "22-Jan-2025",
    title: "MBA(General), MBA (TTM) & MCA I Semester Regular Notification January-2025"
  },
  {
    date: "22-Jan-2025",
    title: "MBA(General), MBA (TTM) & MCA I Semester Regular Notification January-2025"
  },
  {
    date: "16-Jan-2025",
    title: "UG Semester- I, III & V Regular Examination Revaluation & Photocopy Fee Notification January-2025"
  }
];

const timetables = [
  {
    date: "05-Feb-2025",
    title: "MBA(General) & MBA(TTM)- I Semester Regular Timetable Feb/March-2025",
    isNew: true
  },
  {
    date: "05-Feb-2025",
    title: "PG- I Semester (Regular) Examinations Time Table Feb/March -2025"
  },
  {
    date: "05-Feb-2025",
    title: "PG- I Semester (Regular) Examinations Time Table Feb/March -2025"
  },
  {
    date: "05-Feb-2025",
    title: "PG- I Semester (Regular) Examinations Time Table Feb/March -2025"
  },
  {
    date: "05-Feb-2025",
    title: "MCA- I Semester Regular Timetable Feb/March-2025"
  }
];

const AnnouncementCard = ({ title, items }) => {
    const getIcon = () => {
      switch (title) {
        case "Notifications":
          return <Bell className="w-6 h-6" />;
        case "Timetables":
          return <Calendar className="w-6 h-6" />;
        case "Results":
          return <Award className="w-6 h-6" />;
        default:
          return null;
      }
    };
  
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg">
              {getIcon()}
            </div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
          </div>
          <span className="bg-orange-400 text-white text-sm px-3 py-1 rounded-full">
            {items.length} Updates
          </span>
        </div>
  
        {/* Increased height for scrollable content */}
        <div className="divide-y divide-orange-100 max-h-[500px] overflow-y-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 hover:bg-orange-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-orange-600 font-medium bg-orange-100 px-3 py-1 rounded-full">
                  {item.date}
                </span>
                {item.isNew && (
                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full animate-pulse">
                    New
                  </span>
                )}
              </div>
              <div className="flex items-start space-x-2">
                <FileText className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 hover:text-orange-600 transition-colors duration-200">
                  {item.title}
                </p>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="text-orange-500 text-sm hover:text-orange-700 transition-colors duration-200 flex items-center space-x-1">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const MainSection = () => {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
          <AnnouncementCard title="Notifications" items={notifications} />
          <AnnouncementCard title="Timetables" items={timetables} />
        </div>
      </div>
    );
  };
  

export default MainSection;