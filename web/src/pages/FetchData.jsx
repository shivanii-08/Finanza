import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADDTOCART } from '../Action';
export default function FetchData() {
    const [data, setdata] = useState([]);
    const navigate=useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            fetch("https://dummyjson.com/products").then((res) => {
                return res.json();
            }).then((data) => {
                setdata(data.products);
                console.log(data)
            })
        } catch (error) {
            console.log(error)
        }
    }, [data])
    //..........................
    const viewPage=(images,id,name,title,description,price,brand,category,rating)=>{
        navigate("/product",{
            state:{
                img:images,
                id:id,
                name:name,
                title:title,
                desc:description,
                price:price,
                brand:brand,
                category:category,
                rating:rating
            }
        })
    }
    return (
        <>
             <div className='container py-2 px-2' style={{ marginTop: "15%" }}>
                <div className='row'>
                    {data?.map((item) => (
                        <div className="col-lg-4 border">
                            <img src={item.images[0]} style={{ height: "300px", width: "100%" }}></img>
                            <h5><b>ID:</b>{item.id}</h5>
                            <h3><b>Name</b>{item.name}</h3>
                            <p><b>Title:</b> {item.title}</p>
                            <p><b>Description:</b>{item.description}</p>
                            <h5><b>Price:</b>{item.price}$</h5>
                            <h6><b>Brand:</b>{item.brand}</h6>
                            <p><b>Category:</b>{item.category}</p>
                            <h6><b>Rating:</b>{item.rating}</h6>
                            <button className='btn btn-primary' onClick={()=>dispatch
                                (ADDTOCART({
                                    image:item.images[0],
                                    id:item.id,
                                    name:item.name,
                                    title:item.title,
                                    description:item.description,
                                    price: item.price
                                }))}>Add To cart</button>
                            <button className='btn btn-primary mx-2' onClick={()=>viewPage
                            (item.images[0],item.id,item.name,item.title,item.description,
                            item.price,item.brand,item.category,item.rating)}>View now</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
