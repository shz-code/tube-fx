import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/lib";

export default function SideBar({ themeProps }) {
  const selectedCategory = "New";
  return (
    <Stack>
      {categories.map((e) => (
        <button
          className="category_btn"
          style={{ background: e.name === selectedCategory && "red" }}
          key={e.name}
        >
          <span
            style={{
              color:
                e.name === selectedCategory
                  ? `${themeProps.textColor}`
                  : `${themeProps.themeColor}`,
            }}
          >
            {e.icon}
          </span>
          <span>{e.name}</span>
        </button>
      ))}
    </Stack>
  );
}
