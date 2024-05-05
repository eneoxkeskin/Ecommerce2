
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    DB_URI: DB_URI,
    API: API,
    NEXTAUTH_SECRET: NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: GOOGLE_CLIENT_SECRET,
    CLOUDINARY_CLOUD_NAME: CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: CLOUDINARY_API_KEY,
    CLOUDINRAY_API_SECRET: CLOUDINRAY_API_SECRET,
    
  },
};

module.exports = nextConfig;
