const transactions = [
  { id: 1, userId: 101, amount: 100000 },
  { id: 2, userId: 102, amount: 200000 },
  { id: 3, userId: 101, amount: 150000 },
  { id: 4, userId: 103, amount: 300000 },
  { id: 5, userId: 102, amount: 50000 }
];

function aggregateTransactions(data) {
  const totals = data.reduce((acc, item) => {
    acc[item.userId] = (acc[item.userId] || 0) + item.amount; 
    return acc;
  }, {});

  return Object.entries(totals)
  .map(([userId, totalAmount]) => ({
    userId: Number(userId),
    totalAmount
  }))
  .sort((a, b) => b.totalAmount - a.totalAmount);
}

console.log(aggregateTransactions(transactions));