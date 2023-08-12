import './single.css';
import Sidebar from "../../components/sidebar/Sidebar" 
import SinglePost from '../../components/singlePost/Singlepost';
import Topbar from '../../components/topbar/topbar';
export default function Single() {
  return (
    <>
    <Topbar/>
    <div className='single'>
     <SinglePost/>
      <Sidebar/>
    </div>
    </>
  )
}
