import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import {generateAuthCode} from 'steam-totp';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


const code = generateAuthCode('GxX96AttNnXSPHLU0sorLrdeONY=');
console.log(code);

import * as steam from "steam";
import * as util from "util";
import * as fs from "fs";
import * as crypto from "crypto";
import * as dota2 from "dota2";
const steamClient = new steam.SteamClient();
const steamUser = new steam.SteamUser(steamClient);
const steamFriends = new steam.SteamFriends(steamClient);
const Dota2 = new dota2.Dota2Client(steamClient, true);

// Load config
const config = {
  steam_name: "go2olymp_bot2",
  steam_user: "go2olymp_bot2",
  steam_pass: "iUO.Z3Utoea3",
  steam_guard_code: generateAuthCode('GxX96AttNnXSPHLU0sorLrdeONY=')
};


// Load in server list if we've saved one before
if (fs.existsSync('servers')) {
  steam.servers = JSON.parse(String(fs.readFileSync('servers')));
}

/* Steam logic */
const onSteamLogOn = function onSteamLogOn(logonResp) {
    if (logonResp.eresult == steam.EResult.OK) {
      steamFriends.setPersonaState(steam.EPersonaState.Busy); // to display your steamClient's status as "Online"
      steamFriends.setPersonaName(config.steam_name); // to change its nickname
      util.log("Logged on.");
      Dota2.launch();
      Dota2.on("ready", function() {
        console.log("Node-dota2 ready.");
        /* Note:  Should not declare new event listeners nested inside of
        'ready', else you could end up with duplicated handlers if 'ready'
        is fired multiple times.  Exception is made within this test file
        for the same of keeping relevant samples together. */
        /* INVENTORY */
        // Dota2.setItemPositions([[ITEM ID, POSITION]]);
        // Dota2.deleteItem(ITEM ID);
        /* MATCHES */
        // Event based
        // Dota2.requestMatchDetails(246546269);
        // Dota2.on("matchDetailsData", function (matchId, matchData) {
        //     console.log(JSON.stringify(matchData, null, 2));
        // });
        // Dota2.requestMatchmakingStats();
        // Dota2.on("matchmakingStatsData", function(searchingPlayersByGroup, disabledGroups, matchmakingStatsResponse) {
        //     console.log(JSON.stringify(matchmakingStatsResponse, null, 2));
        // });
        // Callback based
        // Dota2.requestMatchDetails(246546269, function(err, body) {
        //     if (err) throw err;
        //     console.log(JSON.stringify(body));
        // });
        /* COMMUNITY */
        // Event based
        // Dota2.requestProfileCard(28956443);
        // Dota2.on("profileCardData", function (accountId, profileData) {
        //     console.log(JSON.stringify(profileData, null, 2));
        // });
        // Dota2.requestPassportData(28956443);
        // Dota2.on("passportData", function (accountId, passportData) {
        //     console.log(passportData.league_guesses.stamped_players);
        // });
        // Dota2.requestHallOfFame();
        // Dota2.on("hallOfFameData", function(week, featuredPlayers, featuredFarmer, hallOfFameResponse) {
        //     console.log(JSON.stringify(hallOfFameResponse, null, 2));
        // });
        // Dota2.requestPlayerInfo(28956443);
        // Dota2.on("playerInfoData", function (playerInfo) {
        //     console.log(JSON.stringify(playerInfo, null, 2));
        // });
        // Callback based
        // Dota2.requestProfileCard(28956443, function(err, body) {
        //     if (err) throw err;
        //     console.log(JSON.stringify(body));
        // });
        // Dota2.requestPassportData(28956443, function(err, body) {
        //     console.log(JSON.stringify(body));
        // });
        // Dota2.requestHallOfFame(null, function(err, body){
        //     console.log(JSON.stringify(body));
        // });
        /* CHAT */
        // Event based
        // Dota2.joinChat("rj");
        // setTimeout(function(){ Dota2.sendMessage("wowoeagnaeigniaeg", "rj"); }, 5000);
        // setTimeout(function(){ Dota2.leaveChat("rj"); }, 10000);
        /* GUILD */
        // Dota2.requestGuildData();
        // Dota2.on("guildOpenPartyData", function(guildId, openParties){
        // Event based
        // Dota2.inviteToGuild(guildId, 28956443);
        // Dota2.setGuildAccountRole(guildId, 28956443, 2);
        // Dota2.cancelInviteToGuild(guildId, 75028261);
        // Callback based
        // Dota2.inviteToGuild(guildId, 28956443, function(err, body){
        //     console.log(JSON.stringify(body));
        // });
        // Dota2.cancelInviteToGuild(guildId, 75028261, function(err, body){
        //     console.log(JSON.stringify(body));
        // });
        // Dota2.setGuildAccountRole(guildId, 28956443, 2, function(err, body){
        //     console.log(JSON.stringify(body));
        // });
        // Doing chat stuffs.
        // const guildChannelName = util.format("Guild_%s", guildId);
        // Dota2.joinChat(guildChannelName, Dota2.schema.DOTAChatChannelType_t.DOTAChannelType_Guild);
        // setTimeout(function(){ Dota2.sendMessage("wowoeagnaeigniaeg", guildChannelName); }, 5000);
        // setTimeout(function(){ Dota2.leaveChat(guildChannelName); }, 10000);
        // });
        /* LOBBIES */
        //  Dota2.createPracticeLobby({"game_name": "node-dota2",
        //                             "server_region": dota2.ServerRegion.PERFECTWORLDTELECOM,
        //                             "game_mode": dota2.schema.DOTA_GameMode.DOTA_GAMEMODE_AR,
        //                             "series_type": 2,
        //                             "game_version": 1,
        //                             "allow_cheats": false,
        //                             "fill_with_bots": false,
        //                             "allow_spectating": true,
        //                             "pass_key": "password",
        //                             "radiant_series_wins": 0,
        //                             "dire_series_wins": 0,
        //                             "allchat": true
        //                             },
        //                             function(err, body){
        //                                  console.log(JSON.stringify(body));
        //                             });
        // setTimeout(function(){
        //     Dota2.leavePracticeLobby(function(err, body){
        //         console.log(JSON.stringify(body));
        //     });
        // }, 60000);
        /* LEAGUES */
        // Dota2.requestLeaguesInMonth(10, 2013, 0, function(err, data) { // November 2013
        //     console.log('Found ' + data.leagues.length + ' leagues full of schedule data :D');
        // });
        /* SOURCETV */
        // Dota2.requestSourceTVGames({});
        // Dota2.on("sourceTVGamesData", function(data) {    // May 2015
        //   console.log('Successfully received SourceTVGames: ' + data.game_list);
        // });
      });
      Dota2.on("unready", function onUnready() {
        console.log("Node-dota2 unready.");
      });
      Dota2.on("chatMessage", function(channel, personaName, message) {
        // util.log([channel, personaName, message].join(", "));
      });
      Dota2.on("guildInvite", function(guildId, guildName, inviter) {
        // Dota2.setGuildAccountRole(guildId, 75028261, 3);
      });
      Dota2.on("unhandled", function(kMsg) {
        util.log("UNHANDLED MESSAGE " + dota2._getMessageName(kMsg));
      });
      // setTimeout(function(){ Dota2.exit(); }, 5000);
    }
  },
  onSteamServers = function onSteamServers(servers) {
    util.log("Received servers.");
    fs.writeFile('servers', JSON.stringify(servers), (err)=>{
      if (err) {if (this.debug) util.log("Error writing ");}
      else {if (this.debug) util.log("");}
    });
  },
  onSteamLogOff = function onSteamLogOff(eresult) {
    util.log("Logged off from Steam.");
  },
  onSteamError = function onSteamError(error) {
    util.log("Connection closed by server: "+error);
  };

steamUser.on('updateMachineAuth', function(sentry, callback) {
  const hashedSentry = crypto.createHash('sha1').update(sentry.bytes).digest();
  fs.writeFileSync('sentry', hashedSentry)
  util.log("sentryfile saved");
  callback({
    sha_file: hashedSentry
  });
});


// Login, only passing authCode if it exists
interface ILogonDetails {
  account_name:string
  password: string
  auth_code?: string
  sha_sentryfile?: any
}

const logOnDetails :ILogonDetails = {
  "account_name": config.steam_user,
  "password": config.steam_pass,
};
if (config.steam_guard_code) logOnDetails.auth_code = config.steam_guard_code;           /*сюда вставить вызов функции steam-totp.getCode(shared_key)*/
//if (config.two_factor_code) logOnDetails.two_factor_code = config.two_factor_code;

try {
  const sentry = fs.readFileSync('sentry');
  if (sentry.length) logOnDetails.sha_sentryfile = sentry;
} catch (beef) {
  util.log("Cannae load the sentry. " + beef);
}

steamClient.connect();
steamClient.on('connected', function() {
  steamUser.logOn(logOnDetails);
});
steamClient.on('logOnResponse', onSteamLogOn);
steamClient.on('loggedOff', onSteamLogOff);
steamClient.on('error', onSteamError);
steamClient.on('servers', onSteamServers);
