import dotenv from "dotenv";
dotenv.config();

// Imports the Google Analytics Data API client library.
import { BetaAnalyticsDataClient } from "@google-analytics/data";

const clientEmail = process.env.CLIENT_EMAIL;
const privateKey = process.env.PRIVATE_KEY?.replace(/\\n/g, "\n");;

const analyticsDataClient = new BetaAnalyticsDataClient({
  scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  credentials: {
    client_email: clientEmail,
    private_key: privateKey,
  },
});

async function runReport(propertyId: string) {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "2020-03-31",
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "city",
      },
    ],
    metrics: [
      {
        name: "activeUsers",
      },
    ],
  });

  console.log("Report result:", response);
}

// Google Analytics 4 property ID before running the sample.
runReport("377482069");