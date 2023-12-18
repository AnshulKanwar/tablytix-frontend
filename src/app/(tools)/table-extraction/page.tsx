"use client";

import Button from "@/components/ui/button";
import { FileUp } from "lucide-react";
import { FormEvent, useState } from "react";
import { truncate } from "lodash";
import axios from "axios";

export default function TableExtraction() {
  return <Tool title="Table Extraction" onSubmitUrl="/api/table-extraction" />;
}

interface ToolProps {
  title: string;
  onSubmitUrl: string;
}

function Tool({ title, onSubmitUrl }: ToolProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [slug, setSlug] = useState<[any] | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        onSubmitUrl,
        {
          file: selectedFile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setIsLoading(false);
      console.log(response.data);
      setSlug(response.data);
    } catch (error) {
      setError("Uh oh! an error occured. Please try again");
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <main className="grid place-items-center">
      <h1 className="text-3xl font-bold mb-10">{title}</h1>
      {!slug ? (
        <div className="flex flex-col items-center gap-8 min-w-fit max-w-md w-full border-2 border-zinc-800 text-center py-10 px-5 rounded-xl">
          <h1 className="text-xl font-semibold">Upload file</h1>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
            <div className="flex justify-between items-center gap-10">
              <label
                htmlFor="file"
                className="cursor-pointer px-5 py-2 w-full max-w-xs mx-auto text-sm rounded-lg bg-zinc-100 dark:bg-zinc-800 border-2 border-dashed border-zinc-800"
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
            {error && <div className="text-rose-500">{error}</div>}
            <Button className="font-semibold">
              {!isLoading ? (
                <input type="submit" value="Go" />
              ) : (
                <span>Processing...</span>
              )}
            </Button>
          </form>
        </div>
      ) : (
        <div className="space-y-5 ">
          <Button className="font-bold" onClick={() => setSlug(null)}>
            Upload another image
          </Button>
          <div className="flex flex-col">
            {slug.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
