import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

export default function MonthlyCollectionsMeeting() {
  const reportTitle = 'Monthly Collections Meeting';
  const reportPeriod = 'December 2025';

  // ============================================================
  // ACTIVITY DATA: From Airtable (Jul-Dec 2025)
  // Source: "Imaging Center Activity" Airtable (appUcuxfhvKNnYol)
  // ============================================================

  // JAX1 Monthly Activity Data (Jul-Dec 2025)
  const jax1Activity = [
    { month: 'Jul', claims: 938, mri: 747, ct: 0, pet: 0, other: 191, insurance: 412, pip: 436, lop: 90, research: 0, collections: 461517 },
    { month: 'Aug', claims: 770, mri: 631, ct: 0, pet: 0, other: 139, insurance: 354, pip: 374, lop: 42, research: 0, collections: 496478 },
    { month: 'Sep', claims: 1028, mri: 824, ct: 0, pet: 0, other: 204, insurance: 418, pip: 499, lop: 111, research: 0, collections: 453771 },
    { month: 'Oct', claims: 873, mri: 713, ct: 0, pet: 0, other: 160, insurance: 366, pip: 442, lop: 65, research: 0, collections: 474144 },
    { month: 'Nov', claims: 734, mri: 596, ct: 0, pet: 0, other: 138, insurance: 292, pip: 358, lop: 84, research: 0, collections: 430458 },
    { month: 'Dec', claims: 836, mri: 674, ct: 0, pet: 0, other: 162, insurance: 298, pip: 430, lop: 108, research: 0, collections: 367985 },
  ];

  // JAX2 Monthly Activity Data
  const jax2Activity = [
    { month: 'Jul', claims: 507, mri: 350, ct: 0, pet: 0, other: 157, insurance: 117, pip: 305, lop: 85, research: 0, collections: 234934 },
    { month: 'Aug', claims: 450, mri: 292, ct: 0, pet: 0, other: 158, insurance: 125, pip: 254, lop: 71, research: 0, collections: 235560 },
    { month: 'Sep', claims: 458, mri: 305, ct: 0, pet: 0, other: 153, insurance: 134, pip: 241, lop: 83, research: 0, collections: 207911 },
    { month: 'Oct', claims: 535, mri: 355, ct: 0, pet: 0, other: 180, insurance: 116, pip: 354, lop: 65, research: 0, collections: 173396 },
    { month: 'Nov', claims: 427, mri: 279, ct: 0, pet: 0, other: 148, insurance: 65, pip: 289, lop: 73, research: 0, collections: 172724 },
    { month: 'Dec', claims: 422, mri: 290, ct: 0, pet: 0, other: 132, insurance: 82, pip: 259, lop: 81, research: 0, collections: 207046 },
  ];

  // Orange Park Monthly Activity Data
  const orangeParkActivity = [
    { month: 'Jul', claims: 516, mri: 385, ct: 0, pet: 0, other: 131, insurance: 220, pip: 268, lop: 28, research: 0, collections: 154657 },
    { month: 'Aug', claims: 474, mri: 337, ct: 0, pet: 0, other: 137, insurance: 208, pip: 245, lop: 21, research: 0, collections: 168199 },
    { month: 'Sep', claims: 468, mri: 323, ct: 0, pet: 0, other: 145, insurance: 200, pip: 248, lop: 20, research: 0, collections: 173944 },
    { month: 'Oct', claims: 484, mri: 360, ct: 0, pet: 0, other: 124, insurance: 190, pip: 241, lop: 53, research: 0, collections: 202506 },
    { month: 'Nov', claims: 392, mri: 273, ct: 0, pet: 0, other: 119, insurance: 143, pip: 211, lop: 38, research: 0, collections: 157802 },
    { month: 'Dec', claims: 481, mri: 358, ct: 0, pet: 0, other: 123, insurance: 172, pip: 236, lop: 73, research: 0, collections: 126163 },
  ];

  // Aventura Monthly Activity Data
  const aventuraActivity = [
    { month: 'Jul', claims: 892, mri: 652, ct: 166, pet: 74, other: 0, insurance: 843, pip: 9, lop: 5, research: 35, collections: 430304 },
    { month: 'Aug', claims: 889, mri: 632, ct: 179, pet: 78, other: 0, insurance: 828, pip: 20, lop: 8, research: 33, collections: 373573 },
    { month: 'Sep', claims: 807, mri: 651, ct: 120, pet: 36, other: 0, insurance: 765, pip: 9, lop: 7, research: 26, collections: 369550 },
    { month: 'Oct', claims: 949, mri: 652, ct: 221, pet: 76, other: 0, insurance: 904, pip: 17, lop: 1, research: 27, collections: 355500 },
    { month: 'Nov', claims: 843, mri: 621, ct: 169, pet: 53, other: 0, insurance: 791, pip: 13, lop: 14, research: 25, collections: 403239 },
    { month: 'Dec', claims: 846, mri: 659, ct: 140, pet: 47, other: 0, insurance: 792, pip: 17, lop: 4, research: 33, collections: 410412 },
  ];

  // South Miami Monthly Activity Data
  const southMiamiActivity = [
    { month: 'Jul', claims: 354, mri: 287, ct: 36, pet: 31, other: 0, insurance: 330, pip: 10, lop: 12, research: 2, collections: 143341 },
    { month: 'Aug', claims: 417, mri: 295, ct: 71, pet: 51, other: 0, insurance: 382, pip: 16, lop: 5, research: 14, collections: 174875 },
    { month: 'Sep', claims: 456, mri: 332, ct: 79, pet: 45, other: 0, insurance: 410, pip: 21, lop: 8, research: 17, collections: 244179 },
    { month: 'Oct', claims: 423, mri: 382, ct: 6, pet: 35, other: 0, insurance: 403, pip: 14, lop: 6, research: 0, collections: 241783 },
    { month: 'Nov', claims: 532, mri: 366, ct: 135, pet: 31, other: 0, insurance: 514, pip: 5, lop: 0, research: 13, collections: 216986 },
    { month: 'Dec', claims: 624, mri: 461, ct: 118, pet: 45, other: 0, insurance: 603, pip: 6, lop: 0, research: 15, collections: 332778 },
  ];

  // Pines Monthly Activity Data
  const pinesActivity = [
    { month: 'Jul', claims: 703, mri: 491, ct: 196, pet: 16, other: 0, insurance: 614, pip: 67, lop: 22, research: 0, collections: 269588 },
    { month: 'Aug', claims: 680, mri: 508, ct: 148, pet: 24, other: 0, insurance: 554, pip: 107, lop: 19, research: 0, collections: 208620 },
    { month: 'Sep', claims: 696, mri: 485, ct: 192, pet: 19, other: 0, insurance: 580, pip: 85, lop: 31, research: 0, collections: 228992 },
    { month: 'Oct', claims: 666, mri: 492, ct: 151, pet: 23, other: 0, insurance: 540, pip: 106, lop: 20, research: 0, collections: 260013 },
    { month: 'Nov', claims: 636, mri: 472, ct: 145, pet: 19, other: 0, insurance: 528, pip: 88, lop: 20, research: 0, collections: 225253 },
    { month: 'Dec', claims: 609, mri: 444, ct: 142, pet: 23, other: 0, insurance: 496, pip: 91, lop: 22, research: 0, collections: 229178 },
  ];

  // Center configs for display with conclusions
  const centerConfigs = [
    { name: 'JAX1', data: jax1Activity, region: 'jax', color: '#1e40af' },
    { name: 'JAX2', data: jax2Activity, region: 'jax', color: '#3b82f6' },
    { name: 'Orange Park', data: orangeParkActivity, region: 'jax', color: '#60a5fa' },
    { name: 'Aventura', data: aventuraActivity, region: 'sefl', color: '#166534' },
    { name: 'South Miami', data: southMiamiActivity, region: 'sefl', color: '#16a34a' },
    { name: 'Pines', data: pinesActivity, region: 'sefl', color: '#4ade80' },
  ];

  // Aggregate by region
  const aggregateActivity = (activities) => {
    const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map((month, i) => {
      const data = activities.map(a => a[i]);
      return {
        month,
        claims: data.reduce((sum, d) => sum + d.claims, 0),
        mri: data.reduce((sum, d) => sum + d.mri, 0),
        ct: data.reduce((sum, d) => sum + d.ct, 0),
        pet: data.reduce((sum, d) => sum + d.pet, 0),
        other: data.reduce((sum, d) => sum + d.other, 0),
        insurance: data.reduce((sum, d) => sum + d.insurance, 0),
        pip: data.reduce((sum, d) => sum + d.pip, 0),
        lop: data.reduce((sum, d) => sum + d.lop, 0),
        research: data.reduce((sum, d) => sum + d.research, 0),
        collections: data.reduce((sum, d) => sum + d.collections, 0),
      };
    });
  };

  const jaxConsolidated = aggregateActivity([jax1Activity, jax2Activity, orangeParkActivity]);
  const seflConsolidated = aggregateActivity([aventuraActivity, southMiamiActivity, pinesActivity]);
  const groupConsolidated = aggregateActivity([jax1Activity, jax2Activity, orangeParkActivity, aventuraActivity, southMiamiActivity, pinesActivity]);

  // Calculate $/Claim for each month
  const addDollarPerClaim = (data) => data.map(d => ({
    ...d,
    dollarPerClaim: d.claims > 0 ? Math.round(d.collections / d.claims) : 0
  }));

  // Calculate period totals for pie charts
  const calcPeriodTotals = (activity) => {
    return activity.reduce((acc, d) => ({
      mri: acc.mri + d.mri,
      ct: acc.ct + d.ct,
      pet: acc.pet + d.pet,
      other: acc.other + d.other,
      insurance: acc.insurance + d.insurance,
      pip: acc.pip + d.pip,
      lop: acc.lop + d.lop,
      research: acc.research + d.research,
      claims: acc.claims + d.claims,
      collections: acc.collections + d.collections,
    }), { mri: 0, ct: 0, pet: 0, other: 0, insurance: 0, pip: 0, lop: 0, research: 0, claims: 0, collections: 0 });
  };

  const jaxTotals = calcPeriodTotals(jaxConsolidated);
  const seflTotals = calcPeriodTotals(seflConsolidated);
  const groupTotals = calcPeriodTotals(groupConsolidated);

  // Calculate totals for each center
  const centerTotals = centerConfigs.map(c => ({
    ...c,
    totals: calcPeriodTotals(c.data)
  }));

  // Generate conclusions for Panel A (Claims)
  const getClaimsConclusion = (name, data) => {
    const totals = calcPeriodTotals(data);
    const julClaims = data[0].claims;
    const decClaims = data[5].claims;
    const change = Math.round((decClaims - julClaims) / julClaims * 100);
    const avg = Math.round(totals.claims / 6);
    
    if (Math.abs(change) <= 10) return `Stable volume at ~${avg} claims/mo.`;
    if (change > 10) return `Volume UP ${change}% (${julClaims}→${decClaims}).`;
    return `Volume DOWN ${Math.abs(change)}% (${julClaims}→${decClaims}).`;
  };

  // Generate conclusions for Panel B (Modality)
  const getModalityConclusion = (name, totals) => {
    const total = totals.mri + totals.ct + totals.pet + totals.other;
    const mriPct = Math.round(totals.mri / total * 100);
    const ctPct = Math.round(totals.ct / total * 100);
    const petPct = Math.round(totals.pet / total * 100);
    
    if (totals.ct === 0 && totals.pet === 0) return `MRI-only center (${mriPct}% MRI).`;
    if (petPct > 5) return `Diversified: ${mriPct}% MRI, ${ctPct}% CT, ${petPct}% PET.`;
    return `MRI-focused with CT capability (${mriPct}%/${ctPct}%).`;
  };

  // Generate conclusions for Panel C (Payer)
  const getPayerConclusion = (name, totals) => {
    const total = totals.insurance + totals.pip + totals.lop + totals.research;
    const insPct = Math.round(totals.insurance / total * 100);
    const pipPct = Math.round(totals.pip / total * 100);
    const lopPct = Math.round(totals.lop / total * 100);
    
    if (pipPct > 50) return `PIP-dominant (${pipPct}%) - personal injury focus.`;
    if (insPct > 80) return `Commercial insurance driven (${insPct}%).`;
    if (pipPct > 30) return `Mixed: ${insPct}% Ins, ${pipPct}% PIP, ${lopPct}% LOP.`;
    return `Insurance-heavy (${insPct}%) with minimal PIP.`;
  };

  // Generate conclusions for Panel D ($/Claim)
  const getDPCConclusion = (name, data) => {
    const dataWithDPC = addDollarPerClaim(data);
    const julDPC = dataWithDPC[0].dollarPerClaim;
    const decDPC = dataWithDPC[5].dollarPerClaim;
    const change = julDPC > 0 ? Math.round((decDPC - julDPC) / julDPC * 100) : 0;
    const totals = calcPeriodTotals(data);
    const avg = Math.round(totals.collections / totals.claims);
    
    if (change >= 5) return `Efficiency UP ${change}% ($${julDPC}→$${decDPC}). Strong.`;
    if (change <= -10) return `⚠️ Efficiency DOWN ${Math.abs(change)}% ($${julDPC}→$${decDPC}). Investigate.`;
    if (change < 0) return `Slight decline ${change}% ($${julDPC}→$${decDPC}). Monitor.`;
    return `Stable at ~$${avg}/claim.`;
  };

  const formatCurrency = (value) => {
    if (Math.abs(value) >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (Math.abs(value) >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value.toFixed(0)}`;
  };

  // Pie chart colors
  const MODALITY_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#6b7280']; // MRI, CT, PET, Other
  const PAYER_COLORS = ['#2563eb', '#dc2626', '#f59e0b', '#8b5cf6']; // Insurance, PIP, LOP, Research

  // Mini pie chart for modality/payer mix - LARGER
  const MiniPie = ({ data, colors }) => (
    <div className="text-center">
      <ResponsiveContainer width="100%" height={120}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={45} innerRadius={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} (${((value / data.reduce((s, d) => s + d.value, 0)) * 100).toFixed(0)}%)`, name]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {data.filter(d => d.value > 0).map((d, i) => (
          <span key={d.name} className="text-xs px-1.5 py-1 rounded font-medium" style={{ backgroundColor: colors[i] + '30', color: colors[i] }}>
            {d.name}: {((d.value / data.reduce((s, x) => s + x.value, 0)) * 100).toFixed(0)}%
          </span>
        ))}
      </div>
    </div>
  );

  // Get border color based on region
  const getRegionBorder = (region) => region === 'jax' ? 'border-l-4 border-blue-500' : 'border-l-4 border-green-500';
  const getRegionText = (region) => region === 'jax' ? 'text-blue-800' : 'text-green-800';

  return (
    <div className="p-6 bg-gray-50 min-h-screen max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white border-b-4 border-double border-gray-800 pb-4 mb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 tracking-wide">{reportTitle}</h1>
          <p className="text-lg text-gray-600 mt-2">Mark Grnja Group • Medical Imaging Centers</p>
          <p className="text-base text-gray-500 mt-1">{reportPeriod} • 6-Month Trailing Analysis (Jul - Dec 2025)</p>
        </div>
      </div>

      {/* Panel A: Claims Billed Trend */}
      <div className="bg-white rounded-lg shadow p-5 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-2">PANEL A: Activity Trend (Claims Billed)</h2>
        
        {/* Methodology */}
        <div className="bg-gray-100 rounded p-3 mb-4">
          <p className="text-sm text-gray-700"><strong>Methodology:</strong> Total claims billed per month from Airtable "# of CLAIMS BILLED" field. Shows whether scan volume is growing, stable, or declining. If collections drop but claims stay flat, the issue is efficiency—not volume.</p>
        </div>
        
        {/* Individual Centers - 6 columns */}
        <div className="grid grid-cols-6 gap-3 mb-4">
          {centerConfigs.map((center) => (
            <div key={center.name} className={`${getRegionBorder(center.region)} pl-3 py-2`}>
              <p className={`text-sm font-bold ${getRegionText(center.region)} mb-2`}>{center.name}</p>
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={center.data}>
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} width={35} />
                  <Tooltip formatter={(v) => [v, 'Claims']} />
                  <Bar dataKey="claims" fill={center.color} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-700 mt-2">Avg: <strong>{Math.round(calcPeriodTotals(center.data).claims / 6)}</strong>/mo</p>
              <p className="text-xs text-gray-600 mt-1 italic">{getClaimsConclusion(center.name, center.data)}</p>
            </div>
          ))}
        </div>

        {/* Regional Rollups */}
        <div className="grid grid-cols-3 gap-5 pt-4 border-t-2">
          <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 rounded-r p-3">
            <p className="text-base font-bold text-blue-800 mb-2">JACKSONVILLE TOTAL</p>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={jaxConsolidated}>
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={40} />
                <Tooltip formatter={(v) => [v, 'Claims']} />
                <Bar dataKey="claims" fill="#1e40af" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-blue-800 mt-2">Avg: <strong>{Math.round(jaxTotals.claims / 6)}</strong> claims/mo | Total: <strong>{jaxTotals.claims.toLocaleString()}</strong></p>
            <p className="text-xs text-blue-700 mt-1 italic">Region volume stable—not causing collection decline.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-3 bg-green-50 rounded-r p-3">
            <p className="text-base font-bold text-green-800 mb-2">SE FLORIDA TOTAL</p>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={seflConsolidated}>
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={40} />
                <Tooltip formatter={(v) => [v, 'Claims']} />
                <Bar dataKey="claims" fill="#166534" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-green-800 mt-2">Avg: <strong>{Math.round(seflTotals.claims / 6)}</strong> claims/mo | Total: <strong>{seflTotals.claims.toLocaleString()}</strong></p>
            <p className="text-xs text-green-700 mt-1 italic">Upward trend driven by South Miami growth.</p>
          </div>
          <div className="border-l-4 border-gray-500 pl-3 bg-gray-100 rounded-r p-3">
            <p className="text-base font-bold text-gray-800 mb-2">GROUP TOTAL</p>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={groupConsolidated}>
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={40} />
                <Tooltip formatter={(v) => [v, 'Claims']} />
                <Bar dataKey="claims" fill="#374151" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-800 mt-2">Avg: <strong>{Math.round(groupTotals.claims / 6)}</strong> claims/mo | Total: <strong>{groupTotals.claims.toLocaleString()}</strong></p>
            <p className="text-xs text-gray-700 mt-1 italic">Group activity stable—volume is not the issue.</p>
          </div>
        </div>
      </div>

      {/* Panel B: Modality Mix */}
      <div className="bg-white rounded-lg shadow p-5 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-2">PANEL B: Modality Mix (6-Month Period)</h2>
        
        {/* Methodology */}
        <div className="bg-gray-100 rounded p-3 mb-4">
          <p className="text-sm text-gray-700"><strong>Methodology:</strong> Breakdown of scan types (MRI, CT, PET, Other) from Airtable modality fields. Different modalities have different reimbursement rates. If mix shifts toward lower-paying modalities, collections drop even with stable volume.</p>
        </div>
        
        {/* Individual Centers - 6 columns */}
        <div className="grid grid-cols-6 gap-3 mb-4">
          {centerTotals.map((center) => (
            <div key={center.name} className={`${getRegionBorder(center.region)} pl-3 py-2`}>
              <p className={`text-sm font-bold ${getRegionText(center.region)} mb-2`}>{center.name}</p>
              <MiniPie 
                data={[
                  { name: 'MRI', value: center.totals.mri },
                  { name: 'CT', value: center.totals.ct },
                  { name: 'PET', value: center.totals.pet },
                  { name: 'Other', value: center.totals.other },
                ]}
                colors={MODALITY_COLORS}
              />
              <p className="text-xs text-gray-600 mt-2 italic">{getModalityConclusion(center.name, center.totals)}</p>
            </div>
          ))}
        </div>

        {/* Regional Rollups */}
        <div className="grid grid-cols-3 gap-5 pt-4 border-t-2">
          <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 rounded-r p-3">
            <p className="text-base font-bold text-blue-800 mb-2">JACKSONVILLE TOTAL</p>
            <MiniPie 
              data={[
                { name: 'MRI', value: jaxTotals.mri },
                { name: 'CT', value: jaxTotals.ct },
                { name: 'PET', value: jaxTotals.pet },
                { name: 'Other', value: jaxTotals.other },
              ]}
              colors={MODALITY_COLORS}
            />
            <p className="text-xs text-blue-700 mt-2 italic">MRI-only region—no modality shift impacting collections.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-3 bg-green-50 rounded-r p-3">
            <p className="text-base font-bold text-green-800 mb-2">SE FLORIDA TOTAL</p>
            <MiniPie 
              data={[
                { name: 'MRI', value: seflTotals.mri },
                { name: 'CT', value: seflTotals.ct },
                { name: 'PET', value: seflTotals.pet },
                { name: 'Other', value: seflTotals.other },
              ]}
              colors={MODALITY_COLORS}
            />
            <p className="text-xs text-green-700 mt-2 italic">Diversified mix stable—CT/PET provides higher-yield scans.</p>
          </div>
          <div className="border-l-4 border-gray-500 pl-3 bg-gray-100 rounded-r p-3">
            <p className="text-base font-bold text-gray-800 mb-2">GROUP TOTAL</p>
            <MiniPie 
              data={[
                { name: 'MRI', value: groupTotals.mri },
                { name: 'CT', value: groupTotals.ct },
                { name: 'PET', value: groupTotals.pet },
                { name: 'Other', value: groupTotals.other },
              ]}
              colors={MODALITY_COLORS}
            />
            <p className="text-xs text-gray-700 mt-2 italic">Mix unchanged—modality is not causing collection issues.</p>
          </div>
        </div>
      </div>

      {/* Panel C: Payer Mix */}
      <div className="bg-white rounded-lg shadow p-5 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-2">PANEL C: Payer Mix (6-Month Period)</h2>
        
        {/* Methodology */}
        <div className="bg-gray-100 rounded p-3 mb-4">
          <p className="text-sm text-gray-700"><strong>Methodology:</strong> Breakdown by payer type (Insurance, PIP, LOP, Research) from Airtable. Each payer has different collection rates and timing. A shift in payer mix could impact overall collection performance.</p>
        </div>
        
        {/* Individual Centers - 6 columns */}
        <div className="grid grid-cols-6 gap-3 mb-4">
          {centerTotals.map((center) => (
            <div key={center.name} className={`${getRegionBorder(center.region)} pl-3 py-2`}>
              <p className={`text-sm font-bold ${getRegionText(center.region)} mb-2`}>{center.name}</p>
              <MiniPie 
                data={[
                  { name: 'Ins', value: center.totals.insurance },
                  { name: 'PIP', value: center.totals.pip },
                  { name: 'LOP', value: center.totals.lop },
                  { name: 'Rsrch', value: center.totals.research },
                ]}
                colors={PAYER_COLORS}
              />
              <p className="text-xs text-gray-600 mt-2 italic">{getPayerConclusion(center.name, center.totals)}</p>
            </div>
          ))}
        </div>

        {/* Regional Rollups */}
        <div className="grid grid-cols-3 gap-5 pt-4 border-t-2">
          <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 rounded-r p-3">
            <p className="text-base font-bold text-blue-800 mb-2">JACKSONVILLE TOTAL</p>
            <MiniPie 
              data={[
                { name: 'Ins', value: jaxTotals.insurance },
                { name: 'PIP', value: jaxTotals.pip },
                { name: 'LOP', value: jaxTotals.lop },
                { name: 'Rsrch', value: jaxTotals.research },
              ]}
              colors={PAYER_COLORS}
            />
            <p className="text-xs text-blue-700 mt-2 italic">PIP-heavy ({Math.round(jaxTotals.pip / (jaxTotals.insurance + jaxTotals.pip + jaxTotals.lop) * 100)}%)—payer mix stable.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-3 bg-green-50 rounded-r p-3">
            <p className="text-base font-bold text-green-800 mb-2">SE FLORIDA TOTAL</p>
            <MiniPie 
              data={[
                { name: 'Ins', value: seflTotals.insurance },
                { name: 'PIP', value: seflTotals.pip },
                { name: 'LOP', value: seflTotals.lop },
                { name: 'Rsrch', value: seflTotals.research },
              ]}
              colors={PAYER_COLORS}
            />
            <p className="text-xs text-green-700 mt-2 italic">Commercial-driven ({Math.round(seflTotals.insurance / (seflTotals.insurance + seflTotals.pip + seflTotals.lop + seflTotals.research) * 100)}%)—expect slower collections.</p>
          </div>
          <div className="border-l-4 border-gray-500 pl-3 bg-gray-100 rounded-r p-3">
            <p className="text-base font-bold text-gray-800 mb-2">GROUP TOTAL</p>
            <MiniPie 
              data={[
                { name: 'Ins', value: groupTotals.insurance },
                { name: 'PIP', value: groupTotals.pip },
                { name: 'LOP', value: groupTotals.lop },
                { name: 'Rsrch', value: groupTotals.research },
              ]}
              colors={PAYER_COLORS}
            />
            <p className="text-xs text-gray-700 mt-2 italic">Payer mix stable—not driving collection changes.</p>
          </div>
        </div>
      </div>

      {/* Panel D: $/Claim Efficiency */}
      <div className="bg-white rounded-lg shadow p-5 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-2 border-b pb-2">PANEL D: Collection Efficiency ($/Claim)</h2>
        
        {/* Methodology */}
        <div className="bg-gray-100 rounded p-3 mb-4">
          <p className="text-sm text-gray-700"><strong>Methodology:</strong> Total Collections ÷ Total Claims Billed = $/Claim. This is the key efficiency metric. If volume, modality, and payer mix are all stable but $/Claim is declining, the problem is collection execution—billing errors, denial rates, or follow-up failures.</p>
        </div>
        
        {/* Individual Centers - 6 columns */}
        <div className="grid grid-cols-6 gap-3 mb-4">
          {centerConfigs.map((center) => {
            const totals = calcPeriodTotals(center.data);
            const dataWithDPC = addDollarPerClaim(center.data);
            const julDPC = dataWithDPC[0].dollarPerClaim;
            const decDPC = dataWithDPC[5].dollarPerClaim;
            const change = julDPC > 0 ? Math.round((decDPC - julDPC) / julDPC * 100) : 0;
            return (
              <div key={center.name} className={`${getRegionBorder(center.region)} pl-3 py-2`}>
                <p className={`text-sm font-bold ${getRegionText(center.region)} mb-2`}>{center.name}</p>
                <ResponsiveContainer width="100%" height={140}>
                  <LineChart data={dataWithDPC}>
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} width={40} domain={['dataMin - 50', 'dataMax + 50']} />
                    <Tooltip formatter={(v) => [`$${v}`, '$/Claim']} />
                    <Line type="monotone" dataKey="dollarPerClaim" stroke={center.color} strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-700 mt-2">
                  Avg: <strong>${Math.round(totals.collections / totals.claims)}</strong> | 
                  <span className={`font-bold ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}> {change >= 0 ? '+' : ''}{change}%</span>
                </p>
                <p className="text-xs text-gray-600 mt-1 italic">{getDPCConclusion(center.name, center.data)}</p>
              </div>
            );
          })}
        </div>

        {/* Regional Rollups */}
        <div className="grid grid-cols-3 gap-5 pt-4 border-t-2">
          <div className="border-l-4 border-blue-500 pl-3 bg-blue-50 rounded-r p-3">
            <p className="text-base font-bold text-blue-800 mb-2">JACKSONVILLE TOTAL</p>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={addDollarPerClaim(jaxConsolidated)}>
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={45} domain={['dataMin - 30', 'dataMax + 30']} />
                <Tooltip formatter={(v) => [`$${v}`, '$/Claim']} />
                <Line type="monotone" dataKey="dollarPerClaim" stroke="#1e40af" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-blue-800 mt-2">Period Avg: <strong>${Math.round(jaxTotals.collections / jaxTotals.claims)}</strong>/claim</p>
            <p className="text-xs text-blue-700 mt-1 italic">⚠️ Declining trend—collection efficiency is the problem.</p>
          </div>
          <div className="border-l-4 border-green-500 pl-3 bg-green-50 rounded-r p-3">
            <p className="text-base font-bold text-green-800 mb-2">SE FLORIDA TOTAL</p>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={addDollarPerClaim(seflConsolidated)}>
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={45} domain={['dataMin - 30', 'dataMax + 30']} />
                <Tooltip formatter={(v) => [`$${v}`, '$/Claim']} />
                <Line type="monotone" dataKey="dollarPerClaim" stroke="#166534" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-green-800 mt-2">Period Avg: <strong>${Math.round(seflTotals.collections / seflTotals.claims)}</strong>/claim</p>
            <p className="text-xs text-green-700 mt-1 italic">Improving trend—South Miami ramp-up helping.</p>
          </div>
          <div className="border-l-4 border-gray-500 pl-3 bg-gray-100 rounded-r p-3">
            <p className="text-base font-bold text-gray-800 mb-2">GROUP TOTAL</p>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={addDollarPerClaim(groupConsolidated)}>
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} width={45} domain={['dataMin - 30', 'dataMax + 30']} />
                <Tooltip formatter={(v) => [`$${v}`, '$/Claim']} />
                <Line type="monotone" dataKey="dollarPerClaim" stroke="#374151" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-sm text-gray-800 mt-2">Period Avg: <strong>${Math.round(groupTotals.collections / groupTotals.claims)}</strong>/claim</p>
            <p className="text-xs text-gray-700 mt-1 italic">Group efficiency flat—JAX decline offset by SE FL gains.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 border-t pt-4 mt-8">
        <p>Generated by Benefique • Data Source: Imaging Center Activity Airtable (Activity, Collections)</p>
        <p className="mt-1">Report Period: July - December 2025</p>
      </div>
    </div>
  );
}
