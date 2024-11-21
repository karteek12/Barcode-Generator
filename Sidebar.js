import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-50 p-4 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Additional Details</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-center">
          <span>Configuration</span>
          <span className="text-gray-500">F12</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Alternate Units</span>
          <span className="text-gray-500">Alt + N</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Tax Applicability</span>
          <span className="text-gray-500">Alt + T</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Standard Rates</span>
          <span className="text-gray-500">Alt + R</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
