module.exports = ({ env }) => ({
  upload: {
    provider: "exoscale",
    providerOptions: {
      accessKeyId: env("ACCESS_KEY_ID"),
      secretAccessKey: ("PRIVATE_KEY"),
      region: "CH-GVA-2",
      params: {
        Bucket: "atec",
      },
    },
  },
});


