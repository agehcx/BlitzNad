'use client'

import { useState } from 'react'
import { Plus, Clock, Trophy, Users } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'

export default function LobbyPage() {
  const [matches] = useState([
    {
      id: '1',
      creator: '0x1234...5678',
      mode: 'Speed Solve',
      stake: '100 GAME',
      challenge: 'Two Sum',
      timeLeft: '4m 32s'
    },
    {
      id: '2', 
      creator: '0x9abc...def0',
      mode: 'Optimization',
      stake: '250 GAME',
      challenge: 'Fibonacci',
      timeLeft: '7m 18s'
    }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-white">Battle Lobby</h1>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Create Match</span>
          </button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Users />} label="Active Players" value="23" />
          <StatCard icon={<Clock />} label="Open Matches" value="7" />
          <StatCard icon={<Trophy />} label="Completed Today" value="156" />
          <StatCard icon={<Users />} label="Total Prize Pool" value="12.5k GAME" />
        </div>

        {/* Match List */}
        <div className="bg-slate-800/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Open Matches</h2>
          <div className="space-y-4">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon, label, value }: any) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-4 text-center">
      <div className="flex justify-center mb-2 text-purple-400">{icon}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-slate-400 text-sm">{label}</div>
    </div>
  )
}

function MatchCard({ match }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="text-white font-mono">{match.creator}</div>
        <div className="px-2 py-1 bg-purple-600 text-white text-sm rounded">{match.mode}</div>
      </div>
      <div className="text-slate-300">{match.challenge}</div>
      <div className="text-yellow-400">{match.stake}</div>
      <div className="text-orange-400">{match.timeLeft}</div>
      <Link href={`/match/${match.id}`}>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Join
        </button>
      </Link>
    </div>
  )
}