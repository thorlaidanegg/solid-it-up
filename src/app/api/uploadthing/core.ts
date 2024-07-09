import { createUploadthing, type FileRouter } from "uploadthing/next";
import {z} from "zod"

const f = createUploadthing();
 

 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
   .input(z.object({configId: z.string().optional()}))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      // This code runs on your server before upload
      return { input }
 
      // If you throw, the user will not be able to upload
 
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
   
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      const { configId } = metadata.input;
      return { configId }
 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback

    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;