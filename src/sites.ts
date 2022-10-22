function getSiteIcon(name: string): string {
  return require(`@/assets/site_icons/${name}.png`);
}

export interface SiteInfo {
  name: string;
  icon: string;
}

const sites: {[key: string]: SiteInfo} = {
  'tracker.m-team.cc': {
    name: 'M-Team',
    icon: getSiteIcon('m-team'),
  },
  'tracker-public.tjupt.org': {
    name: '北洋园',
    icon: getSiteIcon('tjupt'),
  },
  'tracker.dicmusic.club': {
    name: '海豚',
    icon: getSiteIcon('dicmusic'),
  },
  'tracker.pterclub.com': {
    name: 'PT之友',
    icon: getSiteIcon('pterclub'),
  },
  't.pthome.net': {
    name: 'PTHOME',
    icon: getSiteIcon('pthome'),
  },
  't.audiences.me': {
    name: '观众',
    icon: getSiteIcon('audiences'),
  },
  'tracker.keepfrds.com': {
    name: 'FRDS',
    icon: getSiteIcon('keepfrds'),
  },
  'springsunday.net': {
    name: 'SSD',
    icon: getSiteIcon('springsunday'),
  },
  'hdchina.org': {
    name: 'HDChina',
    icon: getSiteIcon('hdchina'),
  },
  'chdbits.co': {
    name: 'CHDBits',
    icon: getSiteIcon('chdbits'),
  },
  'hdhome.org': {
    name: 'HDHome',
    icon: getSiteIcon('hdhome'),
  },
  'u2.dmhy.org': {
    name: 'U2',
    icon: getSiteIcon('u2'),
  },
};

export default sites;
