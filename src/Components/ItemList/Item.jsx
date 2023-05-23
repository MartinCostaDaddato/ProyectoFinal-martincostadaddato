
const Item = ({ id, name, price, category, img,  stock, description }) => {
    return (
      <div className="border border-neutral-800 m-5 text-neutral-800 text-center max-w-md">
        <article className="flex flex-col items-center" >
            <h2 className="text-xl md:text-3xl text-neutral-800 p-1 md:px-5 py-3" >{name}</h2>            
            <img src={img} alt={name} className="w-full mb-5 px-8"/>
            <p className="p-2"><b>Precio: ${price}</b></p>
            <p>Stock: {stock}</p>
            <button className="p-2 md:py-3 md:px-4 my-5 border border-neutral-800">Ver detalle</button>
        </article>
      </div>
    );
  };

  export default Item;