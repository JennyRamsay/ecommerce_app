
const Item = ({ product }) => {

  if (!product){
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>Anyone there?</h1>
    </>
  )
};

export default Item;