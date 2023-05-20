import "./App.css";
import PackagingList from "./Components/PackagingList";

function App() {
  return (
    <>
      <PackagingList item={"apple"} isPacked={true} />
      <PackagingList item={"water bottle"} isPacked={false} />
      <PackagingList item={"water melon"} isPacked={true} />
      <PackagingList item={"juices"} isPacked={true} />
      <PackagingList item={"bike cover"} isPacked={false} />
    </>
  );
}

export default App;
