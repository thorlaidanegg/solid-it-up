'use client'

import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { useUploadThing } from '@/lib/uploadthing';
import { cn } from '@/lib/utils';
import { FaImage } from "react-icons/fa6";
import { LuLoader2 } from "react-icons/lu";
import { useRouter } from 'next/navigation';
import { LuMousePointerClick } from "react-icons/lu";
import { useState, useTransition } from 'react';
import Dropzone, { FileRejection } from 'react-dropzone';

const Page = () => {
  const { toast } = useToast();
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const router = useRouter();

  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId;
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`);
      });
    },
    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;

    setIsDragOver(false);

    toast({
      title: `${file.file.type} type is not supported.`,
      description: "Please choose a PNG, JPG, or JPEG image instead.",
      variant: "destructive"
    });
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined });

    setIsDragOver(false);
  };

  const [isPending, startTransition] = useTransition();

  return (
    <div className="h-[100vh] flex flex-col items-start justify-center">
      <div className="text-white text-7xl mt-32 mb-10 mx-5">
        Let's get that picture first
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div
          className={cn(
            'hover:cursor-pointer hover:bg-slate-600 h-[60vh]  w-3/4 rounded-xl bg-slate-900 p-2 ring-1 ring-inset ring-gray-900/10 flex justify-center items-center flex-col',
            {
              'ring-blue-900/25 bg-blue-900/10': isDragOver,
            }
          )}
        >
          <div className='relative flex flex-col items-center justify-center w-full h-full'>
            <Dropzone
              onDropRejected={onDropRejected}
              onDropAccepted={onDropAccepted}
              accept={{
                'image/png': ['.png'],
                'image/jpeg': ['.jpeg'],
                'image/jpg': ['.jpg'],
              }}
              onDragEnter={() => setIsDragOver(true)}
              onDragLeave={() => setIsDragOver(false)}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  className='h-full w-full flex flex-col items-center justify-center'
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {isDragOver ? (
                    <LuMousePointerClick className='h-10 w-10 text-zinc-500 mb-2' />
                  ) : isUploading || isPending ? (
                    <LuLoader2 className='animate-spin h-10 w-10 text-zinc-500 mb-2' />
                  ) : (
                    <FaImage className='h-6 w-6 text-zinc-500 mb-2' />
                  )}
                  <div className='flex flex-col justify-center mb-2 text-m text-zinc-700'>
                    {isUploading ? (
                      <div className='flex flex-col items-center'>
                        <p>Uploading...</p>
                        <Progress
                          value={uploadProgress}
                          className='mt-2 w-40 h-2 bg-gray-400'
                        />
                      </div>
                    ) : isPending ? (
                      <div className='flex flex-col items-center'>
                        <p>Redirecting, please wait...</p>
                      </div>
                    ) : isDragOver ? (
                      <p>
                        <span className='font-semibold'>Drop file</span> to upload
                      </p>
                    ) : (
                      <p>
                        <span className='font-semibold'>Click to upload</span> or
                        drag and drop
                      </p>
                    )}
                  </div>

                  {isPending ? null : (
                    <p className='text-xs text-zinc-500'>PNG, JPG, JPEG</p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
