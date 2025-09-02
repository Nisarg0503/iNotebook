function SectionHeader({ icon, title, subtitle }) {
  return (
    <div className="text-center mb-4">
      <div
        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
        style={{
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, #8a2be2 0%, #4a00e0 100%)",
        }}
      >
        <i className={`fas ${icon} text-white fs-4`}></i>
      </div>
      <h3 className="fw-bold text-white mb-1">{title}</h3>
      {subtitle && <p className="text-white-50 small mb-0">{subtitle}</p>}
    </div>
  );
}
export default SectionHeader;
