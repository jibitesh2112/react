
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2  text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
   <div className="flex space-x-2 text-center">
    <div>
      <div className="flex flex-col items-center justify-center mb-5">      
        {/* sun icon */}
        <SunIcon className="h-8 w-8" />
      <h2>examples</h2>
      </div>
      <div className="space-y-2">
        <p className="infotext">a</p>
        <p className="infotext">b</p>
        <p className="infotext">c</p>
      </div>
    </div>
    {/* t2 */}
    <div>
      <div className="flex flex-col items-center justify-center mb-5">      
        {/* sun icon */}
        <BoltIcon className="h-8 w-8" />
      <h2>Capabilities</h2>
      </div>
      <div className="space-y-2">
        <p className="infotext">a</p>
        <p className="infotext">b</p>
        <p className="infotext">c</p>
      </div>
    </div>
    {/* t3 */}
    <div>
      <div className="flex flex-col items-center justify-center mb-5">      
        {/* sun icon */}
        <ExclamationTriangleIcon className="h-8 w-8" />
      <h2>LImitations</h2>
      </div>
      <div className="space-y-2">
        <p className="infotext">a</p>
        <p className="infotext">b</p>
        <p className="infotext">c</p>
      </div>
    </div>
   </div>
    </div>
  );
}

export default HomePage