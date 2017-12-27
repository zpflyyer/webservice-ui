import React, { Component } from 'react';
import DatePicker  from 'react-datepicker';
import moment from 'moment';
import {Col, Modal, Button} from 'react-bootstrap';
import '../style/Order.css';
import 'react-datepicker/dist/react-datepicker.css';
import {getTrips} from '../api/order';
import update from 'react-addons-update'

class Order extends Component{
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment(),
            modalDisplay: "none",
            modalMsg: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.showHideModal = this.showHideModal.bind(this);
    }

    handleChange(date) {
        this.setState(
            update(this.state, {
                $merge: {
                    startDate: date,
                    modalDisplay: (this.state.modalDisplay == "none" ? "block" : "none"),
                    modalMsg: getTrips()
                }
            })
        );
    }

    showHideModal(){
        this.setState(
            update(this.state, {
                $merge: {
                    modalDisplay: (this.state.modalDisplay == "none" ? "block" : "none")
                }
            })
        )
    }

    render() {
        return (
            <div className="Order">
                <div className="static-modal" style={{display:this.state.modalDisplay}}>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Notice</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {this.state.modalMsg}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={this.showHideModal}>Close</Button>
                            <Button onClick={this.showHideModal} bsStyle="primary">OK</Button>
                        </Modal.Footer>

                    </Modal.Dialog>
                </div>

                <Col lg={3}>
                    <div className="Order-Date-Label">
                        select the set-off date
                    </div>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        onSelect={this.handleChange}
                    />
                </Col>
            </div>
        );
    }
}
export default Order;