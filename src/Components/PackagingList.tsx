interface Props {
  item: string;
  isPacked: boolean;
}

const theme = {
  style: {
    textAlign: "left",
    color: "brown",
    fontSize: "30px",
  },
};

// const arr=[1,2,3,4,5,6,7,8,9]
const arrayOfNumber: any = [1, 2, 3, 4, "saif ur rahman", "md rafeeq"];

const PackagingList: React.FC<Props> = ({ item, isPacked }) => {
  return (
    <div style={theme.style}>
      <li>
        {item} {isPacked ? "is packed" : "need to pack"}
      </li>

      {arrayOfNumber.length > 0 ? (
        arrayOfNumber.map((value: any, index: number) => {
          return <li key={index}> {value} </li>;
        })
      ) : (
        <p>Array dont have enough items to be renderd</p>
      )}
    </div>
  );
};

export default PackagingList;
