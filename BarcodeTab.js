import React, { useState, useEffect } from "react";
import JsBarcode from "jsbarcode";
import "./../styles/BarcodeTab.css";
const BarcodeTab = () => {
  const [barcodeType, setBarcodeType] = useState("EAN13");
  const [sku, setSku] = useState("");
  const [autoGenerate, setAutoGenerate] = useState(false);

  useEffect(() => {
    if (sku) {
      JsBarcode("#barcodePreview", sku, { format: barcodeType });
    }
  }, [sku, barcodeType]);

  const handleGenerateSKU = () => {
    setSku(`SKU-${Date.now()}`);
  };

  return (
    <div>
      <label>Barcode Type:</label>
      <select
        value={barcodeType}
        onChange={(e) => setBarcodeType(e.target.value)}
      >
        <option value="EAN13">EAN-13</option>
        <option value="CODE128">Code-128</option>
      </select>

      <label>SKU:</label>
      <input
        type="text"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
        disabled={autoGenerate}
      />

      <label>
        <input
          type="checkbox"
          checked={autoGenerate}
          onChange={(e) => {
            setAutoGenerate(e.target.checked);
            if (e.target.checked) handleGenerateSKU();
          }}
        />
        Auto-Generate SKU
      </label>

      <svg id="barcodePreview"></svg>
    </div>
  );
};

export default BarcodeTab;
