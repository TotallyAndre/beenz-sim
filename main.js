function HardReset(){
    localStorage.clear();
}
function SaveGame(){
    localStorage.setItem("lifetimeBeenz", lifetimeBeenz);
    localStorage.setItem("beenz", beenz);
    localStorage.setItem("beenzPower", beenzPower);
    localStorage.setItem("maxBeenz", maxBeenz);
    localStorage.setItem("sacrificeBeenzVal", sacrificeBeenzVal);
    localStorage.setItem("upgradeContainerCost", upgradeContainerCost);
    localStorage.setItem("mMax", mMax);
    localStorage.setItem("mLow", mLow);
    localStorage.setItem("mHigh", mHigh);
    localStorage.setItem("mOptimum", mOptimum);
    localStorage.setItem("autoBeenMK1Cost", autoBeenMK1Cost);
    localStorage.setItem("autoBeenMK1modifier", autoBeenMK1modifier);
    localStorage.setItem("autoBeenMK2Cost", autoBeenMK2Cost);
    localStorage.setItem("autoBeenMK2modifier", autoBeenMK2modifier);
    localStorage.setItem("upgradeCapacityCost", upgradeCapacityCost);
    localStorage.setItem("capacityMod", capacityMod);
    localStorage.setItem("upgradeLabsCost", upgradeLabsCost);
    localStorage.setItem("labsMod", labsMod);
    localStorage.setItem("researchAutoBeenMK3Cost", researchAutoBeenMK3Cost);
    localStorage.setItem("autoBeenMK3modifier", autoBeenMK3modifier);
    localStorage.setItem("researchPowerInjectionCost", researchPowerInjectionCost);
    localStorage.setItem("powerInjectionMod", powerInjectionMod);
    localStorage.setItem("rp", rp);
    localStorage.setItem("bytes", bytes);
    localStorage.setItem("createRPcost", createRPcost);
    localStorage.setItem("formattedLifetimeBeenz", formattedLifetimeBeenz);
    localStorage.setItem("toFixedformattedLifetimeBeenz", toFixedformattedLifetimeBeenz);
    localStorage.setItem("e1", e1);
    localStorage.setItem("e2", e2);
    localStorage.setItem("e3", e3);
    localStorage.setItem("e4", e4);
    localStorage.setItem("gamesBeaten", gamesBeaten);
}
var confirmReset = 0;
function ResetDataPrompt(){
    if (confirmReset == 1){
        confirmReset = 0;
        document.getElementById("reset").innerHTML = 'Reset all data';
        ResetData()
    }
    else {
        document.getElementById("reset").innerHTML = 'Do you really want to reset all data?';
        confirmReset = 1;
    }
}
function ResetData(){
    localStorage.setItem("lifetimeBeenz", 0);
    localStorage.setItem("beenz", 0);
    localStorage.setItem("beenzPower", 1);
    localStorage.setItem("maxBeenz", 50);
    localStorage.setItem("sacrificeBeenzVal", 25);
    localStorage.setItem("upgradeContainerCost", 50);
    localStorage.setItem("mMax", 50);
    localStorage.setItem("mLow", 45);
    localStorage.setItem("mHigh", 49);
    localStorage.setItem("mOptimum", 40);
    localStorage.setItem("autoBeenMK1Cost", 100);
    localStorage.setItem("autoBeenMK1modifier", 0);
    localStorage.setItem("autoBeenMK2Cost", 3000);
    localStorage.setItem("autoBeenMK2modifier", 0);
    localStorage.setItem("upgradeCapacityCost", 1000);
    localStorage.setItem("capacityMod", 2);
    localStorage.setItem("upgradeLabsCost", 10000);
    localStorage.setItem("labsMod", 0);
    localStorage.setItem("researchAutoBeenMK3Cost", 20);
    localStorage.setItem("autoBeenMK3modifier", 0);
    localStorage.setItem("researchPowerInjectionCost", 50);
    localStorage.setItem("powerInjectionMod", 0);
    localStorage.setItem("rp", 0);
    localStorage.setItem("bytes", 0);
    localStorage.setItem("createRPcost", 5);
    localStorage.setItem("formattedLifetimeBeenz", '');
    localStorage.setItem("toFixedformattedLifetimeBeenz", '');
    localStorage.setItem("e1", 0);
    localStorage.setItem("e2", 0);
    localStorage.setItem("e3", 0);
    localStorage.setItem("e4", 0);
    Load()
}
function Load(){
    if ("beenz" in localStorage){
        lifetimeBeenz = Number(localStorage.getItem("lifetimeBeenz"));
        beenz = Number(localStorage.getItem("beenz"));
        beenzPower = Number(localStorage.getItem("beenzPower"));
        maxBeenz = Number(localStorage.getItem("maxBeenz"));
        sacrificeBeenzVal = Number(localStorage.getItem("sacrificeBeenzVal"));
        upgradeContainerCost = Number(localStorage.getItem("upgradeContainerCost"));
        mMax = Number(localStorage.getItem("mMax"));
        mLow = Number(localStorage.getItem("mLow"));
        mHigh = Number(localStorage.getItem("mHigh"));
        mOptimum = Number(localStorage.getItem("mOptimum"));
        autoBeenMK1Cost = Number(localStorage.getItem("autoBeenMK1Cost"));
        autoBeenMK1modifier = Number(localStorage.getItem("autoBeenMK1modifier"));
        autoBeenMK2Cost = Number(localStorage.getItem("autoBeenMK2Cost"));
        autoBeenMK2modifier = Number(localStorage.getItem("autoBeenMK2modifier"));
        upgradeCapacityCost = Number(localStorage.getItem("upgradeCapacityCost"));
        capacityMod = Number(localStorage.getItem("capacityMod"));
        upgradeLabsCost = Number(localStorage.getItem("upgradeLabsCost"));
        labsMod = Number(localStorage.getItem("labsMod"));
        researchAutoBeenMK3Cost = Number(localStorage.getItem("researchAutoBeenMK3Cost"));
        autoBeenMK3modifier = Number(localStorage.getItem("autoBeenMK3modifier"));
        researchPowerInjectionCost = Number(localStorage.getItem("researchPowerInjectionCost"));
        powerInjectionMod = Number(localStorage.getItem("powerInjectionMod"));
        rp = Number(localStorage.getItem("rp"));
        bytes = Number(localStorage.getItem("bytes"));
        createRPcost = Number(localStorage.getItem("createRPcost"));
        formattedLifetimeBeenz = String(localStorage.getItem("formattedLifetimeBeenz"));
        toFixedformattedLifetimeBeenz = String(localStorage.getItem("toFixedformattedLifetimeBeenz"));
        e1 = Number(localStorage.getItem("e1"));
        e2 = Number(localStorage.getItem("e2"));
        e3 = Number(localStorage.getItem("e3"));
        e4 = Number(localStorage.getItem("e4"));
        gamesBeaten = Number(localStorage.getItem("gamesBeaten"));
        document.getElementById("beenzAmount").innerHTML = beenz.toFixed(1);
        document.getElementById('beenzMeter').value = beenz.toFixed(1);
        document.getElementById('beenzPower').innerHTML = beenzPower.toFixed(1);
        document.getElementById('lifetimeBeenz').innerHTML = lifetimeBeenz.toFixed(1);
        document.getElementById('sacrificeBeenzPower').innerHTML = sacrificeBeenzVal.toFixed(1);
        document.getElementById("upgradeContainerCost").innerHTML = upgradeContainerCost;
        document.getElementById("beenzMeter").max = mMax.toFixed(0);
        document.getElementById("beenzMeter").low = mLow.toFixed(0);
        document.getElementById("beenzMeter").high = mHigh.toFixed(0);
        document.getElementById("beenzMeter").optimum = mOptimum.toFixed(0);
        document.getElementById("autoBeenMK1Cost").innerHTML = autoBeenMK1Cost.toFixed(1);
        document.getElementById("autoBeenMK1Amount").innerHTML = (autoBeenMK1modifier * 10).toFixed(0);
        document.getElementById("autoBeenMK2Cost").innerHTML = autoBeenMK2Cost.toFixed(1);
        document.getElementById("autoBeenMK2Amount").innerHTML = (autoBeenMK2modifier).toFixed(0);
        document.getElementById("labsUpgradeCost").innerHTML = upgradeLabsCost;
        document.getElementById("labs").innerHTML = labsMod;
        document.getElementById("capacityUpgradeCost").innerHTML = upgradeCapacityCost;
        document.getElementById("capacity").innerHTML = capacityMod;
        document.getElementById("bytes").innerHTML = bytes;
        document.getElementById("rpCost").innerHTML = createRPcost;
        document.getElementById("rp").innerHTML = rp;
        document.getElementById("autoBeenMK3Cost").innerHTML = researchAutoBeenMK3Cost;
        document.getElementById("autoBeenMK3Amount").innerHTML = (autoBeenMK3modifier / 5);
        document.getElementById("powerInjectionCost").innerHTML = researchPowerInjectionCost;
    }
    else{
        alert('Welcome to Beenz Simulator')
    }
}
var lifetimeBeenz = 0;
var beenz = 0;
var beenzPower = 1;
var maxBeenz = 50;
var sacrificeBeenzVal = 25;
var upgradeContainerCost = 50;
var mMax = 50;
var mLow = 45;
var mHigh = 49;
var mOptimum = 40;
var autoBeenMK1Cost = 100;
var autoBeenMK1modifier = 0;
var autoBeenMK2Cost = 3000;
var autoBeenMK2modifier = 0
var upgradeCapacityCost = 1000;
var capacityMod = 2;
var upgradeLabsCost = 10000;
var labsMod = 0;
var researchAutoBeenMK3Cost = 20;
var autoBeenMK3modifier = 0;
var researchPowerInjectionCost = 50;
var powerInjectionMod = 0;
var rp = 0;
var bytes = 0;
var createRPcost = 5;
var formattedLifetimeBeenz;
var toFixedformattedLifetimeBeenz;
var e1 = 0;
var e2 = 0;
var e3 = 0;
var e4 = 0;
var gamesBeaten = 0;
const EndGame50 = setInterval(EndGame, 20);
function EndGame(){
    localStorage.setItem('gamesBeaten', gamesBeaten);
    if (lifetimeBeenz >= 9000000 && e1 == 0){
        e1 = 1;
        alert('The End is near');
    }
    if (lifetimeBeenz >= 9500000 && e2 == 0){
        e2 = 1;
        alert('The End is nigh');
    }
    if (lifetimeBeenz >= 9850000 && e3 == 0){
        e3 = 1;
        alert('The End is in sight');
    }
    if (lifetimeBeenz >= 10000000 && e4 == 0){
        e4 = 1;
        gamesBeaten += 1;
        alert('THE END!');
        alert('You have reached the end of Beenz Simulator');
        alert('Thank you for playing! -Andre');
        alert('You have beaten beenz simulator '+gamesBeaten+' time(s)')
        alert('TIP: you can press the \'Reset all data\' button to start over and beat the game again')
    }
}
const Update50 = setInterval(Update, 20);
function Update(){
    if (beenz >= maxBeenz){
        setBgColorById('upgradeContainer', '#FF0000')
    }
    if (beenz >= sacrificeBeenzVal){
        setBgColorById('sacrificeBeenzButton', '#FF0000')
    }
    if (beenz < maxBeenz){
        setBgColorById('upgradeContainer', '#333333')
    }
    if (beenz < sacrificeBeenzVal){
        setBgColorById('sacrificeBeenzButton', '#333333')
    }
    if (beenz >= autoBeenMK1Cost){
        setBgColorById('autoBeenMK1', '#FF0000')
    }
    if (beenz < autoBeenMK1Cost){
        setBgColorById('autoBeenMK1', '#333333')
    }
    if (beenz >= autoBeenMK2Cost){
        setBgColorById('autoBeenMK2', '#FF0000')
    }
    if (beenz < autoBeenMK2Cost){
        setBgColorById('autoBeenMK2', '#333333')
    }
    if (beenz >= upgradeLabsCost){
        setBgColorById('upgradeLabs', '#FF0000')
    }
    if (beenz < upgradeLabsCost){
        setBgColorById('upgradeLabs', '#333333')
    }
    if (beenz >= upgradeCapacityCost){
        setBgColorById('upgradeCapacity', '#FF0000')
    }
    if (beenz < upgradeCapacityCost){
        setBgColorById('upgradeCapacity', '#333333')
    }
    if (bytes >= createRPcost){
        setBgColorById('createRP', '#FF0000')
    }
    if (bytes < createRPcost){
        setBgColorById('createRP', '#333333')
    }
    if (rp >= researchAutoBeenMK3Cost){
        setBgColorById('autoBeenMK3', '#FF0000')
    }
    if (rp < researchAutoBeenMK3Cost){
        setBgColorById('autoBeenMK3', '#333333')
    }
    if (rp >= researchPowerInjectionCost){
        setBgColorById('powerInjection', '#FF0000')
    }
    if (rp < researchPowerInjectionCost){
        setBgColorById('powerInjection', '#333333')
    }
}
const AutoBeen20 = setInterval(AutoBeen, 50);
function AutoBeen(){
    if (beenz < maxBeenz){
        beenz = beenz + (autoBeenMK1modifier * beenzPower);
        lifetimeBeenz = lifetimeBeenz + (autoBeenMK1modifier * beenzPower);
        beenz = beenz + (autoBeenMK2modifier * beenzPower);
        lifetimeBeenz = lifetimeBeenz + (autoBeenMK2modifier * beenzPower);
        beenz = beenz + (autoBeenMK3modifier * beenzPower);
        lifetimeBeenz = lifetimeBeenz + (autoBeenMK3modifier * beenzPower);
        document.getElementById("beenzAmount").innerHTML = beenz.toFixed(1);
        document.getElementById('beenzMeter').value = beenz.toFixed(1);
    }
    if (beenz >= maxBeenz){
        beenz = maxBeenz;
        document.getElementById("beenzAmount").innerHTML = beenz.toFixed(1) + '  MAXIMUM BEENZ!!!';
    }
    else{
        toFixedformattedLifetimeBeenz = lifetimeBeenz.toLocaleString("en-US");
        formattedLifetimeBeenz = toFixedformattedLifetimeBeenz;
        document.getElementById('lifetimeBeenz').innerHTML = formattedLifetimeBeenz;
    }
}
const Labs01 = setInterval(Labs, 5000);
function Labs(){
    if (bytes < capacityMod){
        bytes = bytes + labsMod;
        document.getElementById("bytes").innerHTML = bytes;
    }
    if (bytes >= capacityMod){
        bytes = capacityMod;
        document.getElementById("bytes").innerHTML = bytes + " Max Bytes!!!";
    }
}
function CreateBeenz(){
    if (beenz < maxBeenz){
        beenz = beenz + beenzPower;
        lifetimeBeenz = lifetimeBeenz + beenzPower;
        toFixedformattedLifetimeBeenz = lifetimeBeenz.toLocaleString("en-US");
        formattedLifetimeBeenz = toFixedformattedLifetimeBeenz;
        document.getElementById('lifetimeBeenz').innerHTML = formattedLifetimeBeenz;
        document.getElementById("beenzAmount").innerHTML = beenz.toFixed(1);
        document.getElementById('beenzMeter').value = beenz.toFixed(1);
    }
    if (beenz >= maxBeenz){
        document.getElementById("beenzAmount").innerHTML = beenz.toFixed(1) + '  MAXIMUM BEENZ!!!';
    }
}
function SacrificeBeenz(){
    if (beenz >= sacrificeBeenzVal){
        beenz = beenz - sacrificeBeenzVal;
        beenzPower = beenzPower + 0.1;
        sacrificeBeenzVal = sacrificeBeenzVal * 1.5;
        document.getElementById('sacrificeBeenzPower').innerHTML = sacrificeBeenzVal.toFixed(1);
        document.getElementById("beenzAmount").innerHTML = beenz.toFixed(1);
        document.getElementById('beenzMeter').value = beenz.toFixed(1);
        document.getElementById('beenzPower').innerHTML = beenzPower.toFixed(1);
    }
}
function UpgradeBeenzContainer(){
    if (beenz >= upgradeContainerCost){
        beenz = beenz - upgradeContainerCost;
        upgradeContainerCost = upgradeContainerCost * 2;
        mMax = mMax * 2;
        mLow = mMax * 0.9;
        mHigh = mMax - 1;
        mOptimum = mMax * 0.8;
        maxBeenz = mMax;
        document.getElementById('beenzMeter').value = beenz.toFixed(1);
        document.getElementById("beenzAmount").innerHTML = beenz.toFixed(1);
        document.getElementById("upgradeContainerCost").innerHTML = upgradeContainerCost;
        document.getElementById("beenzMeter").max = mMax.toFixed(0);
        document.getElementById("beenzMeter").low = mLow.toFixed(0);
        document.getElementById("beenzMeter").high = mHigh.toFixed(0);
        document.getElementById("beenzMeter").optimum = mOptimum.toFixed(0);
    }
}
function setBgColorById(id,sColor) {
    var elem;
    if (document.getElementById) {
     if (elem=document.getElementById(id)) {
      if (elem.style) {
       elem.style.backgroundColor=sColor;
       return 1;  // success
      }
     }
    }
    return 0;  // failure
}
function BUYautoBeenMK1(){
    if (beenz >= autoBeenMK1Cost){
        beenz = beenz - autoBeenMK1Cost;
        autoBeenMK1Cost = autoBeenMK1Cost * 1.3;
        autoBeenMK1modifier = autoBeenMK1modifier + 0.1;
        document.getElementById("autoBeenMK1Cost").innerHTML = autoBeenMK1Cost.toFixed(1);
        document.getElementById("autoBeenMK1Amount").innerHTML = (autoBeenMK1modifier * 10).toFixed(0);
    }
}
function BUYautoBeenMK2(){
    if (beenz >= autoBeenMK2Cost){
        beenz = beenz - autoBeenMK2Cost;
        autoBeenMK2Cost = autoBeenMK2Cost * 1.8;
        autoBeenMK2modifier = autoBeenMK2modifier + 1;
        document.getElementById("autoBeenMK2Cost").innerHTML = autoBeenMK2Cost.toFixed(1);
        document.getElementById("autoBeenMK2Amount").innerHTML = (autoBeenMK2modifier).toFixed(0);
    }
}
function UpgradeLabs(){
    if (beenz >= upgradeLabsCost){
        beenz = beenz - upgradeLabsCost;
        upgradeLabsCost = upgradeLabsCost * 4;
        labsMod = labsMod + 1;
        document.getElementById("labsUpgradeCost").innerHTML = upgradeLabsCost;
        document.getElementById("labs").innerHTML = labsMod;
    }
}
function UpgradeCapacity(){
    if (beenz >= upgradeCapacityCost){
        beenz = beenz - upgradeCapacityCost;
        upgradeCapacityCost = upgradeCapacityCost * 3;
        capacityMod = capacityMod * 2;
        document.getElementById("capacityUpgradeCost").innerHTML = upgradeCapacityCost;
        document.getElementById("capacity").innerHTML = capacityMod;
    }
}
function CreateRP(){
    if (bytes >= createRPcost){
        bytes = bytes - createRPcost;
        createRPcost = createRPcost + 1;
        rp = rp + Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        document.getElementById("bytes").innerHTML = bytes;
        document.getElementById("rpCost").innerHTML = createRPcost;
        document.getElementById("rp").innerHTML = rp;
    }
}
function RESEARCHautoBeenMK3(){
    if (rp >= researchAutoBeenMK3Cost){
        rp = rp - researchAutoBeenMK3Cost;
        researchAutoBeenMK3Cost = researchAutoBeenMK3Cost + 20;
        autoBeenMK3modifier = autoBeenMK3modifier + 10;
        document.getElementById('rp').innerHTML = rp;
        document.getElementById("autoBeenMK3Cost").innerHTML = researchAutoBeenMK3Cost;
        document.getElementById("autoBeenMK3Amount").innerHTML = (autoBeenMK3modifier / 10);
    }
}
function RESEARCHpowerInjection(){
    if (rp >= researchPowerInjectionCost){
        rp = rp - researchPowerInjectionCost;
        researchPowerInjectionCost = researchPowerInjectionCost + 50;
        beenzPower = beenzPower + 1;
        document.getElementById('rp').innerHTML = rp;
        document.getElementById("powerInjectionCost").innerHTML = researchPowerInjectionCost;
        document.getElementById("beenzPower").innerHTML = beenzPower.toFixed(1);
    }
}