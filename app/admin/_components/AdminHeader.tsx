interface AdminHeaderProps {
  onLogout: () => void;
}

export default function AdminHeader({ onLogout }: AdminHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Admin Panel</h1>

      <button
        onClick={onLogout}
        className="rounded bg-red-600 px-4 py-2 text-white"
      >
        Logout
      </button>
    </div>
  );
}
