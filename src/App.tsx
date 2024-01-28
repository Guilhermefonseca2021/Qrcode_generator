import { useState } from "react";
import "./App.css";
import QRCodeLink from "qrcode";
import QRCode from "react-qr-code";

export default function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  function handleQrcode(url: string) {
    setLink(url);
    handleGenerate(url);
  }

  function handleGenerate(link_url: string) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      (err, url) => {
        console.log(err);
        setQrcodeLink(url);
      }
    );
  }

  return (
    <div className="container">
      <QRCode value={link} />
      <input
        type="text"
        placeholder="Digite seu link..."
        onChange={(e) => handleQrcode(e.target.value)}
      />
      <a href={qrcodeLink} download={"qrcode.png"}>
        Baixar Qrcode
      </a>
    </div>
  );
}
