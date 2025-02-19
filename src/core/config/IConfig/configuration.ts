export type IConfiguration = {
  appName: string | undefined;
  port: number | undefined;
};

export default (): IConfiguration => ({
  appName: process.env.APP_NAME,
  port: parseInt(process.env.PORT || '3000', 10),
});
