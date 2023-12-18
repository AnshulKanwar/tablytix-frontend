"use client";

import { UploadButton } from "@uploadthing/react";
import Chat from "./chat";
import { useState } from "react";
import Image from "next/image";

export default function Ai() {
  const [url, setUrl] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2">
      <div className="flex gap-10 flex-col">
        {url && <Image src={url} width={500} height={500} alt="" />}
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setUrl(res[0].url);
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
      <Chat url={url!} />
    </div>
  );
}
