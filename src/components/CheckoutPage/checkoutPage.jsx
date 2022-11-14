import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/confirmed");
    };
    return (
        <div className="container my-4">
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputName">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        required
                    />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                        required
                    />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                            required
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputZip"
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-success my-4">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;
