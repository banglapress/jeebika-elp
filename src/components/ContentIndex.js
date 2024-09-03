// src/components/ContentIndex.js

import React from "react";

const ContentIndex = ({ contents, currentContent, onContentSelect }) => {
  // Log contents and currentContent
  console.log("Contents:", contents);
  console.log("Current Content:", currentContent);

  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Course Contents</h2>
      <ul className="space-y-2">
        {contents.map((content, index) => (
          <li
            key={content.id}
            className={`p-2 cursor-pointer ${
              currentContent === index ? "bg-gray-300" : "hover:bg-gray-200"
            }`}
            onClick={() => onContentSelect(index)}
          >
            {content.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentIndex;
