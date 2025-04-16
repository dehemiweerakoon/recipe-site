
import foodIcon from "../../assets/foodicon.jpg";
const AboutUs = () => {
  return (
    <>
      <h1 className="mt-3 sm:mx-10 mx-2 text-2xl font-mono">About Us </h1>
      <div className="mt-2 sm:mx-30 mx-3  w-auto">
        <h1 className="text-xl font-medium">Welcome to Chef Madavi </h1>
        <div className="grid grid-cols-12 gap-1 mt-2">
          <div className="col-span-7">
            {" "}
            <p className="text-base mt-4 text-wrap">
              Your go-to destination for delicious, easy-to-follow recipes from
              around the world! .Whether you're a beginner in the kitchen or a
              seasoned home cook, our mission is to inspire you to create meals
              that bring joy to your table. From comforting classics to exciting
              new dishes, we believe that cooking should be fun, simple, and
              rewarding. Our team is passionate about food, flavors, and sharing
              the magic of homemade cooking. Every recipe we feature is tested,
              tasted, and crafted with love to help you succeed no matter your
              skill level. Thank you for being part of our food-loving
              community. Let's cook something amazing together!
            </p>
            <p className="text-lg  mt-5">Happy Cooking</p>
            <p>The Chef Madavi Team</p>
          </div>
          <div className="col-span-4">
            <img
              src={foodIcon}
              alt=""
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>{" "}
      <div className="mx-20">
        <hr className=" mt-5 max-w-7/8 border-gray-500 dark:border-neutral-500" />
      </div>
      <div className="mt-5 sm:mx-30 mx-3  w-auto text-xl">
        <p>Contact Us</p>
      </div>
      <div>
        <p className="text-base mt-5 sm:mx-30 mx-3  w-1/2 bg-gray-300 p-3 rounded-lg">
          Email : chefmadavi@gmail.com
          <br />
          phone number : +94 717878990
        </p>
      </div>
    </>
  );
};

export default AboutUs;
