import Ember from 'ember';

export default Ember.Controller.extend({
  config: {
    user: {},
    network: {
      lan: {
        interfaces: ['wlan0', 'eth0', 'other'],
        modes: ['dhcp', 'static'],
        dhcp: {
          ip: '10.0.0.1',
          netmask: '255.255.255.0'
        },
      },
      wan: {
        interfaces: ['eth0', 'wlan0', 'other'],
        modes: ['dhcp', 'static']
      }
    },
    ssh: {
      port: 22
    }
  }
});
