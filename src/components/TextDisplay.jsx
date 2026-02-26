function TextDisplay({ text, input }) {
  if (!text) return <div>Загрузка текста...</div>;

  const chars = text.split('');

  return (
    <div className="text-display">
      {chars.map((char, index) => {
        let className = 'char';

        if (index < input.length) {
          className += input[index] === char ? ' correct' : ' incorrect';
        } else if (index === input.length) {
          className += ' current';
        }

        return (
          <span key={index} className={className}>
            {char === ' ' ? '\u00A0' : char} 
          </span>
        );
      })}
    </div>
  );
}

export default TextDisplay;