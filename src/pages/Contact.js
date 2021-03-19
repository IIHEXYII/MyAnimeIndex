// import Heading from "../components/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from '../components/Header';


const schema = yup.object().shape({
  name: yup
    .string('')
    .min(3, "The name must be at least 3 characters or longer")
    .required("Please enter your name"),

  age: yup.number().required("Please enter your age").min(10).max(20),

  website: yup
    .string('')
    .matches(/^(?:http(s)?:)?[\w.-]+(?:[\w-]+)+[\w\-_~:/?#[@!&',;=.]+$/gm,
      "Please enter a valid URL"
    )
    .required("Please enter your Url")
    .min(10, "The Url must be a valid Url"),
});

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);
  return (
    <>
      <Header title="Contact"/ >
      <div className="pageContent">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__details">
        <input 
          placeholder="Name"
          className="form__input"
          type="text"
          name="name"
          ref={register({ required: true })}
        />
        <div className="form__error">
        {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
       
        <input
          placeholder="Age"
          className="form__input form__input--age"
          type="number"
          name="age"
          ref={register({ required: true })}
        />
          <div className="form__error">
          {errors.age && <span className="error">{errors.age.message}</span>}
          </div>
        </div>
        <input
          placeholder="Website Url"
          className="form__input"
          type="text"
          name="website"
          ref={register({ required: true })}
        />
        <div className="form__error">
        {errors.website && ( <span className="error">{errors.website.message}</span>
        )}
        </div>
        <button className="form__btn">Send</button>
      </form>
      </div>
    </>
  );
};

export default Contact;