import providers from "../data/providers.json";

export const fetchProviders = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(providers), 800);
  });
};

export const fetchProviderById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const provider = providers.find(p => p.id === id);
      provider ? resolve(provider) : reject("Not found");
    }, 800);
  });
};