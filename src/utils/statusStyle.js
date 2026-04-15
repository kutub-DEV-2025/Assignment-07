export const getStatusStyle = (status) => {
  const s = status?.toLowerCase().trim();

  const map = {
    "overdue": "bg-[#FEF3F2] text-[#B42318] border-[#FEE4E2]",
    "almost due": "bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]",
    "on-track": "bg-[#ECFDF3] text-[#027A48] border-[#ABEFC6]",
  };
  console.log(s)
  return map[s] || "bg-gray-100 text-gray-500 border-gray-200";
};