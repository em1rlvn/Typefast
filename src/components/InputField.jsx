function InputField({ value, onChange, disabled, ...props }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      disabled={disabled}
      autoFocus
      style={{
        width: '80%',
        maxWidth: '800px',
        padding: '12px 16px',
        fontSize: '1.4rem',
        fontFamily: 'monospace',
        background: '#1e293b',
        color: '#e2e8f0',
        border: '2px solid #475569',
        borderRadius: '8px',
        outline: 'none',
      }}
      placeholder={disabled ? "Тест завершён" : "Начните печатать..."}
      {...props}
    />
  );
}

export default InputField;