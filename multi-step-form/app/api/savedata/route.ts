import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    name,
    email,
    phone,
    planType,
    planDuration,
    planPrice,
    onlineService,
    largerStorage,
    customProfile,
  }: DataProps = body;

  const filePath = path.join(process.cwd(), "public", "Data.txt");

  const dataToWrite = `User Info\n Name: ${name}\n Email: ${email}\n Phone: ${phone}\n Plan Duration: ${planDuration}\n Plan Type: ${planType}\n Plan Price: ${planPrice}\n Additional Services:\n  - OnlineService: ${onlineService}\n  - Larger Storage: ${largerStorage}\n  - Customizable Profile: ${customProfile}\n Total Price: ${
    planPrice + onlineService + largerStorage + customProfile
  }\n`;

  fs.writeFile(filePath, dataToWrite, (err) => {
    if (err) {
      return new NextResponse("Error writing file!", { status: 400 });
    }

    //return new NextResponse("Data is written successfully!", { status: 200 });
  });

  return new NextResponse("Data is written successfully!", { status: 200 });
}
