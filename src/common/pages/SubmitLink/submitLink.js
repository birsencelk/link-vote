import React, { useState } from 'react';
import { Button } from '../../components/Button'
// import ToastTemplate from '../../components/ToastTemplate/index.js';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { vote, orderFunc ,deleteItem } from '../../store/actions';
import { Link } from 'react-router-dom';
import { classnames } from '../../../utils/classNames';
import Modal from 'react-bootstrap-modal'

import { VoteIconUp, DeleteIcon, VoteIconDown } from '../../components/Icon';

toast.configure();

export const ListItem = props => {

  const dispatch = useDispatch();

  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  const itemClass = classnames({
    'submit-link__body__item': true,
    'submit-link__body__item--hover': hover
  });

  const handleClose = () => setShow(false);

  const { item } = props

  return(
    <div className={itemClass} onMouseEnter={() => setHover(true)}  onMouseLeave={() => setHover(false)}>
      <div className="submit-link__body__item__left">
        <div className="submit-link__body__item__left__point">{item?.votes} Points</div>
      </div>

      <div className="submit-link__body__item__right">
        <div className="submit-link__body__name">
          {item?.link}
        </div>

        <div className="submit-link__body__url">
          ({item?.url})
        </div>

        <div className="submit-link__body__votes">
          <div className="submit-link__body__vote submit-link__body__vote--up" onClick={() =>{dispatch(vote(item,'up'))}}>
            <VoteIconUp/> Up Vote
          </div>

          <div className="submit-link__body__vote submit-link__body__vote--down" onClick={() => {dispatch(vote(item,'down'))}}>
            <VoteIconDown/>Down Vote
          </div>
        </div>
      </div>

      { hover && <div className="delete-icon" onClick={()=> setShow(true)}> <DeleteIcon/> </div>}
        <div>
           <Modal show = { show } onHide={handleClose}>
             <Modal.Header closeButton>
              <Modal.Title>Remove link</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to remove:<br/><div className="modal-body-link">{item?.link}</div></Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() =>{
                dispatch(deleteItem(item.id));

                handleClose(); 
                toast.success(`${item?.link} removed.`, {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  width:'100%'
                  });
                  }}>
                OK
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                CANCEL
              </Button>
            </Modal.Footer>
          </Modal> 
        </div>
    </div>
  )
}

export const SubmitLink = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.links);

  const [currentPage, setCurrentPage]=useState(0)

  const itemPaginationNumber = 5;
  const itemPaginationPage = Math.ceil(data.length/itemPaginationNumber);

  const paginationArray = Array.from(Array(itemPaginationPage).keys());

  return(
    <div className="page-submit-link">
      <div className="submit-link__header">
        <Link className="submit-link__header__button" to={"/add-link"}>
          <div className="submit-link__header__button__icon">+</div>
          SUBMIT A LINK
        </Link>
      </div>
      <hr/>
      <div className="submit-link__body">
        { !!data.length && <div className="submit-link__body__order-menu">
           <select name="select" id="select" onChange={() =>{dispatch(orderFunc(document.getElementById("select").value))}}>
            <option value="orderBy" defaultValue disabled>Order By</option>
            <option value="lastAdded">Last Added</option>
            <option value="mostVoted">Most Voted</option>
            <option value="lessVoted">Less Voted</option>
          </select>
        </div>}
        { data.slice(itemPaginationNumber*currentPage,(itemPaginationNumber)*(currentPage+1)).map((item,i)=>{
            return(
              <ListItem
              key={i}
              item={item &&item}>
            </ListItem>
            )
         })}

          <ul>
          { paginationArray.map((item,index) =>{
            return <li className={currentPage===index&& 'active'} onClick={() =>setCurrentPage(item)}>{item+1}</li>
          })}
          </ul>
   
          <ToastContainer />

      </div>
    </div>
  )
}