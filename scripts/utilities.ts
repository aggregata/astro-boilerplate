export const sleep = (miliseconds: number) => new Promise((r) => setTimeout(r, miliseconds));

export const local = (key: string, value: any = null): object => {
  if (value != null) localStorage[key] = JSON.stringify(value);
  return localStorage?.[key] ? JSON.parse(localStorage[key]) : {};
};
