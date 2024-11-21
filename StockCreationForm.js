import React, { useState, useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const StockCreationForm = () => {
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [barcodeType, setBarcodeType] = useState("CODE128");
  const [barcodeValue, setBarcodeValue] = useState("");
  const barcodeRef = useRef();
  useEffect(() => {
    if (barcodeValue) {
      try {
        JsBarcode(barcodeRef.current, barcodeValue, {
          format: barcodeType,
          lineColor: "#000",
          width: 2,
          height: 50,
          displayValue: true,
        });
      } catch (err) {
        console.error("Error generating barcode:", err);
      }
    }
  }, [barcodeValue, barcodeType]);

  useEffect(() => {
    setBarcodeValue("");
  }, [barcodeType]);

  const handleGenerateBarcode = () => {
    if (!sku) {
      alert("SKU cannot be empty.");
      return;
    }
    if (barcodeType === "EAN13" && !/^\d{12}$/.test(sku)) {
      alert("For EAN13, SKU must be exactly 12 numeric digits.");
      return;
    }
    if (barcodeType === "UPC" && !/^\d{11}$/.test(sku)) {
      alert("For UPC, SKU must be exactly 11 numeric digits.");
      return;
    }
    // Generate barcode value (only SKU is used for barcode standards)
    setBarcodeValue(sku);
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg mt-4">
      <h1 className="text-xl font-semibold mb-6">Create Stock Item</h1>
      <div className="grid grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label className="block mb-1 text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Test Stock Item"
            className="w-full border border-gray-300 p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* SKU Field */}
        <div>
          <label className="block mb-1 text-gray-600">SKU (Stock Keeping Unit)</label>
          <input
            type="text"
            placeholder="123456789012"
            className="w-full border border-gray-300 p-2 rounded"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
          {barcodeType === "EAN13" && (
            <p className="text-sm text-gray-500 mt-1">
              Note: SKU must be exactly 12 numeric digits for EAN13.
            </p>
          )}
          {barcodeType === "UPC" && (
            <p className="text-sm text-gray-500 mt-1">
              Note: SKU must be exactly 11 numeric digits for UPC.
            </p>
          )}
        </div>

        {/* Barcode Type */}
        <div>
          <label className="block mb-1 text-gray-600">Barcode Type</label>
          <select
            className="w-full border border-gray-300 p-2 rounded"
            value={barcodeType}
            onChange={(e) => setBarcodeType(e.target.value)}
          >
            <option value="CODE128">CODE128</option>
            <option value="EAN13">EAN13</option>
            <option value="UPC">UPC</option>
          </select>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-6">
        <button
          onClick={handleGenerateBarcode}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Generate Barcode
        </button>
      </div>

      {/* Display Barcode */}
      {barcodeValue && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Generated Barcode:</h2>
          <svg ref={barcodeRef}></svg>
        </div>
      )}
    </div>
  );
};

export default StockCreationForm;
