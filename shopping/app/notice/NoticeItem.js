"use client";
import Link from "next/link";
import React from "react";

const NoticeItem = ({ result }) => {
  return (
    <tbody>
      {result.map((item, i) => {
        return (
          <tr className="notice-item" key={result[i].id}>
            <td>{i + 1}</td>
            <td>
              <Link href={"/notice_detail/" + result[i]._id.toString()}>{item.title}</Link>
            </td>
            <td>{item.createdAt}</td>
            <td>
              <Link href={"/edit/" + item._id.toString()}>
                <button>수정</button>
              </Link>
            </td>
            <td>
              <button
                onClick={(e) => {
                  fetch("/api/post/delete", { method: "DELETE", body: item._id })
                    .then((r) => {
                      if (r.status == 200) {
                        return r.json();
                      }
                    })
                    .then((result) => {
                      const rowElement = e.target.closest("tr");
                      rowElement.style.opacity = 0;
                      setTimeout(() => {
                        const rowElement = e.target.closest("tr");
                        rowElement.style.display = "none";
                      }, 1000);
                    });
                }}
              >
                삭제
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default NoticeItem;