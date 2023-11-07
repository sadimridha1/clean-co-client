
import img1 from '../../public/istockphoto-1469706490-1024x1024.jpg'

const Home = () => {
    return (

        <div className=" max-w-[1200px] mx-auto px-5 lg:px-1 mt-10 py-14">
            <div className='flex flex-col lg:flex-row gap-10 items-center'>
                <div className='flex-[1]'>
                    <h1 className='text-6xl font-bold pb-4'><span className='text-pink-600'>Q</span>uality Cleaning for Your Home</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam tempore, obcaecati architecto quo repellendus eligendi, rerum exercitationem molestiae placeat quod, officiis quisquam maxime. Odio odit iure voluptatibus ipsam voluptate.</p>
                    <div className='pt-8'>
                        <button className='btn bg-pink-600 hover:bg-pink-700 text-white '>Book Service</button>
                        <button className='btn bg-slate-300 ml-3'>Read More</button>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img1} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img1} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img1} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-[1] h-[500px] rounded-md overflow-hidden'>
                    <img src={img1} className='w-full h-full object-cover' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;