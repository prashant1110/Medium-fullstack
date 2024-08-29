import Quote from "./../components/Quote";
import Auth from './../components/Auth';

const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-10">
        <div>
          <Auth type="signup"/>
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
