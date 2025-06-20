export default function DialogPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <dialog open className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close.</p>
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
