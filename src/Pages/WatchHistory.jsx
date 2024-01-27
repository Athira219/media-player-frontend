import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteWatchHistory, detailedWatchHistory } from "../service/allAPI";
import Button from "react-bootstrap/Button";

function WatchHistory() {
  const [getHistory, setGetHistory] = useState([]);

  //--------list watch history-----//
  const getWatchHistory = async () => {
    const { data } = await detailedWatchHistory();
    setGetHistory(data);
    // console.log(response);
  };
  console.log("getHistory", getHistory);

  //-------delete watch history-----------//
const WatchHistoryDelete = async(id)=>{

  const response = await deleteWatchHistory(id)
  //automatically delete
  getWatchHistory()
  console.log(response);

}

  useEffect(() => {
    getWatchHistory();
  }, []);

  return (
    <div>
      <div className="container mt-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link
          to={"/home"}
          className="d-flex align-items-center"
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        >
          {" "}
          <i class="fa-solid fa-arrow-left me-2"></i> Back to Home
        </Link>
      </div>
      <div>
        <table className="table container mt-5 mb-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getHistory.length > 0 ? (
              getHistory.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.caption}</td>
                  <td>
                    <a href={item.videoLinks} target="_blank">
                      {item.videoLinks}
                    </a>
                  </td>
                  <td>{item.timestamp}</td>
                  <td>
                    <Button className="btn btn-danger " onClick={()=>WatchHistoryDelete(item?.id)}>
                      <i class="fa-solid fa-trash"
                        ></i>
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <p>Nothing to Display</p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchHistory;
