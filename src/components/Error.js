import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err= useRouteError()
    // console.log(err)
    return ( <div className="flex items-center justify-center h-full">
            <div>
            <h1 className="font-semibold text-gray-600">OOPS!! Something went wrong</h1>
            <h2 className="text-gray-600">Come Back Later</h2>
            </div>
            </div>)
}
export default Error;