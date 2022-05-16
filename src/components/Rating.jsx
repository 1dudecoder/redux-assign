import React, { useEffect, useState } from "react";
import emptystar from "../icons/emptystar.svg";
import fullstar from "../icons/fullstar.svg";
import { useDispatch, useSelector } from "react-redux";
import { setproducts } from "../action/Action";
import { Link } from "react-router-dom";


function Rating() {
  const dispatch = useDispatch();
  const ratingstate = useSelector((state) => state.allproducts.products);
  const [ratingitem, setRatingItem] = useState();
  const [error,setError] = useState(false);

  console.log(ratingstate, "this is the rating");
  const [inputtext, setinputText] = useState("");
  const [starstate, setStarstate] = useState([
    {
      id: 1,
      star: emptystar,
    },
    {
      id: 2,
      star: emptystar,
    },
    {
      id: 3,
      star: emptystar,
    },
    {
      id: 4,
      star: emptystar,
    },
    {
      id: 5,
      star: emptystar,
    },
  ]);

  function handlestarimg(id) {
    let data = starstate.map((item) => {
      if (item.id <= id) {
        return {
          id: item.id,
          star: fullstar,
        };
      } else {
        return {
          id: item.id,
          star: emptystar,
        };
      }
    });
    setStarstate(data);
  }

  function handleSubmit() {
    let checkstar = starstate.filter((item) => {
      if (item.star === fullstar) {
        return true;
      }
    });

    if (inputtext.length === 0 || checkstar.length === 0) {
      console.log("this is an error");
      setError(true)
    } else {
      console.log("submit krdo bro redux mai");

      let data = [inputtext, starstate];

      dispatch(setproducts(data));

    }
  }

  useEffect(() => {

    setRatingItem(ratingstate);
    setStarstate([
      {
        id: 1,
        star: emptystar,
      },
      {
        id: 2,
        star: emptystar,
      },
      {
        id: 3,
        star: emptystar,
      },
      {
        id: 4,
        star: emptystar,
      },
      {
        id: 5,
        star: emptystar,
      },
    ])

    setinputText("");
    setError(false)


  }, [ratingstate]);

  return (
    <>
      <div style={{display:"flex",placeContent:"space-around"}}>
        <div>
          <div>
            <h1>Product Rating</h1>
            <label>Enter Product name </label>
            <br />
            <input
              value={inputtext}
              type="text"
              onChange={(e) => {
                setinputText(e.target.value);
              }}
            />
            <br />
            <br />
            <label>Please give star review </label>
            <br />
              
          </div>
              
          <div>
            {starstate.map((item) => {
              return (
                <>
                  <div key={item.id} style={{ display: "inline" }}>
                    <img
                      onClick={() => {
                        handlestarimg(item.id);
                      }}
                      height={25}
                      width={25}
                      src={item.star}
                      alt="empty-star"
                    />
                  </div>
                </>
              );
            })}

            <br />
            <br />
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              SUBMIT
            </button>
          </div>

          {error===true ? <p style={{color:"red"}}>Please enter product name with ratings </p> : ""}
          
        </div>

        <div>
          <h1>Products</h1>

          {ratingitem
            ? ratingitem.map((item) => {
                return (
                  <>
                    <div>
                      <h4 style={{display:"inline", marginRight:"10px", placeItems:"center"}}>{item[0]}</h4>
                      {item[1].map((item) => {
                        return (
                          <>
                            <img
                              height={25}
                              width={25}
                              src={item.star}
                              alt="stars"
                            />
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })
            : ""}
        </div>



      </div>
      
      <Link to="pdf-page" >
      <center><h1 style={{marginTop:"20rem",}}>NextPage</h1></center>
      </Link>

    </>
  );
}

export default Rating;
