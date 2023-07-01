"use client";

import Button from "@/components/ui/button";
import { FileUp } from "lucide-react";
import { FormEvent, useState } from "react";

export default function LogoRedaction() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Gooo");
  };

  return (
    <main className="mt-20 grid place-items-center">
      <div className="flex flex-col items-center gap-8 min-w-fit max-w-md w-1/2 border-2 border-slate-800 text-center py-10 px-20 rounded-xl">
        <h1 className="text-2xl font-bold">Upload file</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex justify-between items-center gap-10">
            <label
              htmlFor="file"
              className="cursor-pointer px-5 py-2 text-sm rounded-lg bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-800"
            >
              <span className="flex justify-center items-center gap-2 h-32 w-32">
                {!selectedFile ? (
                  <span>Upload</span>
                ) : (
                  <span>{selectedFile.name}</span>
                )}
                <FileUp />
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
          <Button className="w-full">
            <input type="submit" value="Go" />
          </Button>
        </form>
      </div>
    </main>
  );
}
