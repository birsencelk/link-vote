import React, { useState } from 'react';
import Input from '../../components/Input'
import { Button } from '../../components/Button'
// import ToastTemplate from '../../components/ToastTemplate/index.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addLink } from '../../store/actions';
import { Link } from 'react-router-dom';
import { BackIcon } from '../../components/Icon';

toast.configure();

export const AddLink = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState('');
  const [url, setUrl] = useState('');

  const notify = () => {
    setLink('');
    setUrl('');

    if(link && url){
      if(!(/^(https?:\/\/)|(http?:\/\/)+$/.test(url))){
        toast.error(`You must enter the url format correctly`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          width:'100%'
        });
      }else {
        dispatch(addLink([
          {
            link:link,
            url:url,
            votes:0,
            id: new Date().getTime()
          }
        ]));
        
        toast.success(`${link} added.`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          width:'100%'
        });
      }
    }else {
      if(!link){
        toast.error(`You have to add link`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          width:'100%'
        });
      }
       if(!url){
        toast.error(`You have to add url`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          width:'100%'
        });
      }
    }
  };

  return(
    <div className="page-add-link">
      <Link className="add-link__back" to={'/'}> <BackIcon/> Return to List </Link>

      <div className="add-link__header">
        Add New Link
      </div>

      <div className="add-link__body">
        <Input
          id="link"
          name="Link Name:"
          className="add-link"
          placeholder="e.g. Alphabet"
          value={link}
          onChange={(e) => {
            setLink(e.target.value)
          }}
        />

        <Input
          id="url"
          name="Link URL:"
          className="link-url"
          placeholder="e.g. http://abc.xyz"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value)
          }}
        />

        <Button className="add-link__body__button" onClick={notify}>
          ADD
        </Button>

        <ToastContainer />
      </div>
    </div>
  )
}
