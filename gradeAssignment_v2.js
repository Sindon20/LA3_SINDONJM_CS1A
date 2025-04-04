contsscore = parseFloat(prompt("Enter your score:"));

if (isNaN(score)|| score < 0 || score > 100){
    console.log("Invalid input. Please enter a number between 0 and 100.");
} else {
    const grade = 
       score >= 97 ? "1.00":
       score >= 94 ? "1.25":
       score >= 91 ? "1.50":
       score >= 88 ? "1.75":
       score >= 85 ? "2.00":
       score >= 82 ? "2.25":
       score >= 79 ? "2.50":
       score >= 76 ? "2.75":
       score === 75 ? "3.00":
       score >= 72 ? "4.00": "5.00";

    const description =
      score >= 97 ? "Excellent":
      score >= 94 ? "Excellent":
      score >= 91 ? "Above Average":
      score >= 88 ? "Above Average":
      score >= 85 ? "Average":
      score >= 82 ? "Average":
      score >= 79 ? "Below Average":
      score >= 76 ? "Below Average":
      score === 75 ? "Below Average":
      score >= 72 ? "Poor": "Poor";

    let remarks;
    if ( score >= 90) {
        remark = "HIGH PASS, Candidate for Cum Laude";
    } else if (score >= 80){
        remark = "AVERAGE PASS";
    } else if (score >= 75){
        remark = "LOW PASS";
    } else {
        remarks = " FAILED, Needs Improvement";
    }

    console.log('Your equivalent Grade is "${grade}" ${description}');
    console.log('Final Remarks: ${remarks}');     

}