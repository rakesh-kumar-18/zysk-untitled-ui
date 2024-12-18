import Design from "../assets/design.png";
import Product from "../assets/product.png";
import Software from "../assets/software.png";
import Olivia from "../assets/olivia.png";
import Phoenix from "../assets/phoenix.png";
import Lana from "../assets/lana.png";

const BlogSection = () => {
    const blogPosts = [
        {
            category: "Design",
            title: "UX review presentations",
            description:
                "How do you create compelling presentations that wow your colleagues and impress your managers?",
            author: "Olivia Rhye",
            date: "20 Jan 2024",
            image: Design,
            avatar: Olivia
        },
        {
            category: "Product",
            title: "Migrating to Linear 101",
            description:
                "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            author: "Phoenix Baker",
            date: "19 Jan 2024",
            image: Product,
            avatar: Phoenix,
        },
        {
            category: "Software Engineering",
            title: "Building your API stack",
            description:
                "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
            author: "Lana Steiner",
            date: "18 Jan 2024",
            image: Software,
            avatar: Lana,
        },
    ];

    return (
        <section className="w-full py-12 px-4 md:py-16 md:px-8">
            {/* Blog Heading */}
            <div className="max-w-7xl mx-auto mb-8 md:mb-12">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-purple-600 mb-2">Our blog</p>
                    <div className="flex justify-center mt-8">
                        <a
                            href="#"
                            className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700"
                        >
                            View all posts
                        </a>
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                    Lastest blog posts
                </h2>
                <p className="text-gray-600 mt-2">
                    Tool and strategies modern teams need to help their companies grow.
                </p>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-sm text-purple-600 font-semibold mb-1">
                                {post.category}
                            </p>
                            <div className="flex justify-between text-lg font-semibold text-gray-900 mb-2">
                                <h3 className="">
                                    {post.title}{" "}
                                </h3>
                                <span className="ml-1">↗</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                            <div className="flex items-center space-x-2">
                                <img
                                    src={post.avatar}
                                    alt={post.author}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {post.author}
                                    </p>
                                    <p className="text-sm text-gray-500">{post.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
