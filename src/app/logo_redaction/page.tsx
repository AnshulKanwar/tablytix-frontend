"use client";

import Button from "@/components/ui/button";
import { FileUp } from "lucide-react";
import { FormEvent, useState } from "react";
import { truncate } from "lodash";
import axios from "axios";
import Image from "next/image";

export default function LogoRedaction() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false)
  const [responseURL, setResponseURL] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://34.125.78.144:80/logo_redaction",
        {
          file: selectedFile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { url } = response.data;
      setIsLoading(false);
      setResponseURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(responseURL);

  return (
    <main className="grid place-items-center">
      {!responseURL ? (
        <div className="flex flex-col items-center gap-8 min-w-fit max-w-md w-full border-2 border-slate-800 text-center py-10 px-5 rounded-xl">
          <h1 className="text-2xl font-bold">Upload file</h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
            <div className="flex justify-between items-center gap-10">
              <label
                htmlFor="file"
                className="cursor-pointer px-5 py-2 w-full max-w-xs mx-auto text-sm rounded-lg bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-800"
              >
                <span className="flex justify-center items-center gap-2 h-32">
                  {!selectedFile ? (
                    <>
                      <span>Upload</span>
                      <FileUp />
                    </>
                  ) : (
                    <span>{truncate(selectedFile.name, { length: 30 })}</span>
                  )}
                </span>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={(e) =>
                    setSelectedFile(e.target.files && e.target.files[0])
                  }
                  className="hidden"
                />
              </label>
            </div>
            <Button className="font-semibold">
              {!isLoading ? 
              <input type="submit" value="Go" /> :
              <span>Processing...</span>
              }
            </Button>
          </form>
        </div>
      ) : (
        <div className="space-y-5 ">
          <Button className="font-bold" onClick={() => setResponseURL(null)}>Upload another image</Button>
          <Image
            src={`http://34.125.78.144:80/logo_redaction/${responseURL}.png`}
            className="rounded-lg"
            alt="response"
            width={500}
            height={500}
          />
        </div>
      )}
    </main>
  );
}
