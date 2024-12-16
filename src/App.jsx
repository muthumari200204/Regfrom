import { useState } from "react";
import "./App.css";

export const App = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
    ismarried: false,
    country: "",
    bio: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!user.name || !user.age || !user.gender || !user.country || !user.bio) {
      alert("Please fill out all fields!");
      return;
    }

    alert("Form submitted successfully!");
    console.log("User Data:", user);

    
    setShowThankYou(true);

    
    setTimeout(() => {
      setShowThankYou(false);
      setShowDetails(true);
    }, 3000);
  };

  return (
    <div className="form-container">
    
      {!showDetails && !showThankYou ? (
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>

          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              id="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              name="age"
              id="age"
              value={user.age}
              onChange={handleInputChange}
            />
          </div>

          <div className="gender">
            <label>Gender</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={user.gender === "male"}
                onChange={handleInputChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={user.gender === "female"}
                onChange={handleInputChange}
              />
              Female
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="ismarried"
                checked={user.ismarried}
                onChange={handleInputChange}
              />
              Married
            </label>
          </div>

          <div className="select-div">
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="country"
              value={user.country}
              onChange={handleInputChange}
            >
              <option value="">Select Country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>

          <div>
            <label htmlFor="bio">About You</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="5"
              value={user.bio}
              placeholder="Write something about yourself"
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      ) : showThankYou ? (
        <div className="thank-you">
          <h2>
            Thank You for Submitting the Form!{" "}
            <span role="img" aria-label="praying hands">
              🙏
            </span>
          </h2>
          <p>We have received your details successfully. Please wait...</p>
        </div>
      ) : (
        <div className="thank-you-details">
          <h2>Your Submitted Details</h2>
          <table border="1" cellPadding="10" cellSpacing="0">
            <tbody>
              <tr>
                <td><b>Name</b></td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td><b>Age</b></td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td><b>Gender</b></td>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <td><b>Marital Status</b></td>
                <td>{user.ismarried ? "Married" : "Not Married"}</td>
              </tr>
              <tr>
                <td><b>Country</b></td>
                <td>{user.country}</td>
              </tr>
              <tr>
                <td><b>Bio</b></td>
                <td>{user.bio}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
