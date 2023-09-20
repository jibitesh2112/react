
import NewChat from "./NewChat";
function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                {/*new chat*/}
                <NewChat />
                <div>
                   {/*model selection*/}
                </div>
                {/* map through here chatrow*/}
            </div>

        </div>
    </div>
  );
}

export default SideBar