export type prayerField = {
  name: string;
  start: string;
  end: string;
};

export type PrayerType = {
  fajr: prayerField;
  dhuhr: prayerField;
  asr: prayerField;
  maghrib: prayerField;
  isha: prayerField;
};
