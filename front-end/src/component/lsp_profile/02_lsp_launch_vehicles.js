import React, { useState, useContext, useEffect } from "react";
import { LspDistro } from "./01_lsp_profile_page";
import {
  Form,
  Modal,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import RequestList from "./05_lsp_requests_list";
import { RocketInfo } from "../../App";

export default LspLaunchVehicles;

function LspLaunchVehicles() {
  const { userLogin, setUserLogin, availablePads, setAvailablePads } = useContext(RocketInfo);
  const [name, setName] = useState();
  const [cost, setCost] = useState();
  const [pad, setPad] = useState();
  const [status, setStatus] = useState('available');
  const [meoWeight, setMeoWeight] = useState();
  const [leoWeight, setLeoWeight] = useState();
  const [heoWeight, setHeoWeight] = useState();
  const [geoWeight, setGeoWeight] = useState();
  const [submitVehicle, setSubmitVehicle] = useState()
  const [getInfo, setGetInfo] = useState(false)
  const [launchVehicle, setLaunchVehicle] = useState([]);
  const [fetchTime, setFetchTime] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showUpdate, setShowUpdate] = useState(false);

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);


  useEffect(() => {
    fetch('http://localhost:8080/table/launch_vehicles')
      .then(res => res.json())
      .then(data => { setLaunchVehicle(data); setFetchTime(false) })
  }, [fetchTime])

 //Add a new vehicle
  const addNewVehicle = (event) => {
    let newVehicle = {
      lsp_user_id: userLogin.id,
        launch_vehicle: name,
        cost: cost,
        meo_weight: meoWeight,
        leo_weight: leoWeight,
        geo_weight: geoWeight,
        heo_weight: heoWeight,
        booked_status: status,
        launch_pad_id: availablePads.id
    }
    // console.log('newVehicle:\n',newVehicle)
    fetch("http://localhost:8080/table/launch_vehicles", {
      method: "POST",
      body: JSON.stringify(newVehicle
        
      ),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then(res => {
        if(res.status === 200) console.log('Successfully added vehicle')
        setFetchTime(true);
      })
      .catch(err => console.log('Error:\n', err))
   
  };
// let newVehicleList = launchVehicle.filter(item => item.id !== selectedVehicle.id);
//     console.log('\n', selectedVehicle.launch_vehicle)
//     let updateVehicle = selectedVehicle;
//     updateVehicle.launch_vehicle = name;
//     updateVehicle.booked_status = status;
//     setLaunchVehicle(newVehicleList);
//     console.log(newVehicleList)
//     setLaunchVehicle((items) => [...items, updateVehicle]);
    
  const handleUpdate = () => {
    console.log('name from update:\n', name)
    console.log('status from update:\n', status)
    fetch(`http://localhost:8080/table/launch_vehicles?id=${selectedVehicle.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        launch_vehicle: name,
        booked_status: status
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if(res.status === 200) console.log('Successfully updated')
        setFetchTime(true)
      })
      .catch((err) => console.log('Error:\n', err))
  
  };
 
  const handleDelete = () => {
    let newVehicleList = launchVehicle.filter(item => item.id !== selectedVehicle.id);
    setLaunchVehicle(newVehicleList);
    setSelectedVehicle([]);
    fetch('http://localhost:8080/table/launch_vehicle', {
      method: "DELETE",
      body: JSON.stringify({
        id: selectedVehicle.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => {
        setSelectedVehicle()
        if (res.status === 200) {
          console.log('Deleted.')
          setFetchTime(true)
        }
        else {
          console.log(res.status)
        }
      })
  }

  const theVehicle = submitVehicle?.filter(element => element.lsp_user_id === userLogin.id)
  const filteredVehicle = launchVehicle?.filter(element => element.lsp_user_id === userLogin.id)

  return (<>
    <Row>
      <Col className="col-3">
        <Card className="payloadProfileCard">
          <Card.Title>
            Launch Vehicle
            <Button  className="addPayload" onClick={handleShow}> Add Launch Vehicle</Button>
          </Card.Title>
          {filteredVehicle?.map((vehicle, j) => {
            return (<Card.Body key={j}>
              <Card.Text>
                Serial ID: {vehicle.id}
                <br></br>
                Rocket: {vehicle.launch_vehicle}
                <br></br>
                Status: {vehicle.booked_status}
                <br></br>
                <Button className="addPayload" onClick={() => {setSelectedVehicle(vehicle);   handleShowUpdate();
                setName(vehicle.launch_vehicle);
                  console.log('selectedVehicle:\n',selectedVehicle)}}>
                    Edit</Button>
                    <Button  className="addPayload" onClick={() => {setSelectedVehicle(vehicle); handleShowDelete();}}>
                      Delete</Button>
              </Card.Text>
            </Card.Body>)
          })}
        </Card>
      </Col>
      <Col>
      </Col>
      <Col>
        <RequestList />
      </Col>
    </Row>
   

    <Modal show={show} onHide={() => handleClose} className="modalBg">
      <Modal.Header closeButton className="modalForm" onClick={handleClose} > Add Vehicle</Modal.Header>
      <Modal.Body className="modalForm">
        <Form onSubmit={(event) => {
          event.preventDefault();
          addNewVehicle()
          setSubmitVehicle()
        }}>
          <Form.Group
            onChange={(e) => setName(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail">
            <Form.Label>Launch Vehicle</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
          <Form.Group
            onChange={(e) => setCost(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail">
            <Form.Label>Cost in Million USD</Form.Label>
            <Form.Control type="text" placeholder="cost" />
          </Form.Group>
          <Form.Group onChange={(e) => setPad(e.target.value)}
            className="mb-3"
            controlId="formDropDown">
            <Form.Label>Launch Pad</Form.Label>
            <Form.Select>
              {availablePads?.map((element, i) => <option key={`option: ${i}`}> {element.launch_pad} </option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group onChange={(e) => setStatus(e.target.value)}
            className="mb-3"
            controlId="formDropDown">
            <Form.Label>Status</Form.Label>
            <Form.Select >
              <option value={status}> Available </option>
            </Form.Select>
          </Form.Group>
          <Form.Group onChange={(e) => setMeoWeight(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail">
            <Form.Label>MEO Weight in tons</Form.Label>
            <Form.Control type="text" placeholder="Meo Weight" />
          </Form.Group>
          <Form.Group onChange={(e) => setLeoWeight(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail">
            <Form.Label>LEO Weight in tons</Form.Label>
            <Form.Control type="text" placeholder="Leo Weight" />
          </Form.Group>
          <Form.Group onChange={(e) => setGeoWeight(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail">
            <Form.Label>GEO Weight in tons</Form.Label>
            <Form.Control type="text" placeholder="Geo Weight" />
          </Form.Group>
          <Form.Group onChange={(e) => setHeoWeight(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail">
            <Form.Label>HEO Weight in tons</Form.Label>
            <Form.Control type="text" placeholder="Heo Weight" />
          </Form.Group>
          <Button 
           onClick={handleClose}
           className="addPayload" 
          variant="primary"
            type="submit"
          >Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>


    <Modal show={showUpdate} onHide={handleCloseUpdate} className="modalBg">
        <Modal.Header closeButton className="modalForm">
          <Modal.Title>Update Pad</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalForm">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
              setSubmitVehicle();
            }}
          >
            <Form.Group
              onChange={(e) => setName(e.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Launch Vehicle Name</Form.Label>
              <Form.Control
                 defaultValue={selectedVehicle?.launch_vehicle}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail"
            >
              <Form.Label>Launch Vehicle Status</Form.Label>
              <Form.Select onChange={(event) =>
                setStatus(event.target.value)} defaultValue={selectedVehicle?.status}>
                <option value={"available"}>Available</option>
                <option value={"booked"}>Booked</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              onChange={(e) => setCost(e.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Launch Vehicle Cost</Form.Label>
              <Form.Control
                defaultValue={selectedVehicle?.cost}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group
              onChange={(e) => setMeoWeight(e.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Meo weight in tons</Form.Label>
              <Form.Control
                defaultValue={selectedVehicle?.geo_weight}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group
              onChange={(e) => setLeoWeight(e.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Leo weight in tons</Form.Label>
              <Form.Control
                defaultValue={selectedVehicle?.leo_weight}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group
              onChange={(e) => setGeoWeight(e.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Geo weight in tons </Form.Label>
              <Form.Control
                defaultValue={selectedVehicle?.geo_weight}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group
              onChange={(e) => setHeoWeight(e.target.value)}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Heo weight in tons</Form.Label>
              <Form.Control
                defaultValue={selectedVehicle?.heo_weight}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Button
              onClick={() => handleCloseUpdate()}
              className="addPayload"
              variant="primary"
              type="submit"
            >
              Update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalForm">
          <Button
            className="addPayload"
            variant="outline-primary"
            onClick={() => handleCloseUpdate()}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

    <Modal show={showDelete} onHide={handleCloseDelete} className="modalBg">
      <Modal.Header closeButton className="modalForm">
        <Modal.Title>DELETE Vehicle?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Label>Are you sure you want to delete: {selectedVehicle?.launch_vehicle} </Form.Label>

        <Button
          onClick={() => {
            handleDelete();
            handleCloseDelete();
          }}
          className="addPayload"
          variant="outline-primary"
          type="submit"
        >
          Delete
        </Button>
      </Modal.Body>

      <Modal.Footer className="modalForm">
        <Button
          className="addPayload"
          variant="secondary"
          onClick={handleCloseDelete}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>

  </>



  )


}
