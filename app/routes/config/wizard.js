import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {
      user: {
        name: 'Gogu'
      },
      network: {
        lan: {
          interface: '',
          custom_interface: '',
          wifi: {
            ssid: '',
            password: ''
          },
          mode: '',
          dhcp: {
            ip: '',
            netmask: '',
            range: '',
            dns: true
          },
          static: {
            ip: '',
            netmask: '',
            gateway: '',
            dns: ''
          }
        },
        wan: {
          interface: '',
          wifi: {
            ssid: '',
            password: ''
          },
          mode: '',
          static: {
            ip: '',
            netmask: '',
            gateway: '',
            dns: true
          }
        }
      },
      ssh: {
        enabled: false,
        keys: '',
        port: 22
      }
    };
  }
});
