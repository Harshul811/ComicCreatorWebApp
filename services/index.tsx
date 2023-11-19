import axios from 'axios';

const API_URL = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud";

const query = async (payload: { inputs: string }) => {
    try {
        console.log(payload);
      const response = await axios.post(API_URL, payload, {
        headers: {
          Accept: 'image/png',
          Authorization: 'Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM',
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      });

      const imageBase64 = Buffer.from(response.data, 'binary').toString('base64');
      const imageSrc = `data:image/png;base64,${imageBase64}`;
      return imageSrc;
    } catch (error) {
      console.error('Error querying API:', error);
      return null;
    }
  };

  export const handleQuery = (input: string) => {
    const result = query({ inputs: input });
    if (result === null){
        return '';
    }

    return result.toString();
  };