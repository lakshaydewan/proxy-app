import Sidebar from "@/components/SideBar";
import { SignedIn, UserButton } from '@clerk/nextjs'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans bg-neutral-950`}>
        <div className="bg-neutral-900 w-full h-screen flex text-white">
        <div className='w-fit h-fit flex justify-center items-center absolute top-2 right-4'>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
            <Sidebar />
            {children}
        </div>
      </body>
    </html>
  );
}