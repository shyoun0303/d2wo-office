/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));


WA.onInit().then(() => {
    console.log('Current WA.ui: ', WA.ui);
    console.log('Current WA.nav: ', WA.nav);
    console.log('Current WA.controls: ', WA.controls);
    console.log('Current WA.chat: ', WA.chat);
    console.log('Current WA.sound: ', WA.sound);
    console.log('Current WA.room: ', WA.room);
    console.log('Current WA.state: ', WA.state);
    console.log('Current WA.player: ', WA.player);
    console.log('Current WA.player.name: ', WA.player.name);
});


//팝업띄워서 시간보기
let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})
WA.room.onLeaveZone('clock', closePopUp)
function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}


//채팅보내기
WA.room.onEnterZone('chat', () => {
    WA.chat.sendChatMessage('Hello ' + WA.player.name, 'Mr Robot');
});
WA.room.onLeaveZone('chat', endChat);
function endChat(){
    WA.chat.sendChatMessage('Bye ' + WA.player.name, 'Mr Robot');
}


//네비게이션 탭이동
WA.room.onEnterZone('nav01', () => {
    WA.nav.openTab("https://youtu.be/_PYP_CChOqk");
});
WA.room.onLeaveZone('nav01', () => {
    
});


//네비게이션 본창이동
WA.room.onEnterZone('nav02', () => {
    WA.nav.goToPage("https://youtu.be/_PYP_CChOqk");
});
WA.room.onLeaveZone('nav02', () => {
    
});



//네비게이션 본창이동
WA.room.onEnterZone('nav03', () => {
    WA.nav.openCoWebSite("https://www.youtube.com/embed/gW-5aG377Cw", true, "allowfullscreen");
});
WA.room.onLeaveZone('nav03', () => {
    WA.nav.closeCoWebSite();
});


