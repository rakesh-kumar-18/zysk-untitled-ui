const BlogSection = () => {
    const blogPosts = [
        {
            category: "Design",
            title: "UX review presentations",
            description:
                "How do you create compelling presentations that wow your colleagues and impress your managers?",
            author: "Olivia Rhye",
            date: "20 Jan 2024",
            image: "https://via.placeholder.com/400x250", // Replace with actual image
            avatar: "https://via.placeholder.com/40", // Replace with actual avatar
        },
        {
            category: "Product",
            title: "Migrating to Linear 101",
            description:
                "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
            author: "Phoenix Baker",
            date: "19 Jan 2024",
            image: "https://via.placeholder.com/400x250",
            avatar: "https://via.placeholder.com/40",
        },
        {
            category: "Software Engineering",
            title: "Building your API stack",
            description:
                "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
            author: "Lana Steiner",
            date: "18 Jan 2024",
            image: "https://via.placeholder.com/400x250",
            avatar: "https://via.placeholder.com/40",
        },
    ];

    return (
        <section className="w-full py-12 px-4 md:py-16 md:px-8">
            {/* Blog Heading */}
            <div className="text-center mb-8 md:mb-12">
                <p className="text-sm font-semibold text-purple-600 mb-2">Our blog</p>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
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
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {post.title}{" "}
                                <span className="inline-block ml-1 text-purple-600">↗</span>
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                            <div className="flex items-center space-x-2">
                                <img
                                    src={post.avatar}
                                    alt={post.author}
                                    className="w-8 h-8 rounded-full"
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

            {/* View All Posts Button */}
            <div className="flex justify-center mt-8">
                <a
                    href="#"
                    className="px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700"
                >
                    View all posts
                </a>
            </div>
        </section>
    );
};

export default BlogSection;
