export async function getEcofudPaymentsInfo() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/payments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
