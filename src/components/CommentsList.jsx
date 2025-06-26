import { useEffect, useState } from "react";

const COMMENTS_PER_PAGE = 10;

export default function CommentsList() {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`data/comments.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Comments loaded:", data.length, "comments");
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching comments:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
  const startIndex = (page - 1) * COMMENTS_PER_PAGE;
  const currentComments = comments.slice(startIndex, startIndex + COMMENTS_PER_PAGE);

  const nextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <div className="text-center">Loading comments...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <div className="text-red-500 text-center">
          Error loading comments: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl lg:max-w-xl lg:p-10 xl:max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-11 lg:mt-0">Comments ({comments.length} total)</h1>
      <div className="space-y-4">
        {currentComments.map((comment, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <div className="text-gray-700 font-semibold">{comment.name}</div>
            <div className="text-sm text-gray-500">
              {comment.date} at {comment.time}
            </div>
            <p className="mt-2 text-gray-800">{comment.comment}</p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="px-4 py-2 text-gray-950 bg-gray-100 rounded disabled:opacity-50 hover:bg-gray-300 cursor-pointer"
          >
            Previous
          </button>
          <span className="text-gray-950">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="px-4 py-2 text-gray-950 bg-gray-100 rounded disabled:opacity-50 hover:bg-gray-300 cursor-pointer"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}