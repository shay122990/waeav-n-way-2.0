import type { ChangeEvent } from "react";

interface FabricFormData {
  name: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  color?: string;
}

interface FabricFormProps {
  form: FabricFormData;
  editing: boolean;
  saving: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
  onDeleteAll: () => void;
}

export default function FabricForm({
  form,
  editing,
  saving,
  onChange,
  onSubmit,
  onCancel,
  onDeleteAll,
}: FabricFormProps) {
  return (
    <div className="space-y-4 rounded bg-white p-4 shadow">
      <h2 className="text-lg font-semibold">
        {editing ? "Edit Fabric" : "Add Fabric"}
      </h2>

      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Internal name (e.g. Cotton Green 1)"
        className="w-full border p-2"
      />

      <input
        name="title"
        value={form.title}
        onChange={onChange}
        placeholder="Display title"
        className="w-full border p-2"
      />

      <input
        name="category"
        value={form.category}
        onChange={onChange}
        placeholder="Category"
        className="w-full border p-2"
      />

      <input
        name="image"
        value={form.image}
        onChange={onChange}
        placeholder="/fabrics/image.jpg"
        className="w-full border p-2"
      />

      <input
        name="color"
        value={form.color}
        onChange={onChange}
        placeholder="Color"
        className="w-full border p-2"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={onChange}
        placeholder="Description"
        className="w-full border p-2"
      />

      <button
        onClick={onSubmit}
        disabled={saving}
        className="w-full bg-black py-2 text-white"
      >
        {saving ? "Saving..." : editing ? "Update" : "Add"}
      </button>

      {editing && (
        <button onClick={onCancel} className="w-full bg-gray-200 py-2">
          Cancel
        </button>
      )}

      <button
        onClick={onDeleteAll}
        className="w-full bg-red-500 py-2 text-white"
      >
        Delete All
      </button>
    </div>
  );
}
