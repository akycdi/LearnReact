import Card from "../Shared/Card";

function FeedBackState({ item }) {
  console.log(item);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedBackState;
