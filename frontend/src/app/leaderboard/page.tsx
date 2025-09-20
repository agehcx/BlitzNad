import React from 'react';
import { Navbar } from '@/components/Navbar';

// Dummy data for demonstration. Replace with real data fetching logic as needed.
const leaderboardData = [
	{ address: '0x1234...abcd', wins: 10, totalReward: 5.2 },
	{ address: '0x5678...efgh', wins: 7, totalReward: 3.8 },
	{ address: '0x9abc...ijkl', wins: 5, totalReward: 2.1 },
];

function Podium({ data }: { data: typeof leaderboardData }) {
	// Sort top 3 by wins, then reward
	const topThree = [...data]
		.sort((a, b) =>
			b.wins !== a.wins
				? b.wins - a.wins
				: b.totalReward - a.totalReward
		)
		.slice(0, 3);

	// Podium order: 2nd, 1st, 3rd for visual effect
	const podiumOrder = [1, 0, 2];
	const colors = [
		'bg-gradient-to-t from-purple-700 to-purple-400', // 2nd
		'bg-gradient-to-t from-yellow-400 to-yellow-200', // 1st
		'bg-gradient-to-t from-purple-900 to-purple-600', // 3rd
	];
	const heights = ['h-32', 'h-44', 'h-24'];

	return (
		<div className="flex justify-center items-end gap-8 mb-12 mt-4">
			{podiumOrder.map((idx, i) => {
				const entry = topThree[idx];
				if (!entry) return <div key={i} className="w-28" />;
				return (
					<div key={entry.address} className="flex flex-col items-center w-28">
						<div
							className={`w-28 ${heights[i]} ${colors[i]} rounded-xl flex flex-col justify-end items-center shadow-lg relative border-4 border-purple-950`}
						>
							<span className="absolute -top-7 left-1/2 -translate-x-1/2 text-3xl font-bold text-white drop-shadow-lg">
								{i === 1 ? '🥇' : i === 0 ? '🥈' : '🥉'}
							</span>
							<span className="text-xs text-white font-mono mt-auto mb-2 break-all px-1 text-center">
								{entry.address}
							</span>
							<span className="text-white font-bold text-lg mb-1">
								{entry.wins}Win
							</span>
							<span className="text-purple-200 text-xs mb-2">
								{entry.totalReward} MON
							</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default function LeaderboardPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#1a0826] via-[#2d014d] to-[#12011a]">
			<Navbar />
			<main className="container mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold text-white mb-8 text-center">
					Leaderboard
				</h1>
				<Podium data={leaderboardData} />
				<div className="bg-slate-800/50 rounded-lg p-6">
					<table className="min-w-full bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 rounded-lg shadow-lg">
						<thead>
							<tr className="text-purple-200 text-left">
								<th className="py-3 px-6">Address</th>
								<th className="py-3 px-6">No. of Wins</th>
								<th className="py-3 px-6">Total Reward Gained</th>
							</tr>
						</thead>
						<tbody>
							{leaderboardData.map((entry, idx) => (
								<tr
									key={entry.address}
									className={
										idx % 2 === 0
											? 'bg-purple-900/70'
											: 'bg-purple-950/60'
									}
								>
									<td className="py-2 px-6 font-mono text-purple-100">
										{entry.address}
									</td>
									<td className="py-2 px-6 text-purple-100">
										{entry.wins}
									</td>
									<td className="py-2 px-6 text-purple-100">
										{entry.totalReward} MON
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	);
}
