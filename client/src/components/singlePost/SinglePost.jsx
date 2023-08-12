import { useLocation } from "react-router-dom"
import "./singlePost.css"
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from "../../context/Context.jsx"

export default function Singlepost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    // console.log(location.pathname.split("/")[2]);
    const [post, setPost] = useState({});
    const PF = 'http://localhost:5000/images/';
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setupdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        }
        getPost();
    }, [path]);

    //deleting the post
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (error) { }
    }

    //update the post
    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
                username: user.username,
                title,
                description,
            });
           // window.location.reload();
           setupdateMode(false);
        } catch (error) { }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={PF + post.photo} alt="" className="singlePostImg" />
                )}
                {updateMode
                    ?
                    <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} />
                    : (
                        <h1 className="singlePostTitle">{title}
                            {post.username === user?.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setupdateMode(true)}></i>
                                    <i className="singlePostIcon fa-sharp fa-solid fa-trash" onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )}



                <div className="singlePostInfo">
                    <span className="singlePostAuthor" >Author :
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode

                    ? <textarea className="singlePostDescriptionInput" value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                    : (
                        <p className="singlePostDescription">{description} </p>
                    )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}
