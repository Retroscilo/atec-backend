module.exports = ({ env }) => ({
  upload: {
    provider: "exoscale",
    providerOptions: {
      accessKeyId: env("EXO041cc5cd8e0ee5e83243d717"),
      secretAccessKey: env("sUhactykOmCQHWVRkPYnhxE-H0_F_dJBNAC-On63A6I"),
      region: env("CH-GVA-2"),
      params: {
        Bucket: env("atec"),
      },
    },
  },
});

/* module.exports = {
  upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
          bucketName: 'atec',
          publicFiles: true,
          uniform: true,
          serviceAccount: {
            "type": "service_account",
            "project_id": "inner-root-246208",
            "private_key_id": "132df532cacb6df0d619504868ceb86297aaf438",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0NQifd1DTNKWD\nolSNW3ls3KD0IPGCOODlYYhcKDefybyOtHKtSiBzRORBVB8zMahjbH+iidrUtBEM\nLJqB7+p7zN5I+PUYd6l1ftC/ppkM59FBieDz8qOjXXXdhsMzUU8tjZebKUb/3dGw\nMbWhzAw0j2fM9Wtqdml46eJ/Ask7n60/MbD5LHIGJ80sYgMp4Q6PphQD0fn3fyM/\nx0YM0Cgf2MpQRnoUftIVPCZKCX2KRPAGFnheP9Y4E7tbvLrvJbrIGTShGO7RFF2+\nxyINjVYsec6mkIqAv17nTX52jDa3KqyV9fx3957n3MUTzf47pgc+ryPhe53XTJGx\nluewIivZAgMBAAECggEABhKz+NDP8uA3ND+WHyHuLoikbXnHPdLeJGjULDvoPPyy\n27HR3AxvmcbgdOGpgAOMR9Z+GiuQagLsAKenqNmdosCxnI60TtfoiHbGwPCzv3s4\nAoALqlj64gxqJpYuMaZrt06qZW6fj4upj4krVHmwjxxmnIIIVdEKBqrGKO7eeoF9\nVGZs/UTbQ6xAlrDdTj/J83TTaD3DEdeK1GXQJJJf9yQQ5rXKvETOHFVsSMNZ49/u\nEfrF6H97AYHUmr35nV/6Aco9sUV6UvVJOKFiZjg4RiDp96LsdYM3zAt1KGzHLuKU\npnUJV7hxYJEgtGAmqNo/Fw8194fWw9N9hbcq4VkkIQKBgQD5rAz1YM+AGH2DBoiw\n7C0KqZeYJu/9ZLNtDkqidV5jD/Pt/zs3RNsMENUPhqScQ7et/W0OzT4eCu+AZoSL\nyOJW//VOP01DwhprOHt7bkaQPLAkhFAtFnDSTxBCJmE0jTu2LuHqghcfB5kjZZE2\nmW+s8Zz83thqYNoRzsL/QLSgYQKBgQC4xkX31LYw9xD/lNKr3oB0tTZUNs8HRLt+\nVP8ayeCaiTuZa2BfpqWKZREsCj4MEDnH3IwohkEqMGCBMMI0hxSPyCtgy5JtTQEG\nqLVT4UIqosmq/02NkYWG11nqBEirLxqzHOsXKTwv1u7TtaSz7bzxybX8rOqJscrL\n5g0cz1ceeQKBgQC1s1fO8ECy2Z/mTkgGcispelj/+z5m6/WEpYT9jGs/rul4SGqB\nA5RiyJE2dmev7bxsXGYVApt1Y8H/cRx/WpgWdrrA0mLZsBZn97guEQg7il8qhDyR\nQ6ah97Y+Xg4aH7rYEHCLqVdIVtBFKXKwCKR0eXYltcxMRuYNVasl9qI9oQKBgG5j\n9pVT/e1PDlbDoQGRkwkm4mh5vkJHbATT3v0wMwHgjzzfi9pZg3klXJcFH4CxiPPA\n7fOgEfqUoHNOoBglw8ELA+92b+rhIIXL8VlFsPQsAXQpxzmXAUFIE63eFVRAdiEg\nW8uglRa3wEO3t8jPdhy2OAXXgN/22oPq01atAQ1xAoGAW/M+Tx1h1DFDDCQ1xzP2\nx8GZ2nXzmRPokpzyAZXFHUJfqYBK5jCyLAIQLR4ce6DuQqr4DnLgXWc5U9KlFD2+\nNmo1C0N+eusQwdnTm/qV2Xai73ZkD940s1qzRYz2st+chLDofkbT92EP59xnNjao\nwy5HZkVSLSVs5FSXkS1V/K8=\n-----END PRIVATE KEY-----\n",
            "client_email": "strapi-973@inner-root-246208.iam.gserviceaccount.com",
            "client_id": "116144133408694404373",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/strapi-973%40inner-root-246208.iam.gserviceaccount.com"
          },          
          baseUrl: 'https://storage.googleapis.com/atec',
          basePath: '',
      },
    },
} */
