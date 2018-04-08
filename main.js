
new Vue({
	el: '#app',
	data: {
		name: 'Gory the Sample',
    hp: 8,
    attributes: {
        strength: 15,
        dexterity: 16,
        constitution: 9,
        wisdom: 10,
        intelligence: 13,
        charisma: 8
    },
    words: [],
    saving_throws: {
        hardiness: 14,
        evasion: 13,
        spirit: 15
    },
    power_points: 6,
    level: 1,
    armor: {
        type: 'heavy',
        ac_mod: -6,
        sv_throws: ['Hardiness', 'Evasion']
    },
    facts: [
        'This is a sample character',
        'Meant to show of the character creator',
        'Feel free to make your own character'
        ],
    ac: 18
	},
	computed: {
    // a computed getter
  	str_mod: function () {
      // `this` points to the vm instance
      return this.attributes.strength.
    }
  },
	methods: {
	  calc_attr_mod() {

	  }
	}
})
