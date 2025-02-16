import { BANNER_HOME } from "../../constants"


export const BannerHome = () =>{
    return (

        <div className="w-full overflow-hidden h-[100px]">
            <img src={BANNER_HOME} className="object-cover object-center"/>
         
        </div>
    )
}