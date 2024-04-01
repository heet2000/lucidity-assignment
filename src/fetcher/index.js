import axios from "axios";

export const fetchInventoryData = async (handleRowData) => {
    try {
      const response = await axios.get("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory");
      handleRowData(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };
  