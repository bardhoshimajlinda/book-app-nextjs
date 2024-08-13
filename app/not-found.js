import catSvg from "@/assets/404error.svg";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="not-found">
        <Image className="page-not-found" src={catSvg} alt="Page not found"  width={500} height={500}/>
      </div>
  )
}

export default NotFoundPage
