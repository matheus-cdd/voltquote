const stats = [
  { label: "Orçamentos no mês", value: "0" },
  { label: "Taxa de aprovação", value: "0%" },
  { label: "Faturamento previsto", value: "R$ 0,00" },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Painel</h1>
      <p className="mt-1 text-slate-400">Visão geral dos seus orçamentos.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-800 bg-slate-950 p-5"
          >
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
