const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
   client.user.setStatus('dnd') 
   client.user.setActivity(`${prefix}yardım`); 
};