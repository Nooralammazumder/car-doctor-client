import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const description = form.description.value;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price,
      description,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Service booked successfully");
        }
      });
  };
  return (
    <div className="my-12">
      <h3 className="text-3xl font-bold mx-auto p-3 rounded-tl-full rounded-br-full text-center w-[550px] mb-9 bg-[#FF3811] text-white">
        Book Service : {title}
      </h3>
      <form
        onSubmit={handleBookService}
        className="p-20 bg-[#F3F3F3] rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              defaultValue={"$" + price}
              placeholder="Due Amount"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <input type="date" name="date" className="input" required />
          </div>
        </div>
        <div className="form-control mt-5">
          <input
            type="text"
            placeholder="Product Description"
            name="description"
            className="pl-5 rounded-lg h-[150px]"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-[#FF3811] text-white btn-block"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
