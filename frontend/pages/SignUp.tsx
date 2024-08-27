import Quote from "./../components/Quote";
import Auth from './../components/Auth';

const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <Auth/>
        </div>
        <div className="invisible lg:visible">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
