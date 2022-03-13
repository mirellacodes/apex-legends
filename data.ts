type Tdata = {
  character: string;
  realName: string;
  age: number | string;
  homeWorld: string;
  tacticalAbility: string;
  passiveAbility: string;
  ultimateAbility: string;
}[];

const data: Tdata = [
  {
    character: "BloodHound",
    realName: "Unknown",
    age: "Unknown",
    homeWorld: "Talos",
    tacticalAbility: "Eyes of the Allfather",
    passiveAbility: "Tracker",
    ultimateAbility: "Beast of the Hunt",
  },
  {
    character: "Gibraltar",
    realName: "Makoa Gibraltar",
    age: 30,
    homeWorld: "Solace",
    tacticalAbility: "Dome of Protection",
    passiveAbility: "Gun Shield",
    ultimateAbility: "Defensive Bombardment",
  },
  {
    character: "Lifeline",
    realName: "	Ajay Che",
    age: 24,
    homeWorld: "Psmathe",
    tacticalAbility: "D.O.C Heal Drone",
    passiveAbility: "Combat Medic",
    ultimateAbility: "Care Package",
  },

  {
    character: "Pathfinder",
    realName: "MRVN",
    age: "Unknown",
    homeWorld: "Unknown",
    tacticalAbility: "	Grappling Hook",
    passiveAbility: "	Insider Knowledge",
    ultimateAbility: "	Zipline Gun",
  },

  {
    character: "Wraith",
    realName: "Renne Blasey",
    age: 32,
    homeWorld: "Typhon",
    tacticalAbility: "Into the Void",
    passiveAbility: "Voices from the Void",
    ultimateAbility: "Dimensional Rift",
  },

  {
    character: "Bangalore",
    realName: "Anita Williams",
    age: 38,
    homeWorld: "	Gridiron",
    tacticalAbility: "Smoke Launcher",
    passiveAbility: "Double Time",
    ultimateAbility: "Rolling Thunder",
  },

  {
    character: "Caustic",
    realName: "	Alexander Nox",
    age: 48,
    homeWorld: "Gaea",
    tacticalAbility: "Nox Gas Trap",
    passiveAbility: "Nox Vision",
    ultimateAbility: "Nox Gas Grenade",
  },
];

export default data;
