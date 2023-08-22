import { useFetchGifs } from "../hooks/useFetchGifs";
import GufGrisItem from "./GufGrisItem";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);
  //   useEffect(() => {
  //     //getGifs(category).then( images => setImages(images))//Forma 1
  //     getGifs(category).then( setImages )//Forma 2
  //   }, [category]);

  const {data:images, loading} = useFetchGifs(category);//Ponemos ":" en la desustructuracion para asignarle un nombre personalizado

  
  return (
    <>
      <h4>{category}</h4>

    {loading && <p className="animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GufGrisItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
