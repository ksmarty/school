const printClosest = (A, B) => {
	let diff = Number.MAX_VALUE;

	let i = 0,
		j = 0,
		count = 0,
		x = 0,
		y = 0;

	while (x < A.length && y < B.length) {
		count++;
		if (Math.abs(A[x] - B[y]) < diff) {
			diff = Math.abs(A[x] - B[y]);
			i = A[x];
			j = B[y];
		}

		if (A[x] < B[y]) x++;
		else y++;
	}

	return `abs(${i} - ${j}) = ${diff}, count: ${count}`;
};

const a = [200, 300, 400, 500, 600, 700, 1000];
const b = [2, 3, 12, 13, 14, 15, 1000];

console.log(printClosest(a, b));
