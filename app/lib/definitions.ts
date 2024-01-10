export type DBProperty = {
  id: string;
  address: string;
  rent: number;
};

export type Property = DBProperty & {
  userId: string;
  portalId: string;
};
