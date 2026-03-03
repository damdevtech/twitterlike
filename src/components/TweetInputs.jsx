function TweetInputs() {
    return (
        <div className="border-b border-gray-200 p-4 bg-white">
            <div className="flex gap-3">
                <i className="fas fa-user text-white text-center h-10 w-10 flex items-center justify-center rounded-full bg-gray-300"></i>

                <div className="flex-1">
                    <textarea
                        placeholder="What's happening?"
                        className="w-full resize-none outline-none text-lg placeholder-gray-500"
                        rows="3"
                    ></textarea>

                    <div className="flex justify-end mt-3">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold transition">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TweetInputs;
