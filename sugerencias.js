```const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
} = require("discord.js");
const config = require('./../../config.json')
const { ButtonStyle } = require('discord.js');
const Discord = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('sugerencia')
      .setDescription('Envia una sugerencia al staff')
      .addStringOption(option =>
          option.setName('sugerencia')
              .setDescription('Indica tu sugerencia')
              .setRequired(true)
      ),
  async execute(interaction) {
      const sugerencia = interaction.options.getString('sugerencia')

      const embed = {
          title: `:ViperZ:・Nueva Sugerencia ${interaction.guild.name}`,
          fields: [
              { name: ':User:・User', value: `${interaction.user}` },
              { name: ':Opinion:・Sugerencia', value: `${sugerencia}` },
          ],
          footer: { text: `Sistema de Sugerencias・${interaction.guild.name}`}
      };

      const targetChannel = interaction.guild.channels.cache.get('1202302496714788994');
      const sentMessage = await targetChannel.send({ embeds: [embed] });

      sentMessage.react(':Confirm:');
      sentMessage.react(':X_:');

   await interaction.reply({
          content: `Sugerencia enviada a <#${targetChannel.id}> correctamente.`,
          ephemeral: true
      });
  },
};```
