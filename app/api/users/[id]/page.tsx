
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import React from "react";

const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "David",
    age: 20,
  },
];

export async function GET(request: any, response: any) {
  let findUser = users.find((item: any) => {
    return item.id === +response.params.id;
  });
  return NextResponse.json({
    messages: findUser ? findUser : "Khong tim thay",
  });
}

export async function DELETE(request: any, response: NextApiResponse) {
  const data = await request.json();
  return NextResponse.json({ message: "Xoa thanh cong", user: data });
}

export async function PUT(request: any, response: any) {
  const data = await request.json();
  return NextResponse.json({ message: "Sua thanh cong", user: data });
}
