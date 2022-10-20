export const getPets = async (type = '', query = '') => {
  const searchParams = new URLSearchParams({ type, query });
  const requestUrl = `/animals?${searchParams.toString()}`;

  console.log(`This is requestUrl in getPets: ${requestUrl} `)

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  console.log(`This is the answer in getPets: `)
  console.log(json)

  return json;
};

export const getPetDetails = async (id) => {
  const requestUrl = `/animals/${id}`;

  console.log(`This is requestUrl in getPetDetails: ${requestUrl} `)

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  console.log(`This is the answer in getPetDetails: `)
  console.log(json)

  return json;
};

export const getPetTypes = async () => {
  const requestUrl = `/types`;

  console.log(`This is requestUrl in getPetTypes: ${requestUrl} `)

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  console.log(`This is the answer in getPetTypes: `)
  console.log(json)


  return json;
};
