function Result({ finished, accuracy, input }) {
   if(!finished) return null

   let wpm = Math.round((input.split(" ").length / 5))
    return (
        <div>
            <h2>Results</h2>
            <p>WPM: {wpm}</p>
            <p>Accuracy: {accuracy}%</p>
        </div>

  
    )
}
      export default Result