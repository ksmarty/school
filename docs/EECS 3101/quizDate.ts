const quizDate = (A: any[]) => {
	if (A.length == 1) return A[0];
	else if (A.length == 2)
		if (A[0] == A[1]) return A[0];
		else return false;

	const mid = A.length / 2;
	const B = quizDate(A.slice(0, mid));
	const C = quizDate(A.slice(-mid));

	if (!B && C) return C;
	else if ((!C && B) || B == C) return B;

	return false;
};

console.log(quizDate([1, 3, 1, 3, 1, 1, 3, 1]));
