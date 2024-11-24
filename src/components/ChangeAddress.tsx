import { FC, useState } from "react";

interface ChangeAddressProps {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangeAddress: FC<ChangeAddressProps> = ({
  setAddress,
  setIsOpenModal,
}) => {
  const [newAddress, setNewAdress] = useState<string>("");

  const onClose = () => {
    setAddress(newAddress);
    setIsOpenModal(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter New Address..."
        onChange={(e) => setNewAdress(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpenModal(false)}
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 roubded"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
