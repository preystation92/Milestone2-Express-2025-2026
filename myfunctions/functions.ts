export async function fetchData<T>(url: string): Promise<T> {
  let response = await fetch(url)
  let data = await response.json()
  return data as T
}

